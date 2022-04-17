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
	const currentProd = products.slice(indexOfFirstProd, indexOfLastProd);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	}

	const searchTerm = (e) => {
		setSearch(e);
	}

  	return (
		<div class="container">
			<div class="row justify-content-md-center m-4">
				<div class="col-md-6 ">
					<SearchBar searchTerm={searchTerm}/>

				</div>
			</div>
			{currentProd.filter((val) => {
				if(searchTerm == '')
					return val
				else if (val.name.toLowerCase().includes(search.toLowerCase()) || val.sku.toLowerCase().includes(search.toLowerCase()))
					return val
			})
			.map((product, key) => {
				return (
					<div key={key} class="card m-2">
						<div class="card-body">
							<div class="row">
								<div class="col">
									<ProductImage id={product.id}/>
								</div>
								<div class="col-9">
									<h5 class="card-title">{product.name}</h5>
									<p class="card-text">{product.sku}</p>
								</div>
							</div>
						</div>
					</div>)
				})}
			<Pagination prodPerPage={prodPerPage} totalProd={products.length} paginate={paginate}/>
		</div>
  	);
};

export default Products;