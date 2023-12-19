import { MoveLeft, MoveRight } from "lucide-react";

// Intro Title Text Data
const IntroData = [
    {
        id: 1,
        name: "intro1",
        title: [
            {
                id: 1,
                startIcon: <MoveLeft size={24} color="gray" />,
                text: `"Step`
            },
            {
                id: 2,
                text: `Inside,`
            },
            {
                id: 3,
                text: `Where`
            },
            {
                id: 4,
                text: `Education`
            },
            {
                id: 5,
                text: `Feels`
            },
            {
                id: 6,
                text: `Like`
            },
            {
                id: 7,
                endIcon: <MoveRight size={24} color="gray" />,
                text: `Home."`
            },
        ],
        color: "text-gray-500",
    },
    {
        id: 2,
        name: "intro2",
        title: [
            {
                id: 1,
                startIcon: <MoveLeft size={24} color="gray" />,
                text: `"You're`
            },
            {
                id: 2,
                text: `About`
            },
            {
                id: 3,
                text: `To`
            },
            {
                id: 4,
                text: `Step`
            },
            {
                id: 5,
                text: `Into`
            },
            {
                id: 6,
                text: `The`
            },
            {
                id: 7,
                text: `World`
            },
            {
                id: 8,
                text: `Of`
            },
            {
                id: 9,
                endIcon: <MoveRight size={24} color="gray" />,
                text: `Wisdom."`
            },
        ],
        color: "text-red-500",
    },
    {
        id: 3,
        name: "intro3",
        title: [
            {
                id: 1,
                startIcon: <MoveLeft size={24} color="gray" />,
                text: `"The`
            },
            {
                id: 2,
                text: `Doors`
            },
            {
                id: 3,
                text: `Are`
            },
            {
                id: 4,
                text: `Opening!`
            },
            {
                id: 5,
                text: `Be`
            },
            {
                id: 6,
                text: `Ready`
            },
            {
                id: 7,
                text: `To`
            },
            {
                id: 8,
                endIcon: <MoveRight size={24} color="gray" />,
                text: `Learn."`
            },
        ],
        color: "text-orange-500",
    },
]

export default IntroData;