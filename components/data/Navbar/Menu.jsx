import { GraduationCap, User2 } from "lucide-react";

// Menus Data
const MenuData = [
    {
        id: 1,
        title: "Home",
        href: "/",
    },
    {
        id: 2,
        title: "Authorities",
        href: "/",
        subMenu: [
            {
                subId: 1,
                subTitle: "Hell3",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            },
            {
                subId: 2,
                subTitle: "Hell2",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            },
            {
                subId: 3,
                subTitle: "Hell1",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            }
        ]
    },
    {
        id: 3,
        title: "Departments",
        href: "/",
        subMenu: [
            {
                subId: 1,
                subTitle: "Hell3",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            },
            {
                subId: 2,
                subTitle: "Hell2",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            },
            {
                subId: 3,
                subTitle: "Hell1",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            }
        ]
    },
    {
        id: 4,
        title: "Admission",
        href: "/",
        subMenu: [
            {
                subId: 1,
                subTitle: "Hell123",
                subHref: "/",
                subIcon: <User2 size={24} />
            },
            {
                subId: 2,
                subTitle: "Aasd",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            }
        ]
    },
    {
        id: 5,
        title: "IQAC",
        href: "/",
        subMenu: [
            {
                subId: 1,
                subTitle: "Hell3",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            },
            {
                subId: 2,
                subTitle: "Hell2",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            },
            {
                subId: 3,
                subTitle: "Hell1",
                subHref: "/",
                subIcon: <GraduationCap size={24} />
            }
        ]
    },
    {
        id: 6,
        title: "College Fees",
        href: "/",
    },
    {
        id: 7,
        title: "Examinations",
        href: "/",
    },
    {
        id: 8,
        title: "Placement",
        href: "/",
    },
    {
        id: 9,
        title: "Research",
        href: "/",
    },
    {
        id: 10,
        title: "Alumni",
        href: "/",
    },
    {
        id: 11,
        title: "RTI",
        href: "/",
    },
    {
        id: 12,
        title: "Contact Us",
        href: "/",
    },
]

export default MenuData;