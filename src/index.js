import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context"; //optional to use
import { Auth0Provider } from "@auth0/auth0-react";
import { GET_PRODUCTS_SUCCESS } from "./actions";
//domain :dev-aztf-dnn.us.auth0.com
//clientId : u2mMckhQ1ByhDTae9syaPiSvlqJ4HgC2
ReactDOM.render(
    <Auth0Provider
        domain='dev-aztf-dnn.us.auth0.com'
        clientId='u2mMckhQ1ByhDTae9syaPiSvlqJ4HgC2'
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>,
    document.getElementById("root")
);
