import React from "react";
import HomeArea from "./HomeComponents/HomeArea";
import AboutArea from './HomeComponents/AboutArea';
import InterestArea from "./HomeComponents/InterestArea";
import SkillArea from "./HomeComponents/SkillArea";
import PortfolioArea from "./HomeComponents/PortfolioArea";
import TestimonialArea from "./HomeComponents/TestimonialArea";
import HireArea from "./HomeComponents/HireArea";
import BlogArea from "./HomeComponents/BlogArea";
import ContactArea from "./HomeComponents/ContactArea";

export default function Home() {

    return (
        <>
            <HomeArea />
            <AboutArea />
            <InterestArea />
            <SkillArea />
            <PortfolioArea />
            <TestimonialArea />
            <HireArea />
            <BlogArea />
            <ContactArea />
        </>
    );
}