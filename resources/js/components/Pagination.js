import { React } from "react";

const Pagination = ({prodPerPage, totalProd, paginate}) => {
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(totalProd / prodPerPage); i++)
		pageNumbers.push(i);

	return (
		<nav>
			<ul class="pagination justify-content-md-center">
				{pageNumbers.map(number => (
					<li key={number} class="page-item">
						<a onClick={() => paginate(number)} href="#" class="page-link">
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Pagination;