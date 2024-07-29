import React from 'react';
import '../Home/Home.css';

export const Home = () => {
	return (
		<div className='home-container'>
			<img
				className='logo'
				src='../../../../src/assets/img/logotipo+nombre.png'
				alt='Logo'
			/>

			<div className='home-section'>
				<h2>Our Mission</h2>
				<p>
					At Ink Empire, our mission is to turn your ideas and dreams into
					permanent works of art. We have a team of highly skilled and
					passionate tattoo artists and piercers dedicated to providing you with
					personalized and top-quality service. Each piece we create is a
					testament to our skill, creativity, and commitment to excellence.
				</p>
			</div>

			<div className='home-section'>
				<h2>Our Services</h2>
				<p>
					We offer a wide range of tattoo styles, from traditional designs to
					modern, customized masterpieces. Additionally, our piercing experts
					are available to advise you and perform safe and aesthetically perfect
					piercings. We use high-quality materials and the most advanced
					techniques to ensure flawless results.
				</p>
			</div>

			<div className='home-section'>
				<h2>The Ink Empire Experience</h2>
				<p>
					Stepping into Ink Empire is immersing yourself in a welcoming and
					professional environment where every detail is designed for your
					comfort and satisfaction. We take pride in our clean and safe
					surroundings, adhering to the highest hygiene standards. From the
					moment you visit us, we provide you with comprehensive and
					personalized advice, ensuring that every aspect of your experience,
					from the initial consultation to aftercare, is exceptional.
				</p>
			</div>

			<div className='home-section'>
				<h2>Commitment to the Community</h2>
				<p>
					We are deeply committed to the Valencia community and the art of
					tattooing. We actively participate in local events and collaborate
					with emerging artists to keep the tattoo tradition alive while
					exploring new creative frontiers.
				</p>
			</div>
		</div>
	);
};
