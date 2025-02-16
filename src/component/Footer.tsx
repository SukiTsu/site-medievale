import '../assets/style/styleFooter.css'

const Footer =({}) => {
    return(
        <footer className="footer">
    <div className="footer-content">
        <div className="footer-left">
            <div className="social-icons">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
            </div>
            <a href="/mention-legal" className="footer-link">Mention légale</a>
        </div>

        <div className="footer-center">
            <img src="./logo.png" alt="Logo" />
        </div>

        <div className="footer-right">
            <div className="social-icons">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <a href="#" className="footer-link">Nous contacter</a>
        </div>
    </div>
</footer>


    )
}

export default Footer