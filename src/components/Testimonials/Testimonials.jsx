import React from "react";
import "./Testimonials.scss";
import {testimonialsData} from "../../data/data";

const Testimonials = () => {
	return (
		<section className="testimonials">
			<div className="container">
				{testimonialsData.map((testimonial) => (
					<div className={`testimonial testimonial-${testimonial.id}`} key={testimonial.id}>
						{testimonial.pattern && <img src={testimonial.pattern} className="testimonial__pattern" alt="quotation-mark" />}
						<div className="testimonial__header">
							<img className="profile" src={testimonial.profileImg} alt="testimonial-img" />
							<div className="testimonial__header-info">
								<span className="fullname">{testimonial.fullName}</span>
								<span className="status">{testimonial.status}</span>
							</div>
						</div>
						<div className="testimonial__content">
							<h1 className="testimonial__content-title">{testimonial.title}</h1>
							<p className="testimonial__content-description">{testimonial.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
