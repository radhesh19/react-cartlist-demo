import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Products from "../Screens/products"
import Cart from "../Screens/cart"
export default function CustomLinkExample() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route path="/myCart">
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
}
