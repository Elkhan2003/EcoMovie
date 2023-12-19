// @ts-nocheck
import React from "react";
import {
	FaDiscord,
	FaInstagram,
	FaVk,
	FaLinkedin,
	FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper.js";

import "./style.scss";

const Footer = () => {
	return (
		<footer className="footer">
			<ContentWrapper>
				<ul className="menuItems">
					<li className="menuItem">Terms Of Use</li>
					<li className="menuItem">Privacy-Policy</li>
					<li className="menuItem">About</li>
					<li className="menuItem">Blog</li>
					<li className="menuItem">FAQ</li>
				</ul>
				<div className="infoText">
					EcoMovie - a unique website providing fascinating information about
					movies and TV shows. Here you can discover all the necessary details
					about your favorite films, actors, directors, ratings, and much more.
					EcoMovie boasts a stylish and intuitive interface that makes your
					search for cinematic masterpieces as convenient and enjoyable as
					possible.
				</div>
				<div className="socialIcons">
					<a href="https://discord.gg/BPzh75gDdS" target="_blank">
						<span className="icon">
							<FaDiscord />
						</span>
					</a>
					<a href="https://www.instagram.com/elcho911/" target="_blank">
						<span className="icon">
							<FaInstagram />
						</span>
					</a>
					<a href="https://vk.com/elcho911" target="_blank">
						<span className="icon">
							<FaVk />
						</span>
					</a>
					<a href="https://www.linkedin.com/in/elcho/" target="_blank">
						<span className="icon">
							<FaLinkedin />
						</span>
					</a>
					<a href="https://github.com/Elkhan2003/" target="_blank">
						<span className="icon">
							<FaGithub />
						</span>
					</a>
				</div>
			</ContentWrapper>
		</footer>
	);
};

export default Footer;
