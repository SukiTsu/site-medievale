
import NavBarre from "../component/NavBarre"
import "../assets/style/styleIndex.css"
import "../assets/style/styleHome.css"
import Footer from "../component/Footer"
import AnimatedOnScroll from "../component/AnimatedScroll"

const Home =({}) => {

    return(
        <>
            <NavBarre strTitre="Accueil" />
            <div className="container">
                <div className="content-home">
                <h3 className="subtitle">Les Médiévales d’Asnières-sur-Oise</h3>
                <h1 className="title">Présentation</h1>
                <p className="description">
                Asnières-sur-Oise, un village médiéval
Bien vaigniez en l’an de grâce 2025 où nous célébrons avec vous notre XXème fête médiévale. Vous
allez replonger durant deux jours à l’époque du moyen-âge et vivre des moments hors du temps
grâce aux animations telles que la déambulation de danseurs, de musiciens mais aussi des spectacles
de chevalerie et de rapaces.
C’est également la découverte de ripailles d’époque, de métiers oubliés, de costumes plus
éblouissants les uns que les autres. Mais attention aux truandiers et aux valdeniers que vous
pourriez croiser. N’en pouvoir ni ho ni jo !!! Or y allons et festoyez bien !!!
                </p>
                <a href="https://www.instagram.com/ujuicy.real?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="cta-link">Notre page intagram</a>
                </div>
                <div className="image-container">
                <AnimatedOnScroll children={<img src="./logo.png"/>} time={0.1} repeat={false}/>
                </div>
                

            </div>

            <Footer />
        </>
    )

}

export default Home