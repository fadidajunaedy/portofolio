import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
function Socmed ({sccolor, clsname}) {
    return (
        <>
        <div className={clsname}>
            <a href="https://github.com/fadidajunaedy" target="_blank"><AiFillGithub color={sccolor}/></a>
            <a href="https://www.linkedin.com/in/fadida-junaedy-742652167/" target="_blank"><AiFillLinkedin color={sccolor}/></a>
            <a href="https://www.instagram.com/fadidajunaedy/" target="_blank"><AiFillInstagram color={sccolor}/></a>
        </div>
        </>
    )
}

export default Socmed;