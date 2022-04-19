import React from 'react';

const background = (props) => (
	<div style={{backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${props.img})`}} className='homepage__background'></div>
)

export default background;
