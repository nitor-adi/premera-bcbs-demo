import React, { useState } from 'react';
import { claims } from '../config';
import ClaimSidebar from './ClaimSidebar';
import ClaimDetails from './ClaimDetails';

export default function Dashboard() {
    const [selectedClaim, setSelectedClaim] = useState(claims[0]);

    return (
        <div className="container mx-auto py-10">
            <div className="flex space-x-4 justify-between min-h-[calc(100vh-180px)]">
                <ClaimSidebar setSelectedClaim={setSelectedClaim} />
                <ClaimDetails claim={selectedClaim} />
            </div>
        </div>
    );
}
