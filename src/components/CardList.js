import React from 'react';
import Card from './Card';

const CardList = (props) =>{
return (
  <div>
    {

      props.robot.map(user=> {
        return (
         <Card
          key= {user.id} 
          id={user.id}
          name={user.name} 
          contact={user.cont}
          isrc = {user.isrc}
          />
            );
      }
      )
    }
    </div>
  );
}

export default CardList;