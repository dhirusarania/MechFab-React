import React from 'react';
import Link from 'next/link';

const dropdownItem = (props) => {
	return (
		<li className='navbar__dropdown__li'>
			<Link href='/'>
				<a className='navbar__dropdown__link'>{props.li}</a>
			</Link>
		</li>
	)
}

export default dropdownItem;
