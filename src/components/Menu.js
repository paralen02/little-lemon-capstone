import React from 'react';
import greeksalad from '../images/greeksalad.jpg';
import brushetta from '../images/brushetta.jpg';
import pasta from "../images/pasta.jpg";
import '../App.css';

function Menu() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4 p-3'>
                    <div className='card card-hover cursor-pointer'>
                        <img src={greeksalad} alt="Greek salad" className="card-img-top" />
                        <div className="card-body">
                            <h3>Greek salad</h3>
                            <h3>$12.99</h3>
                            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 p-3'>
                    <div className='card card-hover cursor-pointer'>
                        <img src={brushetta} alt="Brushetta" className="card-img-top" />
                        <div className="card-body">
                            <h3>Bruchetta</h3>
                            <h3>$5.99</h3>
                            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 p-3'>
                    <div className='card card-hover cursor-pointer'>
                        <img src={pasta} alt="Pasta" className="card-img-top" />
                        <div className="card-body">
                            <h3>Pasta</h3>
                            <h3>$9.99</h3>
                            <p>Our best ever spaghetti pasta is super easy and a true Italian classic with a meaty, chilli sauce.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;