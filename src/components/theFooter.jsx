import '../css/TheFooter.css';
import logo from "../img/Logo.svg";
import SocialLinks from '../components/SocialLinks.jsx';
import NavBar from '../components/NavBar.jsx';

function TheFooter() {
	return (
		<div className="footer">
				<div className="the-footer">
					<div className="left-part-footer-bar">
						<img src={logo} alt="Logo" className="logo"/>
						<p className="basic-text footer-text">ITPRO Studio специализируется на создании продуктов для развития <br />бизнеса, презентаций, обучающих материалов, заработка и развлечений.
						</p>
						<div className="social">
							<SocialLinks></SocialLinks>
						</div>
					</div>
					<NavBar containerClass="nav-bar-column"></NavBar>
				</div>
			<p className="basic-text text--small">
				© ООО ”АЙТИПРО”, 2022 г. Все права защищены.
			</p>
		</div>
		);
};

export default TheFooter;
