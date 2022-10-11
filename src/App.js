import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
	Home,
	Services,
	Consulting,
	Design,
	Marketing,
	Development,
	Product,
	Contact,
	Notfound,
} from "./pages";

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index element={<Home />} />

					<Route path="services" element={<Services />} />
					{/* Service sub pages */}
					<Route path="marketing" element={<Marketing />} />
					<Route path="consulting" element={<Consulting />} />
					<Route path="design" element={<Design />} />
					<Route path="development" element={<Development />} />

					<Route path="product" element={<Product />} />

					<Route path="contact" element={<Contact />} />

					<Route path="*" element={<Notfound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
