/* eslint-disable react/jsx-key */


import { useEffect } from 'react';
import './Home.css'
import { useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [allActors, setAllActors] =   useState([])
    const [selectedActors, setSelectedActors] = useState([]);
    useEffect(()=> {
        fetch('./data.json')
        .then(res => res.json())
        .then((data) => setAllActors (data))
    }, []);

    const  handleSelectActor = (actor) =>  {
    
    setSelectedActors([...selectedActors, actor])
    };
    console.log(selectedActors);
    // console.log(allActors)

    
    return (
        <div className='container'>
           <div className="home-container">
            <div className="card-container">
            {
                // eslint-disable-next-line no-unused-vars
                allActors.map((actor) =>(
                    <div key={actor.id} className="card">
                <div className="card-img">
                    <img className='photo' src={actor.image} alt="" />
                </div>
                <h2>{actor.name}</h2>
                <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, laudantium.</small></p>
                <div className="info">
                    <p>salary:{actor.salary}$</p>
                    <p>{actor.role}</p>
                </div>
                <button  onClick={() => handleSelectActor(actor)} className='card-btn'>select</button>
            </div>
                ))
            }
            </div>
            <div className="cart">
             <Cart selectedActors ={selectedActors} ></Cart>
            </div>
           </div>
           
        </div>
    );
};

export default Home;