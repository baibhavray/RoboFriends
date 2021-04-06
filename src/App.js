import React from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import './App.css'


class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots : robots,
			searchfield : ''
		}
	}

	onSearchChange = (event) => {
		this.setState({ searchfield : event.target.value })
	}

	render(){
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className="tc">
			  <h1 className='f1'>RoboFriend</h1>
			  <SearchBox SearchChange={this.onSearchChange}/>
			  <Scroll>
			    <CardList robots={filteredRobots} />
			  </Scroll>
			</div>
		);
	}
}

export default App;