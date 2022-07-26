import React from 'react';
import { sectionImgs } from '../../api/mock';
import { SectionCarousel } from '../SectionCarousel';
import './styles.scss';

export const SectionInfo = () => {
	return (
		<div className="section-container">
			<div className="section-carousel">
				<SectionCarousel images={sectionImgs} />
			</div>
			<div className="section-info">
				<div className="title">
					<h2>Conheça nosso serviços</h2>
				</div>
				<div className="card-container">
					<div className="container-icon">
						<img src="/icons/star.svg" alt="" />
					</div>
					<div className="container-text">
						<h4>Manicure</h4>
						<p>Pé e Mão, Esmaltação e Alongamento.</p>
					</div>
				</div>
				{/* ================= */}
				<div className="card-container">
					<div className="container-icon">
						<img src="/icons/star.svg" alt="" />
					</div>
					<div className="container-text">
						<h4>Cabeleireiro</h4>
						<p>Coloração, Progressivas e Escovas.</p>
					</div>
				</div>
				{/* ================= */}
				<div className="card-container">
					<div className="container-icon">
						<img src="/icons/star.svg" alt="" />
					</div>
					<div className="container-text">
						<h4>Massagem Relaxante</h4>
						<p>Venha cuidar de você!</p>
					</div>
				</div>
			</div>
		</div>
	);
};
