import React from 'react';
import PropTypes from 'prop-types';



function Food({name, picture,rating}){
  
  return (
    <div>
    <h1>I like {name}</h1>
    <h4>{rating}/ 5.0</h4>
    <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : "Steak",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJM2429ntMJrNznksCdrPnU4qPkBCpX3A5g&usqp=CAU",
    rating: 5,
  },
  {
    id : 2,
    name: "Caviar",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUSHrVmqw16Raw67L_a2VwrwZxgFnTcoNaw&usqp=CAU",
    rating: 4.9,
  },
  {
    id : 3,
    name : "gogi",
    image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HgKPs5PkRiJedq9xd1ph6ZlgL67xFF6l-Q&usqp=CAU ",
    rating: 4.3,
  },
];



function App() {
  return <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name = {dish.name} picture={dish.image} rating={dish.rating} />
      )
      )}
  </div>;
 
      
  
}


Food.propTypes = {
  name:PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number
};

export default App;
