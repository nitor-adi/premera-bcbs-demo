import React from 'react';
import { PlanConnexionData } from '../../config';

const PlanConnexionTable = () => {
    return (
        <div className="p-2">
            <span className="font-bold">Plan connexion summary</span>
            <div className="overflow-auto rounded-md shadow-sm border border-gray-200 mt-4">
                <table className="min-w-full text-sm text-gray-700">
                    <thead className="bg-gray-100 text-xs capitalise font-semibold text-gray-600">
                        <tr>
                            <th className="px-4 py-2 text-left">Line no</th>
                            <th className="px-4 py-2 text-left">Proc</th>
                            <th className="px-4 py-2 text-left">Modifiers</th>
                            <th className="px-4 py-2 text-left">Charges ($)</th>
                            <th className="px-4 py-2 text-left">From</th>
                            <th className="px-4 py-2 text-left">To</th>
                            <th className="px-4 py-2 text-left">POS</th>
                            <th className="px-4 py-2 text-left">TOS</th>
                            <th className="px-4 py-2 text-left">Diagnosis</th>
                            <th className="px-4 py-2 text-left">Num</th>
                            <th className="px-4 py-2 text-left">Provider</th>
                        </tr>
                    </thead>
                    <tbody>
                        {PlanConnexionData.map((item, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-100 hover:bg-blue-50 transition"
                            >
                                <td className="px-4 py-2">
                                    {item.line_number}
                                </td>
                                <td className="px-4 py-2">{item.proc}</td>
                                <td className="px-4 py-2">{item.modifiers}</td>
                                <td className="px-4 py-2">{item.charges}</td>
                                <td className="px-4 py-2">{item.from}</td>
                                <td className="px-4 py-2">{item.to}</td>
                                <td className="px-4 py-2">{item.pos}</td>
                                <td className="px-4 py-2">{item.tos}</td>
                                <td className="px-4 py-2">{item.diagnosis}</td>
                                <td className="px-4 py-2">{item.num}</td>
                                <td className="px-4 py-2">{item.provider}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlanConnexionTable;
