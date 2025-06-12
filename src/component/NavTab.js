import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavTab = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const tabs = useMemo(
        () => [
            {
                label: 'Facet Summary',
                route: '/portal/facet-summary',
                isDisabled: false,
            },
            {
                label: 'Plan connexion Summary',
                route: '/portal/plan-summary',
                isDisabled: false,
            },
            {
                label: 'Validation summary',
                route: '/portal/verification',
                isDisabled: false,
            },
            {
                label: 'Final Summary',
                route: '/portal/final-summary',
                isDisabled: false,
            },
        ],
        []
    );

    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const index = tabs.findIndex((tab) => tab.route === location.pathname);
        if (index !== -1 && index !== activeTab) {
            setActiveTab(index);
        }
    }, [location.pathname, tabs, activeTab]);

    const handleTabClick = (index) => {
        const tab = tabs[index];
        if (!tab.isDisabled && index !== activeTab) {
            navigate(tab.route);
            setActiveTab(index);
        }
    };

    return (
        <div className="flex w-full bg-gray-100 p-3 rounded-md overflow-x-auto space-x-2 mt-4">
            {tabs.map((tab, index) => {
                const isActive = index === activeTab;
                const isDisabled = tab.isDisabled;

                return (
                    <button
                        key={tab.label}
                        className={`flex-grow min-w-[100px] md:min-w-[120px] text-center px-2 py-2 rounded-md text-sm font-medium transition-all
                            ${
                                isActive
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-500'
                            }
                            ${
                                isDisabled
                                    ? 'cursor-not-allowed opacity-50'
                                    : 'hover:bg-blue-500 hover:text-white'
                            }
                        `}
                        onClick={() => handleTabClick(index)}
                        disabled={isDisabled}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
};

export default NavTab;
