import React from 'react';
import "../App.css"
import {useSelector, useDispatch} from 'react-redux';
import {addTocard} from '../Redux/actions'
import { Link} from "react-router-dom";
function Products() {
    const productData = useSelector((state) => state);
    const dispatch = useDispatch();

    return (

        <div className="App">
            <div>
            <h1>Amazing Recipes</h1>
            <button  type="button" class="btn btn-success"><Link to={"/myCart"}>CheckOut</Link></button>
            </div>
           
            <div class="shadow">
                <div class="container">

                    {productData.products.map((item, index) => (
                        <div class="card">
                            <div className="imgContainer">
                                <img className="img" src={item.imageURL} id="voicebutton" />
                            </div>
                            <span className="title">{item.name}</span>
                            <div className="steps">
                                <span className="rate">${item.rate}</span>
                            </div>

                            <button onClick={()=>dispatch(addTocard(index))} type="button" class="btn btn-danger">Add To Cart {item.quanitity > 0 && `(${item.quanitity})`}</button>

                        </div>
                    ))}
                </div>
            </div>
           
        </div>

    );
}

export default Products;
