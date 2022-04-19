import React from 'react';
import Link from 'next/link';
import DropdownItem from './dropdownItem';
import DropdownList from './dropdownList';

class Dropdown extends React.Component {
	state = {
		showDropdown: false
	}

	showDropdown = () => this.setState({ showDropdown: true })

	hideDropdown = () => this.setState({ showDropdown: false })

	handleObject = (object, index, title) => {
		const classNames = ['position-absolute navbar__dropdown--nested'];
		if (this.state.showDropdown) classNames.push('navbar__dropdown--active');
		const content = Object.keys(object).map((contentName, i) => {
			if (typeof object[contentName] === 'string') {
				return <DropdownItem key={i} li={contentName} />
			} else {
				return this.handleObject(object[contentName], i, contentName);
			}
		})
		return <DropdownList key={index} content={content} title={title} />
	}

	render() {
		const classNames = ['position-absolute navbar__dropdown'];
		if (this.state.showDropdown) classNames.push('navbar__dropdown--active');

		const contents = Object.keys(this.props.contents).map((contentName, i) => {
			if (typeof this.props.contents[contentName] === 'string') {
				return <DropdownItem key={i} li={contentName} />
			} else {
				return this.handleObject(this.props.contents[contentName], i, contentName);
			}
		})

		return (
			<li onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown} className='navbar__item position-relative'>
        <a href='#' className='navbar__link'>{this.props.name}</a>
        <ul className={classNames.join(' ')}>
					{ contents }
        </ul>
			</li>
		)
	}
}

export default Dropdown;
