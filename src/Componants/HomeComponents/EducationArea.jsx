import EducationItem from "../SubComponants/EducationItem";

export default function EducationArea() {
    return (
        <section id="education-area" className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Education</h2>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="educaton-content">
                        <div className="cd-timeline">
                                <EducationItem EduDegree="Bachelor Degree" EduDate="Jan 2009 - Jan 2014" EduUniversity="Deffodil University" EduDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim." />
                                <EducationItem EduDegree="Master Degree" EduDate="Jan 2009 - Jan 2014" EduUniversity="Chittagong University" EduDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim." />
                                <EducationItem EduDegree="UI/UX Designer Course" EduDate="Jan 2009 - Jan 2014" EduUniversity="Oxford University" EduDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim." />
                                <EducationItem EduDegree="Interface Designing" EduDate="Jan 2009 - Jan 2014" EduUniversity="Example University" EduDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet dolor metus, eu ullamcorper turpis ornare tincidunt. Vivamus tristique rhoncus enim." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}