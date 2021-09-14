import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {buddies} from './buddies';



 class App extends Component {
 	constructor(){
 			super();
 			this.state = {
				buddies : buddies,
				searchField: ''
				};
 	}


onChangeFunction=(event)=>{	
	this.setState({searchField: event.target.value});
}



 	render(){
 		const filterbuddy = this.state.buddies.filter(budy => {
		return budy.name.toLowerCase().includes(this.state.searchField.toLowerCase());
           });

 		return !this.state.buddies.length?
 			<h1>Loading</h1>:
 			(
			<div className='tc'>
				<h1 className='f1'>Buddies</h1>
				<SearchBox changefunction={this.onChangeFunction}/>
				<Scroll>
				  <ErrorBoundary>
						<CardList robot={filterbuddy} />
				  </ErrorBoundary>
				</Scroll>
			</div>
    		);
		}
  

}

export default App;