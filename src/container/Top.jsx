import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoBlack from "../assets/logo.png";
import "../styles/topStyle.css";

function Top() {
	return (
		<div>
			<div className="top container-fluid">
				<div className="row">
					<div className="col-md-4 col-xs-12 hideLogo">
						<Image src={LogoBlack} />
					</div>
					<div xs={12} className="main">
						<h1 className="h1">BUILDING CONSTRUCTION COSTS DATABASE</h1>
						<h3 className="informationData">Informative Data for your Intelligent Cost Decisions</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Top;
