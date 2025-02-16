import "../assets/style/stylePageHistory.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const PageHistory = ({}) => {


    return (
        <>
        <NavBarre strTitre="Historique"/>
        <div className="content-history">
            <main>
                <h1>Asnières-sur-Oise, un village médiéval</h1>
                <section className="story">
                    <p>Possession de l’Abbaye de Saint-Denis en 907 comme en atteste un acte du roi Robert, le village es
                    déjà à cette époque un bourg structuré avec une église et un château royal.</p>
                </section>

                <section className="story">
                    <p>
                    De larges fossés d’eau entourent le château pour faciliter sa défense. Neuf tours semi-circulaires
protègent l’enceinte, dont une seule a été conservée. Le donjon constitue l’entrée et la façade

principale. L’enceinte de huit pieds d’épaisseur est munie d’un chemin de ronde. Le château domine
une plaine de l’Oise, dont il doit assurer la défense, et le versant Nord de la forêt de Carnelle. Les
visiteurs du château s’annoncent à la conciergerie, maison qui existe encore aujourd’hui face au
lavoir dit des Auges, nom dû au fait que les animaux, ânes, moutons, venaient s’y abreuver.
                    </p>
                </section>

                <section className="story">
                    <p>
                    Louis VIII et Blanche de Castille se réfugiaient à Asnières-sur-Oise pour savourer sa campagne et sa
végétation dans un château qui porte depuis le XIII siècle le nom de la Reine Blanche. C’était à la fois
une maison de plaisance et un point de départ pour les chasses.
                    </p>
                </section>

                <section className="story">
                    <p>
                    Le jeune Louis IX, futur Saint Louis, y fait de fréquents séjours avec ses parents. Avec l’aide de sa
mère Blanche de Castille, il fonde en 1228 l’Abbaye de Royaumont dans laquelle il aime à se retirer.
                    </p>
                </section>
            </main>
        </div>
        <Footer />
        </>
    )
}

export default PageHistory