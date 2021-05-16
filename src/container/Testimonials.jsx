import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import Kil from "../assets/kil.png";
import Emma from "../assets/Emma.jpg";
import Kwasi from "../assets/Kwasi.jpg";
import "../styles/testimonials.css";

const carouselStyle = {
	backgroundColor: "#7eca9c",
	textAlign: "center",
};


function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div>
			<Container fluid style={carouselStyle} className="testimonials">
				<Carousel activeIndex={index} onSelect={handleSelect}>
					<Carousel.Item>
						<div className="testimonial-slide">
							<img
								
								// className="d-block w-100"
								src={Kil}
								alt="First slide"
							/>
							<div className="content">
								<h3>Kilpatrick, Consar Limited, Accra</h3>
								<p>"A very useful site."</p>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="testimonial-slide">
							<img
								
								// className="d-block w-100"
								src={Emma}
								alt="Second slide"
							/>

							<div className="content">
								<h3>Emmanuel, Consar Limited, Accra</h3>
								<p>"Lets make things simple. Just click for the solution."</p>
							</div>
						</div>
					</Carousel.Item>
					<Carousel.Item>
						<div className="testimonial-slide">
							<img
								
								// className="d-block w-100"
								src={Kwasi}
								alt="Third slide"
							/>

							<div className="content">
								<h3>Kwasi Banful, Consar Limited, Accra</h3>
								<p>"Effective data for construction teams."</p>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
}

export default ControlledCarousel;
