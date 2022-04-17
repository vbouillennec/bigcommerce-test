import React, { useState } from "react";
import axios from "axios";
import ProductImage from "./ProductImage";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const Products = () => {
	const [products, setProducts] = React.useState(null);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [prodPerPage, setProdPerPage] = React.useState(4);
	const [search, setSearch] = React.useState('');

	const baseURL = "http://localhost/products";

  	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setProducts(response.data.data);
		});
	}, []);

	if (!products) return null;

	const indexOfLastProd = currentPage * prodPerPage;
	const indexOfFirstProd = indexOfLastProd - prodPerPage;
	const filteredProd = products.filter((val) => {
		if(searchTerm == '')
			return val
		else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.sku.toLowerCase().includes(search.toLowerCase()))
			return val
	});
	console.log(filteredProd);
	const currentProd = filteredProd.slice(indexOfFirstProd, indexOfLastProd);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

	const searchTerm = (e) => {
		setCurrentPage(1);
		setSearch(e);
	}

  	return (
		<div className="container">
			<div className="row justify-content-md-center m-4">
				<div className="col-md-6 ">
					<SearchBar searchTerm={searchTerm}/>

				</div>
			</div>
			{currentProd
			.map((product, key) => {
				return (
					<div key={key} className="card m-2">
						<div className="card-body">
							<div className="row">
								<div className="col">
									<ProductImage id={product.id}/>
								</div>
								<div className="col-9">
									<h5 className="card-title">{product.name}</h5>
									<p className="card-text">{product.sku}</p>
								</div>
							</div>
						</div>
					</div>)
				})}
			<Pagination prodPerPage={prodPerPage} totalProd={filteredProd.length} paginate={paginate}/>
		</div>
  	);
};

export default Products;