const claims = [
    {
        claim_id: 'CLAIM 90340980340',
        bcbs_id: 'AQT60436930401', // From "Provider ID"
        plan_name: 'N/A', // Not available in the image
        status: 'Pended',
        last_updated: '07/20/2024', // Assumed from latest service date
        provider: 'AQT60436930401',
        sccf_id: '400022541433270400', // From "Provider ID"
    },
    {
        claim_id: 'CLAIM 002',
        bcbs_id: 'SCCF123456',
        plan_name: 'Health Plan A',
        status: 'Resolved',
        last_updated: '2023-10-05',
        provider: 'AQT60436930401',
        sccf_id: '400022541433270400', // From "Provider ID"
    },
    {
        claim_id: 'CLAIM 003',
        bcbs_id: 'SCCF123456',
        plan_name: 'Health Plan A',
        status: 'Resolved',
        last_updated: '2023-10-07',
        provider: 'AQT60436930401',
        sccf_id: '400022541433270400', // From "Provider ID"
    },
];

const FacetData = [
    {
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: 'CPC2',
        proc: '99213',
        diagnosis: 'J029',
        charges: '$274.00',
    },
    {
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: 'NCA',
        proc: '1036F',
        diagnosis: 'J029',
        charges: '$0.00',
    },
    {
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: 'NCA',
        proc: '3008F',
        diagnosis: 'J029',
        charges: '$0.00',
    },
    {
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: 'NCA',
        proc: '3075F',
        diagnosis: 'J029',
        charges: '$0.00',
    },
    {
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: 'NCA',
        proc: '3078F',
        diagnosis: 'J029',
        charges: '$0.00',
    },
];

const PlanConnexionData = [
    {
        line_number: '0001',
        proc: '3008F',
        modifiers: '--',
        charges: '0.00',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '600',
        diagnosis: '1,2',
        num: '1',
        provider: '8VB617',
    },
    {
        line_number: '0002',
        proc: '1036F',
        modifiers: '--',
        charges: '0.00',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '600',
        diagnosis: '1,2',
        num: '1',
        provider: '8VB617',
    },
    {
        line_number: '0003',
        proc: '3078F',
        modifiers: '--',
        charges: '0.00',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '600',
        diagnosis: '1,2',
        num: '1',
        provider: '8VB617',
    },
    {
        line_number: '0004',
        proc: '87428',
        modifiers: '--',
        charges: '43.00',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '800',
        diagnosis: '1,2',
        num: '1',
        provider: '8VB617',
    },
    {
        line_number: '0005',
        proc: '3075F',
        modifiers: '--',
        charges: '0.00',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '600',
        diagnosis: '1,2',
        num: '1',
        provider: '8VB617',
    },
    {
        line_number: '0006',
        proc: '99213',
        modifiers: '--',
        charges: '274.00',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '600',
        diagnosis: '1,2',
        num: '1',
        provider: '8VB617',
    },
    {
        line_number: '0007',
        proc: '87880',
        modifiers: '--',
        charges: '49.59',
        from: '07/20/2024',
        to: '07/20/2024',
        pos: '11',
        tos: '800',
        diagnosis: '1',
        num: '1',
        provider: '8VB617',
    },
];

const ValidationReport = [
    {
        proc: '99213',
        status: 'match',
        fields: {
            charges: {
                facet: '$274.00',
                plan: '274.00',
                match: true,
            },
            tos: {
                facet: 'CPC2',
                plan: '600',
                match: false,
            },
            diagnosis: {
                facet: 'J029',
                plan: '1,2',
                match: false,
            },
        },
    },
    {
        proc: '1036F',
        status: 'match',
        fields: {
            charges: {
                facet: '$0.00',
                plan: '0.00',
                match: true,
            },
            tos: {
                facet: 'NCA',
                plan: '600',
                match: false,
            },
            diagnosis: {
                facet: 'J029',
                plan: '1,2',
                match: false,
            },
        },
    },
    {
        proc: '3008F',
        status: 'match',
        fields: {
            charges: {
                facet: '$0.00',
                plan: '0.00',
                match: true,
            },
            tos: {
                facet: 'NCA',
                plan: '600',
                match: false,
            },
            diagnosis: {
                facet: 'J029',
                plan: '1,2',
                match: false,
            },
        },
    },
    {
        proc: '3075F',
        status: 'match',
        fields: {
            charges: {
                facet: '$0.00',
                plan: '0.00',
                match: true,
            },
            tos: {
                facet: 'NCA',
                plan: '600',
                match: false,
            },
            diagnosis: {
                facet: 'J029',
                plan: '1,2',
                match: false,
            },
        },
    },
    {
        proc: '3078F',
        status: 'match',
        fields: {
            charges: {
                facet: '$0.00',
                plan: '0.00',
                match: true,
            },
            tos: {
                facet: 'NCA',
                plan: '600',
                match: false,
            },
            diagnosis: {
                facet: 'J029',
                plan: '1,2',
                match: false,
            },
        },
    },
    {
        proc: '87428',
        status: 'missing_in_facet',
        fields: {
            charges: {
                facet: null,
                plan: '43.00',
                match: false,
            },
            tos: {
                facet: null,
                plan: '800',
                match: false,
            },
            diagnosis: {
                facet: null,
                plan: '1,2',
                match: false,
            },
        },
    },
    {
        proc: '87880',
        status: 'missing_in_facet',
        fields: {
            charges: {
                facet: null,
                plan: '49.59',
                match: false,
            },
            tos: {
                facet: null,
                plan: '800',
                match: false,
            },
            diagnosis: {
                facet: null,
                plan: '1',
                match: false,
            },
        },
    },
];

module.exports = {
    claims,
    FacetData,
    PlanConnexionData,
    ValidationReport,
};
