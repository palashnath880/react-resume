import CountDown from "./CountDown";
export default function SkillItem({ SkillPercent, SkillTitle }) {
    return (
        <div className="skillbar mb-4">
            <div className="title">{SkillTitle}</div>
            <div className="count_main">
                <CountDown SkillPercent={SkillPercent} />
            </div>
        </div>
    );

}