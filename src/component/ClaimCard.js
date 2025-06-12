export const ClaimCard = ({ claim }) => {
    return (
        <div className="bg-white p-4 mb-4 rounded-lg shadow-sm border border-gray-200 cursor-pointer">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-blue-700">{claim.claim_id}</h3>
                <p
                    className={`text-sm text-white ${
                        claim.status.toLowerCase() === 'pending'
                            ? 'bg-blue-500'
                            : 'bg-green-500'
                    } px-4 rounded-md`}
                >
                    {claim.status}
                </p>
            </div>
            <div className="mt-2 text-sm text-gray-800 space-y-1">
                <div>
                    <strong>SCCF ID:</strong> {claim.bcbs_id}
                </div>
                <div>
                    <strong>Status:</strong> {claim.status}
                </div>
                <div>
                    <strong>Last Updated:</strong> {claim.last_updated}
                </div>
                <div>
                    <strong>Provider:</strong> {claim.provider}
                </div>
            </div>
        </div>
    );
};
