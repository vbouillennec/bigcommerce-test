import { React } from "react";

const Pagination = ({prodPerPage, totalProd, paginate, newCart}) => {
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(totalProd / prodPerPage); i++)
		pageNumbers.push(i);

	return (
		<nav>
			<ul className="pagination justify-content-center">
				{pageNumbers.map(number => (
					<li key={number} className="page-item">
						<a onClick={() => paginate(number)} href="#" className="page-link">
							{number}
						</a>
					</li>
				))}
				<div className="col-1"></div>
				<button type="button" className="ml-4 btn btn-primary" onClick={() => newCart()}>Créer un panier</button>
			</ul>

			
		</nav>
	)
}

export default Pagination;