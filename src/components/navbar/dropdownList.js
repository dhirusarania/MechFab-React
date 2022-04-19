import React from 'react';

class DropdownList extends React.Component {
	state = {
		showDropdown: false
	}

	showDropdown = () => this.setState({ showDropdown: true })

	hideDropdown = () => this.setState({ showDropdown: false })

	render() {
		const classNames = ['position-absolute navbar__dropdown--nested'];
		if (this.state.showDropdown) classNames.push('navbar__dropdown--active');

		return (
			<li onMouseEnter={this.showDropdown} onMouseLeave={this.hideDropdown} className='navbar__item position-relative'>
	      <a href='#' className='navbar__dropdown__link'>{this.props.title}</a>
	      <ul className={classNames.join(' ')}>
					{ this.props.content }
	      </ul>
			</li>
		)
	}
}

export default DropdownList;
