import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

function CardProject({img, title, desc, linkweb , linkgithub}) {
    return (
        <>
        <div className="project">
            <div className="project-img">
                <img src={img} alt="" />
            </div>
            <div className="project-desc">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={linkweb} className="btn-website"><AiOutlineLink className="project-icon" /> Website</a>
                <a href={linkgithub} className="btn-github"><AiFillGithub className="project-icon" /> GitHub</a>
            </div>
        </div>
        </>
    )
    
}

export default CardProject;