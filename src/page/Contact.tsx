
import NavBarre from "../component/NavBarre"
import "../assets/style/stylePageContact.css"
import Footer from "../component/Footer"

const Contact =({}) => {

    return(
        <>
        <NavBarre strTitre="Contact"/>
        <div className="content-contact">
    <main className="contact-container">
        <section className="contact-info">
            <h2>Nous Contacter</h2>
            <p>Michel Peslerbe (président)</p>
            <p><strong>📜 Email :</strong> <a href="mailto:fetes.asnieres95@gmail.com">fetes.asnieres95@gmail.com</a></p>
            <p><strong>📯 Téléphone :</strong> <a href="tel:+33123456789">+33 1 23 45 67 89</a></p>
            <p><strong>🏰 Adresse :</strong> 20 rue d’Aval Eau 95270 Asnières-sur-Oise</p>
        </section>

        <section className="contact-map">
            <h2>Où Nous Trouver</h2>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5221.100328483441!2d2.353361075633579!3d49.13317788133078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e64451fc365363%3A0xbccf28be1a3a1a7c!2s20%20Rue%20d&#39;Aval%20Eau%2C%2095270%20Asni%C3%A8res-sur-Oise!5e0!3m2!1sfr!2sfr!4v1739727439375!5m2!1sfr!2sfr" 
                allowFullScreen={true} loading="lazy">
            </iframe>
        </section>
    </main>
</div>
<Footer />
        </>
    )

}

export default Contact