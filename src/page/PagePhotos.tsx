import "../assets/style/stylePagePhotos.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const PagePhoto = ({}) => {
    

    return (
        <>
        <NavBarre strTitre="Photos"/>
        <div className="content-photos">
            <div className="gallery-container">
                <h1 className="medieval-title">🖼 Galerie Médiévale 🏰</h1>

                <div className="gallery">
                    <div className="gallery-item"><img src="./home_img.jpg" alt="Image médiévale 1"/></div>
                    <div className="gallery-item"><img src="./home_img.jpg" alt="Image médiévale 1"/></div>
                    <div className="gallery-item"><img src="./home_img.jpg" alt="Image médiévale 1"/></div>
                    <div className="gallery-item"><img src="./home_img.jpg" alt="Image médiévale 1"/></div>
                    <div className="gallery-item"><img src="./home_img.jpg" alt="Image médiévale 1"/></div>
                    <div className="gallery-item"><img src="./home_img.jpg" alt="Image médiévale 1"/></div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default PagePhoto