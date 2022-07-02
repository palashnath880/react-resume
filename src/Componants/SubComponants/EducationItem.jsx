export default function EducationItem({ EduDegree, EduDate, EduUniversity, EduDescription }) {
    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img">
                <span className="dot"></span>
            </div>
            <div className="cd-timeline-content">
                <div className="cd-heading wow fadeInLeft">
                    <h2>{ EduDegree }</h2>
                    <p>{ EduDate } | <span>{ EduUniversity }</span></p>
                </div>
                <span className="cd-description wow fadeInRight">
                    { EduDescription }
                </span>
            </div>
        </div>
    );
}