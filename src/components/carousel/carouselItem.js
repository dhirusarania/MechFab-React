import React from 'react';
import { connect } from 'react-redux';

class Item extends React.Component {
	item = React.createRef();

	componentDidMount() {
		this.item.current.onanimationend = () => {
			console.log('ened')
		}
	}

	render() {
		const componentState = this.props[this.props.componentName]
		const classNames = ['carousel__item']
		if (componentState.activeItem === this.props.index) classNames.push('carousel__item--active');
		if (componentState.activeItem-1 === this.props.index && componentState.next) classNames.push('carousel__item--next');
		if (componentState.activeItem === this.props.index-this.props.length && componentState.next) classNames.push('carousel__item--next');
		
		if (componentState.activeItem === this.props.index && componentState.previous) classNames.push('carousel__item--previous-in');
		if (componentState.activeItem+1 === this.props.index && componentState.previous) classNames.push('carousel__item--previous')

		return (
			<div ref={this.item} className={classNames.join(' ')}>
				{ this.props.component }
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	projectCards: state.projectCards ? state.projectCards : { activeItem: 0, animated: false },
	header: state.header ? state.header : { activeItem: 0, animated: false }
})

export default connect(mapStateToProps)(Item);
