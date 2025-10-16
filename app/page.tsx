// HomePage.js
"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section/Section";
import HomeSection from "./components/Section/HomeSection";
import AboutUsSection from "./components/Section/AboutUsSection";
import CourseSection from "./components/Section/CourseSection";
import ExperienceSection from "./components/Section/ExperienceSection";
import ExperienceMainSection from "./components/Section/ExperienceMainSection";
import ScheduleSection from "./components/Section/ScheduleSection";
import PricingSection from "./components/Section/PricingSection";
import FAQSection from "./components/Section/FAQSection";
import ContactSection from "./components/Section/ContactSection";
import SafetySection from "./components/Section/SafetySection";
import DedicatedTrackSection from "./components/Section/DedicatedTrackSection";

const sections = [
    {
        id: "home",
        label: "Home",
        color: "#3b82f6",
        navTextColor: "#ffffff",
    },
    {
        id: "about-us",
        label: "About Us",
        color: "#d1fae5",
        navTextColor: "#374151",
    },
    {
        id: "course",
        label: "Course",
        color: "#e0f2fe",
        navTextColor: "#374151",
    },
    {
        id: "the-experience",
        label: "The Experience",
        color: "#3b82f6",
        navTextColor: "#ffffff",
    },
    {
        id: "schedule",
        label: "Schedule",
        color: "#f1f5f9",
        navTextColor: "#374151",
    },
    {
        id: "pricing",
        label: "Pricing",
        color: "#cffafe",
        navTextColor: "#374151",
    },
    {
        id: "faq",
        label: "FAQ",
        color: "#ede9fe",
        navTextColor: "#374151",
    },
    {
        id: "contact-us",
        label: "Contact Us",
        color: "#3b82f6",
        navTextColor: "#374151",
    },
];

export default function HomePage() {
    const [activeSection, setActiveSection] = useState(sections[0].id);
    const activeSectionData =
        sections.find((s) => s.id === activeSection) || sections[0];

    return (
        <main>
            <Navbar
                sections={sections}
                activeColor={activeSectionData.color}
                activeTextColor={activeSectionData.navTextColor}
            />
            <div>
                <HomeSection
                    key={sections[0].id}
                    id={sections[0].id}
                    backgroundColor={sections[0].color}
                    onInView={() => setActiveSection(sections[0].id)}
                />
                <AboutUsSection
                    key={sections[1].id}
                    id={sections[1].id}
                    backgroundColor={sections[1].color}
                    onInView={() => setActiveSection(sections[1].id)}
                />
                <CourseSection
                    key={sections[2].id}
                    id={sections[2].id}
                    backgroundColor={sections[2].color} // Ensure this matches the desired light blue-green
                    onInView={() => setActiveSection(sections[2].id)}
                />
                <DedicatedTrackSection
                    key={"IOAI_Spain"}
                    id={"IOAI_Spain"}
                    backgroundColor={sections[6].color}
                    onInView={() => setActiveSection("IOAI_Spain")}
                />
                <ExperienceSection
                    key={sections[3].id} // Assuming this is the 4th section
                    id={sections[3].id}
                    backgroundColor={sections[3].color}
                    onInView={() => setActiveSection(sections[3].id)}
                />
                <ExperienceMainSection
                    key={sections[3].id + "_main"} // Unique key for this component
                    id={sections[3].id}
                    backgroundColor={sections[3].id}
                    onInView={() => setActiveSection(sections[3].id)}
                />
                <SafetySection
                    key={"safety"}
                    id={"safety"}
                    backgroundColor={sections[5].color}
                    onInView={() => setActiveSection("safety")}
                />
                <ScheduleSection
                    key={sections[4].id}
                    id={sections[4].id}
                    backgroundColor={sections[4].color}
                    onInView={() => setActiveSection(sections[4].id)}
                />
                {/* <PricingSection
                    key={sections[5].id}
                    id={sections[5].id}
                    backgroundColor={sections[5].color}
                    onInView={() => setActiveSection(sections[5].id)}
                /> */}
                <FAQSection
                    key={sections[6].id}
                    id={sections[6].id}
                    backgroundColor={sections[6].color}
                    onInView={() => setActiveSection(sections[6].id)}
                />
                <ContactSection
                    key={sections[7].id}
                    id={sections[7].id}
                    backgroundColor={sections[7].color}
                    onInView={() => setActiveSection(sections[7].id)}
                />
            </div>
        </main>
    );
}
