import { FacetData } from '../../config';

export default function FacetTable() {
    console.log(
        '--------------------->>>>>>>',
        sessionStorage.getItem('access_token')
    );
    return (
        <div className="rounded-md border p-2 bg-white overflow-x-auto">
            <h2 className="text-lg font-bold mb-2">Facet report summary</h2>
            <table className="table-auto w-full text-sm border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-2 py-1 border text-left">From</th>
                        <th className="px-2 py-1 border text-left">To</th>
                        <th className="px-2 py-1 border text-left">POS</th>
                        <th className="px-2 py-1 border text-left">TOS</th>
                        <th className="px-2 py-1 border text-left">Proc</th>
                        <th className="px-2 py-1 border text-left">
                            Diagnosis
                        </th>
                        <th className="px-2 py-1 border text-left">Charges</th>
                    </tr>
                </thead>
                <tbody>
                    {FacetData.map((row, idx) => (
                        <tr key={idx}>
                            <td className="border px-2 py-1">{row.from}</td>
                            <td className="border px-2 py-1">{row.to}</td>
                            <td className="border px-2 py-1">{row.pos}</td>
                            <td className="border px-2 py-1">{row.tos}</td>
                            <td className="border px-2 py-1">{row.proc}</td>
                            <td className="border px-2 py-1">
                                {row.diagnosis}
                            </td>
                            <td className="border px-2 py-1">{row.charges}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
