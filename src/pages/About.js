import { Helmet } from 'react-helmet';

function About() {
    return (
        <>
            <Helmet>
                <title>Fadida Junaedy | About</title>
            </Helmet>
            <section className="about">
                <aside>
                    <h2 data-aos="fade-right" data-aos-duration="1000"><span>02_</span>About</h2>
                </aside>
                <article>
                <p data-aos="fade-left" data-aos-duration="1000">
                        Hello! My name is Fadida and I enjoy creating things that live on the internet. My interest in web development (especially Front End) started back in 2018 when I was in 2nd grade Senior High School— turns out make a few web design with HTML & CSS!
                    </p>
                    <p data-aos="fade-left" data-aos-duration="1000">
                        I'm currently studying at STIKOM CKI / College of Computer Science majoring in Informatics Engineering, Semester 4.                    
                    </p>
                </article>
            </section>
        </>
    );
}

export default About;