import "../assets/css/Header.css"
import image from "../assets/img/footer.png"

const Header = ()=> {
    return (
        <header className="header-main">
        <nav className="nav-container">
            <img src={image}/>
            <ul className="nav-button">
            <button className="button button-video">NUEVO VIDEO</button>
            </ul>
        </nav>
        {/* <div className="banner-main">
        <img src="/img/banner.png" alt="Banner"/>
        </div> */}
    </header>
    )
}

export default Header