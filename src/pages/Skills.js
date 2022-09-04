import html from "../assets/svg/html5-brands.svg";
import css from "../assets/svg/css3-alt-brands.svg";
import js from "../assets/svg/js-brands.svg";
import php from "../assets/svg/php-brands.svg";
import sass from "../assets/svg/sass-brands.svg";
import bootstrap from "../assets/svg/bootstrap-brands.svg";
import laravel from "../assets/svg/laravel-brands.svg";
import reactjs from "../assets/svg/react-brands.svg";
import { Helmet } from 'react-helmet';

function Skills() {
    const logos = [html, css, js, php, sass, bootstrap, laravel, reactjs];
    return (
        <>
            <Helmet>
                <title>Fadida Junaedy | Skills</title>
            </Helmet>
            <section className="skills">
                <aside>
                    <h2 data-aos="fade-right" data-aos-duration="1000"><span>03_</span>Skills</h2>
                </aside>
                <article>
                    <div className="skills-container">
                        {logos.map((logo) => (
                            <div data-aos="flip-left" data-aos-duration="1000">
                                <div className="skill">
                                    <img src={ logo } alt="" />
                                </div>
                            </div>
                        ))  }
                    </div>
                </article>
            </section>
        </>
    );
}

export default Skills;