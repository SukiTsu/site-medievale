import "../assets/style/stylePageActualite.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const PageActualite = ({}) => {

    return (
        <>
        <NavBarre strTitre="L'actualité"/>
        <div className="content-actualite">
            <main className="news-container">
            <article className="news">
                    <h2>La Médiévale d’Asnières-sur-Oise</h2>
                    <p className="date">Avenir: le 11-12 octobre 2025</p>
                    <p>

Préparez vos capes et vos heaumes, car le village d’Asnières-sur-Oise replonge dans le passé à l’occasion de ses traditionnelles Médiévales ! 
Durant tout un week-end, les ruelles s’animent au rythme des troubadours, des chevaliers et des artisans. Spectacles de fauconnerie, combats en armure, campements historiques et marchés d’époque transporteront petits et grands au cœur du Moyen Âge. 
Un moment festif et convivial à ne pas manquer !


                    </p>
                </article>
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