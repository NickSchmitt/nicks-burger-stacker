import React, { Component } from 'react'
import IngredientList from './IngredientList'

const ingredients = [
	{name: 'Kaiser Bun', color: 'saddlebrown'},
	{name: 'Sesame Bun', color: 'sandybrown'},
	{name: 'Gluten Free Bun', color: 'peru'},
	{name: 'Lettuce Wrap', color: 'olivedrab'},
	{name: 'Beef Patty', color: '#3F250B'},
	{name: 'Soy Patty', color: '#3F250B'},
	{name: 'Black Bean Patty', color: '#3F250B'},
	{name: 'Chicken Patty', color: 'burlywood'},
	{name: 'Lettuce', color: 'lawngreen'},
	{name: 'Tomato', color: 'tomato'},
	{name: 'Bacon', color: 'maroon'},
	{name: 'Onion', color: 'lightyellow'}
  ]

export default class App extends Component {
	render (){
		return (
			<div style={{display: "flex", alignItems:"flex-end" }}>
				<IngredientList ingredients={ingredients}/>
				<h1>Burger Pane</h1>
			</div>
		)
	}
}