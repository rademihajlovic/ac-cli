/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption,
} from 'reactstrap';

const ImageSlider = function (args) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);
	const { items } = args;
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => (
		<CarouselItem
			className="slider-item"
			onExiting={() => setAnimating(true)}
			onExited={() => setAnimating(false)}
			key={item}
		>
			<img src={item} alt={item.altText} />
			<CarouselCaption
				captionText={item.caption}
				captionHeader={item.caption}
			/>
		</CarouselItem>
	));

	return (
		<Carousel
			className="slider"
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			{...args}
		>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};

export default ImageSlider;
