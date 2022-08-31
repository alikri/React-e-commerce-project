import { createContext, useState, useEffect } from "react"; 
import PRODUCTS from "../shop-data.json";
// PRODUCTS - it is just the name of the variable, we can call it any name

// as the actual value you want to access 
export const ProductsContext = createContext({
	products: [],

});


// user provider is an actual component 
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS);
	const value = {products};

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}