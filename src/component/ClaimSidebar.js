import { ClaimCard } from './ClaimCard';
import { claims } from '../config';

const ClaimSidebar = ({ setSelectedClaim }) => {
    return (
        <div className="sidebar w-1/4 overflow-y-auto">
            {claims.map((claim) => (
                <ClaimCard
                    key={claim.claim_id}
                    claim={claim}
                    setSelectedClaim={setSelectedClaim}
                />
            ))}
        </div>
    );
};

export default ClaimSidebar;
