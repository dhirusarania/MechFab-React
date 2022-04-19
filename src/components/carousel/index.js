import React from 'react';
import { connect } from 'react-redux';
import CarouselItem from './carouselItem';

const carousel = (props) => {
	const items = props.components.map((component, i) => {
		return <CarouselItem length={props.components.length-1} componentName={props.componentName} key={i} index={i} component={component} />
	})

	return (
		<div className={props.header ? 'carousel carousel__header' : 'carousel'}>
			{ items }
			<div className='carousel__container'>
				{ props.children }
			</div>
		</div>
	)
}

export default carousel;
