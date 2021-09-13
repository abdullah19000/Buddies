import React from 'react';

const SearchBox = (props) =>{
    return (
    		<input className='bg-light-blue b--green pa3 ba ma2' type='search' placeholder='Search Robots' onChange={props.changefunction}/>
    	)


}

export default SearchBox;