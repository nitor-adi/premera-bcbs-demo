import clsx from 'clsx';
import {
    claims,
    FacetData,
    PlanConnexionData,
    ValidationReport,
} from '../../config';
import { useAppliedChangesStore } from '../../root/store';

const normalizeFinalSummary = (
    ValidationReport,
    FacetData,
    PlanConnexionData,
    appliedChanges
) => {
    const mapFacet = Object.fromEntries(
        FacetData.map((item) => [item.proc, item])
    );
    const mapPlan = Object.fromEntries(
        PlanConnexionData.map((item) => [item.proc, item])
    );
    const mapStore = Object.fromEntries(
        appliedChanges.map((item) => [item.proc, item])
    );

    return ValidationReport.filter(
        (entry) => entry.status !== 'missing_in_plan'
    ).map((entry) => {
        const { proc, status } = entry;

        const facet = mapFacet[proc] || mapStore[proc] || {};
        const plan = mapPlan[proc] || {};

        const normalized = {
            from: facet.from || plan.from || '',
            to: facet.to || plan.to || '',
            pos: facet.pos || plan.pos || '',
            tos: facet.tos || plan.tos || '',
            proc,
            diagnosis: facet.diagnosis || plan.diagnosis || '',
            charges: facet.charges || plan.charges || '',
        };

        let adjustedStatus = status;
        if (
            status === 'missing_in_facet' &&
            (mapFacet[proc] || mapStore[proc])
        ) {
            adjustedStatus = 'match';
        }

        const agentRecommendation =
            adjustedStatus === 'missing_in_facet'
                ? 'The claim has been rejected, need more info to adjudicate the pended claims.'
                : '';

        return {
            ...normalized,
            status: adjustedStatus,
            agentRecommendation,
        };
    });
};

export default function FinalSummaryTable() {
    const { appliedChanges } = useAppliedChangesStore();
    const finalRows = normalizeFinalSummary(
        ValidationReport,
        FacetData,
        PlanConnexionData,
        appliedChanges
    );

    return (
        <div className="rounded-xl bg-white overflow-x-auto">
            <table className="min-w-full table-auto text-sm border-collapse pt-4">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="p-2 border">From</th>
                        <th className="p-2 border">To</th>
                        <th className="p-2 border">POS</th>
                        <th className="p-2 border">TOS</th>
                        <th className="p-2 border">Proc</th>
                        <th className="p-2 border">Diagnosis</th>
                        <th className="p-2 border">Charges</th>
                        <th className="p-2 border">Status</th>
                        <th className="p-2 border w-[100px]">
                            Agent Recommendation
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {finalRows.map((row, i) => (
                        <tr key={i} className="hover:bg-gray-50">
                            <td
                                className={clsx(
                                    'p-2 border',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.from}
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.to}
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.pos}
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.tos}
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border font-semibold',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.proc}
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.diagnosis}
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.charges}
                            </td>
                            <td className="p-2 border">
                                <span
                                    className={clsx(
                                        'px-2 py-1 rounded-md text-xs font-semibold',
                                        row.status === 'match' &&
                                            'bg-green-100 text-green-800',
                                        row.status === 'missing_in_facet' &&
                                            'bg-orange-100 text-orange-800',
                                        row.status === 'missing_in_plan' &&
                                            'bg-yellow-100 text-yellow-800',
                                        row.status === 'mismatch' &&
                                            'bg-red-100 text-red-700',
                                        row.status === 'pended' &&
                                            'bg-blue-200 text-blue-800'
                                    )}
                                >
                                    {row.status.replaceAll('_', ' ')}
                                </span>
                            </td>
                            <td
                                className={clsx(
                                    'p-2 border italic text-gray-700',
                                    row.status === 'missing_in_facet' &&
                                        'bg-orange-50'
                                )}
                            >
                                {row.agentRecommendation}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
