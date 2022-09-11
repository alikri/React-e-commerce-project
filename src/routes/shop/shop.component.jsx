import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from '../category/category.component';
import "./shop.styles.scss";

const Shop = () => {

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	)
};

export default Shop;


// ? <> </>  it is a shorthand for FRAGMANT , otherwise you need to import Fragmant from react