import React, { Component } from 'react'
import Ingredient from './Ingredient'


export default class IngredientList extends Component {

	// map over an array of ingredients
	// create an ingredient component for each item in the array

	render(){
		let ingredientComponents = this.props.ingredients.map(item => (
			<li>
				<Ingredient ingredient={item.name} color={item.color} />
			</li>
		))

		return (
			<ul>
				{ingredientComponents}
			</ul>
		)
	}
}