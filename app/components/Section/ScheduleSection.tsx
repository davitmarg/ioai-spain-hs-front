// components/ScheduleSection.tsx
import Section from "./Section";

interface ScheduleSectionProps {
    id: string;
    backgroundColor: string;
    onInView: (id: string) => void;
}

// Data for the daily schedule. Easy to modify or add new events here.
const dailySchedule = [
    {
        time: "7:00am - 9:00am",
        title: "Early Rise",
        description:
            "Kids will start their day off right with a morning workout, then clean up before diving into important announcements for the day. Afterwards, they will fuel up with a delicious breakfast to power through the day.",
    },
    {
        time: "9:30am - 11:00am",
        title: "1st Period",
        description:
            "Students will acquire the necessary coding skills to advance by attending lectures, practicing and taking quizzes during the first part of class.",
    },
    {
        time: "11:00am - 11:30am",
        title: "Snack Time",
        description:
            "During the day, children are given a break to recharge with a nutritious snack. This helps to increase energy levels and keep the mind alert.",
    },
    {
        time: "11:30am - 1:00pm",
        title: "2nd Period",
        description:
            "The second part of the class focuses on individual practice, with the teacher guiding the students in creating their own projects.",
    },
    {
        time: "1:30pm - 4:00pm",
        title: "Lunch",
        description:
            "During lunch break, children at the summer camp are provided with a nutritious and well balanced meal to nourish their body and sustain them for the rest of the day's activities.",
    },
    {
        time: "4:00pm - 7:00pm",
        title: "Activities",
        description:
            "At the camp, children on Menorca can participate in a variety of activities such as swimming, kayaking, hiking and exploring the island's unique culture and history providing them with an exciting and memorable experience.",
    },
];

const ScheduleSection = ({
    id,
    backgroundColor,
    onInView,
}: ScheduleSectionProps) => {
    return (
        <Section id={id} backgroundColor={backgroundColor} onInView={onInView}>
            <div className="w-full max-w-4xl mx-auto px-8 py-16 md:py-24 text-gray-700">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-16 font-balgin text-[#4f46e5]">
                    A day in the life at IOAI camp
                </h1>

                <div className="space-y-8">
                    {dailySchedule.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-start"
                        >
                            {/* Time Column */}
                            <div className="md:col-span-1 text-left">
                                <p className="text-lg font-semibold">
                                    {item.time}
                                </p>
                            </div>
                            {/* Details Column */}
                            <div className="md:col-span-2 text-left">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2 font-balgin">
                                    {item.title}
                                </h3>
                                <p className="text-base leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ScheduleSection;
