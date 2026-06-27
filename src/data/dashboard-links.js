import { ACCOUNT_TYPE } from "../utils/constant";


export const sidebarLinks = [
    {
        id: 1,
        name: "Home",
        path: "/dashboard/home",
        icon: "VscHome"
    },
    {
        id: 2,
        name: "Upload POD",
        path: "/dashboard/upload-pod",
        type: ACCOUNT_TYPE.STAFF,
        icon: "VscFiles",
        // children: [
        //     {
        //         id:11,
        //         name:"Upload POD",
        //         path:"/dashboard/upload-pod",
        //         icon:"VscAdd"
        //     },
        //     {
        //         id:12,
        //         name:"Search POD",
        //         path:"/dashboard/search-pod",
        //         icon:"VscSearch"
        //     }
        // ]
    },
    {
        id: 3,
        name: "Search POD",
        path: "/dashboard/search-pod",
        icon: "VscSearch"
    },
    {
        id: 4,
        name: "Client",
        path: "/dashboard/pending-client",
        type: ACCOUNT_TYPE.ADMIN,
        icon: "VscPerson",
        children: [
            {
                id: 41,
                name: "Approved Client",
                path: "/dashboard/approve-client",
                icon: "VscAdd"
            },
             {
                id: 42,
                name: "Pending Client",
                path: "/dashboard/pending-client",
                icon: "VscAdd"
            },
        
        ]
    },
    {
        id: 5,
        name: "Staff",
        path: "/dashboard/staff",
        type: ACCOUNT_TYPE.ADMIN,
        icon: "VscOrganization",
        children: [
            {
                id: 41,
                name: "Approved Staff",
                path: "/dashboard/approved-staff",
                icon: "VscPassFilled"
            },
             {
                id: 42,
                name: "Pending Staff",
                path: "/dashboard/pending-staff",
                icon: "VscAdd"
            },
        
        ]
    }
]