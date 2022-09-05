import Porto from "../data/Porto";
import { Helmet } from 'react-helmet';
import CardProject from "../components/CardProject";

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
                <CardProject 
                    img={project.img}
                    title={project.title} 
                    desc={project.desc}
                    linkweb={project.linkWeb}
                    linkgithub={project.linkGithub}
                />
                ))}
            </div>
        </section>
        </>
    )
}

export default Projects;