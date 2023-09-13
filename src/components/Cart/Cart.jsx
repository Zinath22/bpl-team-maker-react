/* eslint-disable react/prop-types */
import './Cart.css'
const Cart = ({selectedActors}) => {
    console.log(selectedActors)
    
    return (
        <div>
           <h5>Total actors:{selectedActors.length}</h5> 
           {selectedActors.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
        </div>
    );
};

export default Cart;