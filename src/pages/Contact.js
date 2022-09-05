import { Helmet } from 'react-helmet';

function Contact() {
    return (
        <>
            <Helmet>
                <title>Fadida Junaedy | Contact</title>
            </Helmet>
            <section className="contact">
                <div data-aos="fade-up" data-aos-duration="1000">
                    <h2><span>05_</span>Contact</h2>
                    <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>  
                </div>
                <div data-aos="zoom-in" data-aos-duration="1000">
                    <a href="#" className="btn-contact">Say Hello</a>
                </div>
            </section>
        </>
    );
}

export default Contact;