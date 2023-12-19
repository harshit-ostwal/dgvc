const { Bell, GraduationCap, Calculator, Table2Icon } = require("lucide-react");

// Important News Data
const NewsData = [
    {
        id: 1,
        news: "ESE November 2023 – Time Table",
        date: "18-12-2023",
        icon: <Table2Icon size={24} />,
        href: ""
    },
    {
        id: 2,
        news: "CGPA to Percentage Conversion",
        date: "23-12-2023",
        icon: <Calculator size={24} />,
        href: ""
    },
    {
        id: 3,
        news: "Certificate - Medium of Instruction",
        date: "03-12-2023",
        icon: <GraduationCap size={24} />,
        href: ""
    },
    {
        id: 4,
        news: "Notification to SC & ST Alumni",
        date: "04-12-2023",
        icon: <Bell size={24} />,
        href: ""
    }
]

export default NewsData;