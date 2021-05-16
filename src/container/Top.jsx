import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import LogoBlack from "../assets/logo.png";
import "../styles/topStyle.css";

function Top() {
	return (
		<div>
			<div className="top container-fluid">
				<div className="row align-items-center">
					<div className="col-12 col-sm-3 col-xl-2 logo-img text-center text-md-left">
						<Image src={LogoBlack} />
					</div>
					<div className="col-12 col-sm-9 col-xl-10 text-center">
						<h1 className="h1">BUILDING CONSTRUCTION COSTS DATABASE</h1>
						<h3 className="informationData">Informative Data for your Intelligent Cost Decisions</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Top;
