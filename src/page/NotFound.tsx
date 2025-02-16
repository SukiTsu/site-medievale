import "../assets/style/stylePageNotFound.css"

const NotFound = ({}) => {

    return(
        <>
        <div className="content-not-found">
            <div className="not-found-container">
                <h1>Erreur 404</h1>
                <p>Hélas, noble voyageur, la page que vous cherchez a disparu dans les limbes du royaume.</p>
                <img src="./img_not_found.webp" alt="Chevalier perdu" />
                <p><a href="/" className="return-button">Retour au château</a></p>
            </div>
        </div>
        </>
    )

}

export default NotFound