import React, {Component} from 'react'

export default class Ingredient extends Component {
	render (){
		return (
			<p style={{backgroundColor: this.props.color}}>
				{this.props.ingredient}
			</p>
		)
	}
}