const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/',
    },
    {
        id: 2,
        name: 'Etherfun',
        links: '#',
        namesub: [
            {
                id: 1,
                sub: 'Token',
                links: '/token'
            },
            {
                id: 2,
                sub: 'Roadmap',
                links: '/roadmap'
            },
            {
                id: 3,
                sub: 'Team Details',
                links: '/team_details'
            },
            {
                id: 3,
                sub: 'FaQ',
                links: '/faqs'
            },
        ]
    },
    {
        id: 3,
        name: 'Swap',
        links: '/connect',
    },
    {
        id: 4,
        name: 'Create Token',
        links: '/project_submit',
    },
    
]

export default menus;