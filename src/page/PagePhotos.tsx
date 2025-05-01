import "../assets/style/stylePagePhotos.css"
import Footer from "../component/Footer"
import NavBarre from "../component/NavBarre"

const PagePhoto = ({}) => {
    
    let listImg = []
    for (let i=2;i<20;i++){
        listImg.push(<div key={i} className="gallery-item"><img src={`/${i}.jpeg`} alt={`${i}.jpeg`}/></div>)
    }
    return (
        <>
        <NavBarre strTitre="Notre galerie de photos"/>
        <div className="content-photos">
            <div className="gallery-container">
                <h1 className="medieval-title">🖼 Galerie Médiévale 🏰</h1>

                <div className="gallery">
                    {listImg}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default PagePhoto