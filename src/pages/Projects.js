import Porto from "../data/Porto";
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { Helmet } from 'react-helmet';

function Projects() {
    return (
        <>
        <Helmet>
                <title>Fadida Junaedy | Projects</title>
        </Helmet>
        <section className="projects">
            <h2 data-aos="fade-left" data-aos-duration="1000"><span>04_</span>Projects</h2>
            <div className="projects-container" data-aos="fade-up" data-aos-duration="1000">
                {Porto.project.map((project) => (
                <div className="project">
                    <div className="project-img">
                        <img src={project.img} alt="" />
                    </div>
                    <div className="project-desc">
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <a href={project.linkWeb} className="btn-website"><AiOutlineLink className="project-icon" /> Website</a>
                        <a href={project.linkGithub} className="btn-github"><AiFillGithub className="project-icon" /> GitHub</a>
                    </div>
                </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Projects;