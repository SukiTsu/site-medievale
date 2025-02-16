import "../assets/style/stylePageMentionLegal.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const MentionLegal = ({}) => {

    return (
    <>
    <NavBarre strTitre="Mention Legal"/>
    <div className="content-mention">
        <div className="parchment">
            <header>
                <h1 className="medieval-title">📜 Mentions Légales 📜</h1>
            </header>

            <section className="content">
                <h2>🏰 Développement et graphisme</h2>
                La version actuelle du site Les Médiévales d'Asnières-sur-Oise a été développée et designée par Brandon.
                <h2>⚖️ Hébergement</h2>
                <p>Le site est hébergé par <strong>Vercel</strong>.</p>

                <h2>📜 Propriété intellectuelle</h2>
                <p>Une grande partie des photos est la propriété intellectuelle d'Eric Descarpentri, photographe
                exceptionnel qui a très aimablement accepter de nous en laisser l'usage. Néanmoins toute

                reproduction, distribution, modification, adaptation, retransmission ou publication de ces photos est
                strictement interdite sans l'accord écrit d'Eric Descarpentri.</p>

                <h2>📧 Contact</h2>
                <p>
                Michel Peslerbe (président)
                <ul>
                    <li>Email : fetes.asnieres95@gmail.com</li>
                    <li>Adresse postale : 20 rue d'Aval Eau 95270 Asnières-sur-Oise</li>
                </ul>
                </p>
                <h2>Politique de cookies</h2>
                <p>
                    Au chocolat noir et éclats de noisettes c'est encore meilleur.<br/>
                    Ce site n'utilise aucun cookie.</p>
            </section>

            <footer>
                <p>© 2025 - Tous droits réservés | <a href="#">Retour à l'accueil</a></p>
            </footer>
        </div>
    </div>
    <Footer />
    </>
    )
}

export default MentionLegal