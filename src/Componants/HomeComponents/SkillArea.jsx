import { useEffect, useRef, useState } from "react";
import SkillAreaBottom from "../SubComponants/SkillAreaBottom";
import SkillItem from "../SubComponants/SkillItem";

export default function SkillArea() {

    const skillRef = useRef("skills");
    const [visibility, setVisibility] = useState(false);

    const scrollHandle = () => {
        const scrollTop = skillRef.current.offsetTop;
        const scrollY = window.scrollY;

        if ( (scrollTop - 500 ) < scrollY ) {
            if (visibility === false ) {
                setVisibility(true);
            }
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandle );
        return () => window.removeEventListener('scroll', scrollHandle);
    });

    return (
        <section id="pro-skills-area" className="py-5" ref={skillRef}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="m-0 p-0 text-center py-5 text-light">Professional Skills</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="skills-area-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="skills-content mt-4">
                                <div className="skill_list">
                                    { visibility === true ? <SkillItem SkillPercent="80" SkillTitle="html5" /> : false}
                                    { visibility === true ? <SkillItem SkillPercent="70" SkillTitle="css3" /> : false }
                                    { visibility === true ? <SkillItem SkillPercent="74" SkillTitle="javascript" /> : false }
                                    { visibility === true ? <SkillItem SkillPercent="60" SkillTitle="jquery" /> : false }
                                    { visibility === true ?  <SkillItem SkillPercent="50" SkillTitle="react" /> : false }
                                    { visibility === true ? <SkillItem SkillPercent="75" SkillTitle="php" /> : false}
                                    { visibility === true ? <SkillItem SkillPercent="30" SkillTitle="node js" /> : false }
                                    { visibility === true ? <SkillItem SkillPercent="90" SkillTitle="mysql" /> : false }                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SkillAreaBottom />
        </section>
    );
}