import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';



 class App extends Component {
 	constructor(){
 			super();
 			this.state = {
				robots : [],
				searchField: ''
				};
 	}


onChangeFunction=(event)=>{	
	this.setState({searchField: event.target.value});
}

componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response=>response.json())
   .then(user=>this.setState({robots:user}));

}

 	render(){
 		const {robots, searchField} = this.state;
 		const filterRobot = robots.filter(robo => {
		return robo.name.toLowerCase().includes(searchField.toLowerCase());
           });
 		return !robots.length?
 			<h1>Loading</h1>:
 			(
			<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<SearchBox changefunction={this.onChangeFunction}/>
				<Scroll>
				  <ErrorBoundary>
						<CardList robot={filterRobot} />
				  </ErrorBoundary>
				</Scroll>
			</div>
    		);
		}
  

}

export default App;