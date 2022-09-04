import { AiFillFilePdf } from 'react-icons/ai';
import fadidaimg from "../assets/jpg/me1.jpg";
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Fadida Junaedy</title>
            </Helmet>
            <section className="home">
                <div className="home-left" data-aos="fade-right" data-aos-duration="1000">
                    <h4>Hi, my name is</h4>
                    <h1>Fadida Zanetti Junaedy</h1>
                    <a href="#" className="btn-cv"><AiFillFilePdf />Download CV</a>
                </div>
                <div className="home-right">
                    <figure data-aos="fade-left" data-aos-duration="1000">
                        <img src={ fadidaimg } alt="" />
                    </figure>
                </div>
            </section>
        </>
    );
}

export default Home;