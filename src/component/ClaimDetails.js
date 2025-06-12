import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CopyOutlined } from '@ant-design/icons';
import { FaRegFilePdf } from 'react-icons/fa';
import NavTab from './NavTab';
import FacetTable from './Table/FacetTable';
import PlanConnexionTable from './Table/PlanConnexionTable';
import ComparisonTable from './Table/Verification';
import FinalSummaryTable from './Table/FinalSummary';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { ValidationReport, FacetData, PlanConnexionData } from '../config';
import { useAppliedChangesStore } from '../root/store';

const normalizeFinalSummary = (
    ValidationReport,
    FacetData,
    PlanConnexionData,
    appliedChanges // <-- pass this!
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
        const { proc, fields, status } = entry;

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

        // ✅ Corrected logic to consider store (appliedChanges)
        if (
            status === 'missing_in_facet' &&
            (mapFacet[proc] || mapStore[proc])
        ) {
            adjustedStatus = 'pended';
        }

        return {
            ...normalized,
            status: adjustedStatus,
        };
    });
};

const ClaimDetails = ({ claim }) => {
    const [copied, setCopied] = useState(false);
    const location = useLocation();
    const { appliedChanges } = useAppliedChangesStore();

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(claim.bcbs_id);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    const renderTableByPath = () => {
        if (location.pathname.endsWith('/facet-summary')) {
            return <FacetTable />;
        }
        if (location.pathname.endsWith('/plan-summary')) {
            return <PlanConnexionTable />;
        }
        if (location.pathname.endsWith('/verification')) {
            return <ComparisonTable />;
        }
        if (location.pathname.endsWith('/final-summary')) {
            return <FinalSummaryTable />;
        }
        return <p className="text-gray-500">Please select a tab.</p>;
    };

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(16);
        doc.text('Validation Report Summary', 14, 16);

        // Validation Summary Table
        const validationRows = ValidationReport.map((entry) => {
            const charges = entry.fields?.charges || {};
            return [
                entry.proc,
                entry.status,
                charges.facet || '',
                charges.plan || '',
                charges.match ? '✅' : '❌',
            ];
        });

        autoTable(doc, {
            startY: 20,
            head: [
                [
                    'Proc',
                    'Status',
                    'Facet Charge',
                    'Plan Charge',
                    'Charge Match',
                ],
            ],
            body: validationRows,
        });

        // Final Summary Table
        doc.addPage();
        doc.text('Final Normalized Summary', 14, 16);

        const finalRows = normalizeFinalSummary(
            ValidationReport,
            FacetData,
            PlanConnexionData,
            appliedChanges
        );

        autoTable(doc, {
            startY: 20,
            head: [
                [
                    'From',
                    'To',
                    'POS',
                    'TOS',
                    'Proc',
                    'Diagnosis',
                    'Charges',
                    'Status',
                ],
            ],
            body: finalRows.map((row) => [
                row.from,
                row.to,
                row.pos,
                row.tos,
                row.proc,
                row.diagnosis,
                row.charges,
                row.status,
            ]),
        });

        doc.save(`FinalSummary_${claim.claim_id}.pdf`);
    };

    return (
        <div className="main-content w-3/4 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-4">{claim.claim_id}</h1>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center"
                    onClick={generatePDF}
                >
                    <FaRegFilePdf />
                    &nbsp;Claim summary
                </button>
            </div>

            <div className="flex items-center gap-x-2 mb-4">
                <h3 className="text-gray-500 cursor-pointer">
                    <b>SCCF ID:</b> {claim.sccf_id}
                </h3>
                <button
                    className="text-gray-400 hover:text-blue-400 transition flex items-center"
                    onClick={handleCopy}
                    aria-label="Copy SCCF ID"
                >
                    <CopyOutlined />
                </button>
                {copied && (
                    <span className="text-sm text-green-600">Copied!</span>
                )}
            </div>

            <NavTab />
            <div className="mt-4">{renderTableByPath()}</div>
        </div>
    );
};

export default ClaimDetails;
