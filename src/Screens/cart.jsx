import React from 'react';
import "../App.css"
import { useSelector, useDispatch } from 'react-redux';
import { addTocard } from '../Redux/actions'
function Cart() {
    const productData = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <div class="row">
                <div class="col-xs-8">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <div class="panel-title">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {productData.cartList.map((item, index) => (<div class="panel-body">
                            <div class="row">
                                <div class="col-xs-2"><img class="img-responsive" src={item.imageURL} /></div>

                                <div class="col-xs-4">
                                    <h4 class="product-name"><strong>{item.name}</strong></h4><h4><small>Product description</small></h4>
                                </div>
                                <div class="col-xs-6">
                                    <div class="col-xs-6 text-right">
                                        <h6><strong> ${item.rate.toFixed(2)}<span class="text-muted">x</span></strong></h6>
                                    </div>
                                    <div class="col-xs-4">
                                        <input type="text" class="form-control input-sm" value={item.quanitity} />
                                    </div>
                                   
                                </div>
                            </div>


                        </div>))}

                        <div class="panel-footer">
                            <div class="row text-center">
                                <div class="col-xs-9">
                                    <h4 class="text-right">Total <strong>${productData.total}</strong></h4>
                                </div>
                                <div class="col-xs-3">
                                    <button type="button" class="btn btn-success btn-block">
                                        Checkout
							</button>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

            </div>

        </div>

    );
}

export default Cart;
