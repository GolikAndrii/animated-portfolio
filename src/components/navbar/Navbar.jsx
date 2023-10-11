import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar*/}
            <div className="wrapper">
                <span>Golik Andrii</span>
                <div className="social">
                    <a href="#"><img src="./facebook.png" alt="facebook"/></a>
                    <a href="#"><img src="./instagram.png" alt="instagram"/></a>
                    <a href="#"><img src="./youtube.png" alt="youtube"/></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;