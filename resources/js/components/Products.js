import React, { useState } from "react";
import axios from "axios";
import ProductImage from "./ProductImage";
import Pagination from "./Pagination";

const Products = () => {
	const [products, setProducts] = React.useState(null);
	const [currentPage, setCurrentPage] = React.useState(1);
	const [prodPerPage, setProdPerPage] = React.useState(4);

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

  	return (
		<div class="container">
			{currentProd.map((product, key) => {
				return (
					<div key={key} class="card m-4">
						<div class="card-body">
							<div class="row">
								<div class="col">
									<ProductImage id={product.id}/>
								</div>
								<div class="col-8">
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