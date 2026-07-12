import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";
import CODEXPLORE from "./assets/img/icon_designs/icon.png";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-logo">
                <div className="footer-logo-box">
                    <img src={CODEXPLORE} className="footer-logo-img" alt="" />
                </div>
            </div>

            <div className="footer-nav">
                <a href="#about">About</a>
                <a href="#events">Events</a>
                <a href="#team">Team</a>
                <a href="#faq">FAQs</a>
                <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">

                <a href="mailto:codexplore@college.edu">
                    <FaEnvelope />
                </a>

                <a href="#">
                    <FaLinkedin />
                </a>

                <a href="#">
                    <FaGithub />
                </a>

            </div>


            <div className="footer-copyright">
                <p>Designed & Developed by the <em>JAYMEEN VAGHELA</em></p>
                <p>© 2026 CODEXPLORE. All Rights Reserved.</p>
                <div className="footer-legal">
                    <a href="#">Terms & Conditions</a>
                    <span>|</span>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>


            <div className="footer-identity"><h1>CODEXPLORE</h1></div>


        </footer>
    );
}

export default Footer;