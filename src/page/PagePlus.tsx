import "../assets/style/stylePagePlus.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const PagePlus = ({}) => {

    return(
        <>
        <NavBarre strTitre="Les petits plus"/>
        <div className="content-plus">
        <main>
        <section className="poem-intro">
            <h2>Poème</h2>
            <p>
            Le temps a laissé son manteau est le poème le plus célèbre de Charles d'Orléans (1394-1465) et le
            rondeau le plus célèbre de l'histoire. Un rondeau est un poème médiéval lyrique à deux rimes,
            composé de 13 vers et dont le premier vers se répète à la fin. Celui-ci évoque le fin de l'hiver et
            l'arrivée du printemps.
            </p>
        </section>

        <section className="poem">
        <p>Le temps a laissé son manteau</p>
        <p>De vent, de froidure et de pluie,</p>
        <p>Et s'est vêtu de broderie,</p>
        <p>De soleil luisant, clair et beau.</p>

        <p>Il n'y a bête ni oiseau</p>
        <p>Qu'en son jargonne chante ou crie:</p>
        <p>Le temps a laissé son manteau</p>
        <p>De vent, de froidure et de pluie.</p>

        <p>Rivière, fontaine et ruisseau</p>
        <p>Portent en livrée jolie,</p>
        <p>Gouttes d'argent d'orfèvrerie;</p>
        <p>Chacun s'habille de nouveau:</p>
        <p>Le temps a laissé son manteau</p>
        </section>

        <section className="vocabulaire">
            <h2>📜 Vocabulaire Médiéval 📜</h2>

            <h3>Jurons et insultes :</h3>

            <h4>Pour des femmes :</h4>
                    <ul>
            <li>Paillarde : fille rustre</li>
            <li>Ribaude : fille de bas étage</li>
            <li>Gueuse : pov’fille</li>
            <li>Devergoigneuse : sans gêne</li>
            </ul>

            <h4>Pour des hommes :</h4>
            <ul>
            <li>Maroufle : maraud</li>
            <li>Coquebert : nigaud</li>
            <li>Gueux : pov’type</li>
            <li>Boursemolle : impuissant</li>
            <li>Sac à vin : saoulard</li>
            <li>Plus général :</li>
            <li>Couard : peureux</li>
            <li>Merdalle : merdeux</li>
            <li>Chiabrena : populace</li>
            <li>Menuaille : populace</li>
            <li>Sale trogne : sale tête</li>
            </ul>
            <h4>Le combat</h4>
            <ul>
            <li>Bataculer : basculer</li>
            <li>Bouter : pousser, jeter</li>
            <li>Choir : tomber</li>
            <li>Ost : armée du roi</li>
            <li>Arbalestrie : arbalète</li>
            <li>Bastaille : bataille</li>
            <li>Guerroyer : combattre</li>
            <li>Mortir : tuer</li>
            <li>Occire : mettre à mort</li>
            <li>Pourfendre : traverser de sa lame</li>
            <li>Mortaille : la mort</li>
            <li>Aller à la mortaille : se jeter dans la bataille</li>
            </ul>

            <h4>Le manger et le boire</h4>
            <ul>
            <li>Mangeailler : manger</li>
            <li>Bonne pitance : bon repas</li>
            <li>Brouet : soupe</li>
            <li>Francherepue : repas rassasiant</li>
            <li>Poularde : poule</li>
            <li>Gourdasse : gourde</li>
            <li>Vinasse gouleyante : bon vin</li>
            <li>Ripailler : manger copieusement</li>
            <li>Toster : griller</li>
            </ul>

            <h4>Le langage</h4>
            <ul>
            <li>Fatrouiller : bavarder</li>
            <li>Mander : demander</li>
            <li>Bailler : dire, ordonner</li>
            <li>Vergogner : faire honte</li>
            <li>Conchier : outrager</li>
            <li>Jactance : débit de parole</li>
            <li>Balivernes : mensonges</li>
            <li>Se degengler : se moquer</li>
            <li>Deconfier : trahir</li>
            <li>Batelage : boniments</li>
            <li>Gent(e) : joli/agréable</li>
            <li>Lacrimable : déplorable</li>
            <li>Tristeusement : malheureusement</li>
            <li>Violentement : avec violence</li>
            </ul>

            <h4>Quelques verbes</h4>
            <ul>
            <li>Convoier : faire route ensemble</li>
            <li>Esponger : éponger</li>
            <li>Epousailler : épouser</li>
            <li>Joiler : accueillir</li>
            <li>Mesttre : mettre</li>
            <li>Odir : entendre</li>
            <li>Pietonner : marcher</li>
            <li>Querir : chercher</li>
            <li>Rapiner : voler</li>
            <li>Trouiller : avoir peur</li>
            <li>Fleurer : sentir</li>
            <li>Trousser : fouiller les jupes</li>
            <li>Escagacer : ennuyer</li>
            </ul>

            <h4>Quelques noms</h4>
            <ul>
            <li>Malaventure : mésaventure</li>
            <li>Giberne : besace</li>
            <li>Ajour : ouverture</li>
            <li>Acquiescement : autorisation</li>
            <li>Arroi : équipage</li>
            <li>Attrapoire : piège</li>
            <li>Bisclavret : loup garou</li>
            <li>Géniture : descendance</li>
            <li>Sorceresse : sorcière</li>
            <li>Charmement : enchantement</li>
            <li>Devinance : divination</li>
            <li>Guiguedouille : danse, gigotement</li>
            <li>Guignon : malchance</li>
            <li>Jouvence : jeunesse</li>
            <li>Buissonade : petit bois</li>
            <li>Castel : château</li>
            <li>Couche : lit</li>
            <li>Criement : cri</li>
            <li>Pentacol : collier</li>
            <li>Suivance : suite (de serviteurs)</li>
            </ul>
            
            <h4>Expressions typiques :</h4>
            <ul>
            <li>Or il allons : allons-y</li>
            <li>Oyez… : écoutez</li>
            <li>Peste soit de… : que… soit maudit</li>
            <li>Bien vaigniez : soyez les bienvenus</li>
            <li>Je te créant : je te donne ma parole</li>
            <li>Repris a forfet : pris sur le fait</li>
            <li>Autant ce vaut : c’est tout comme</li>
            <li>Avoir cuer le lièvre : être lâche</li>
            <li>Aller à la brune : sortir pendant la nuit</li>
            <li>Derechef : immédiatement ; à nouveau</li>
            <li>De part chez vous : ici, à l’accoutumée</li>
            <li>Que trépasse si je faiblis : je lutterai à mort</li>
            <li>N’en pouvoir ni ho ni jo : ne rien pouvoir y faire</li>
            </ul>
        </section>
    </main>
        </div>

        <Footer />
        </>
    )
}

export default PagePlus