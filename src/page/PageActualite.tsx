import "../assets/style/stylePageActualite.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const PageActualite = ({}) => {

    return (
        <>
        <NavBarre strTitre="Actualité"/>
        <div className="content-actualite">
            <main className="news-container">
                <article className="news">
                    <h2>Tournoi des Chevaliers</h2>
                    <p className="date">Publié le 10 février 2025</p>
                    <p>Le grand tournoi de chevalerie se tiendra ce samedi au château royal. Venez assister aux duels et joutes spectaculaires !</p>
                </article>

                <article className="news">
                    <h2>Marché du village</h2>
                    <p className="date">Publié le 5 février 2025</p>
                    <p>Le marché médiéval ouvre ses portes avec des artisans, troubadours et mets d’antan. Venez découvrir les trésors cachés du royaume.</p>
                </article>

                <article className="news">
                    <h2>Révolte paysanne</h2>
                    <p className="date">Publié le 1er février 2025</p>
                    <p>Les serfs réclament de meilleures conditions de vie ! Le seigneur du village tiendra un conseil exceptionnel.</p>
                </article>
            </main>
        </div>
        <Footer />
        </>
    )
}

export default PageActualite