import { Helmet } from 'react-helmet';

function Contact() {
    return (
        <>
            <Helmet>
                <title>Fadida Junaedy | Contact</title>
            </Helmet>
            <section className="contact">
                <h2 data-aos="fade-up" data-aos-duration="1000"><span>05_</span>Contact</h2>
                <p data-aos="fade-up" data-aos-duration="1000">Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>  
                <div data-aos="zoom-in" data-aos-duration="1000">
                <a href="#" className="btn-contact">Say Hello</a>
                </div>
            </section>
        </>
    );
}

export default Contact;