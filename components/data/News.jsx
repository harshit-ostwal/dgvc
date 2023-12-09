const { Bell, GraduationCap, Calculator, Table2Icon } = require("lucide-react");

// Important News Data
const NewsData = [
    {
        id: 1,
        news: "ESE November 2023 – Time Table",
        date:"09-12-2023",
        icon: <Table2Icon size={24} color="lightgray" />,
        href: ""
    },
    {
        id: 2,
        news: "CGPA to Percentage Conversion",
        date:"12-12-2023",
        icon: <Calculator size={24} color="lightgray" />,
        href: ""
    },
    {
        id: 3,
        news: "Certificate - Medium of Instruction",
        date:"09-12-2023",
        icon: <GraduationCap size={24} color="lightgray" />,
        href: ""
    },
    {
        id: 3,
        news: "Notification to SC & ST Alumni",
        date:"16-12-2023",
        icon: <Bell size={24} color="lightgray" />,
        href: ""
    }
]

export default NewsData;