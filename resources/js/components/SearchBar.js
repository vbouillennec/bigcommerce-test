import React, { useState } from "react";

const SearchBar = ({searchTerm}) => {
	return (
		<input type="search" class="form-control" placeholder="Recherche..." onChange={(e) => searchTerm(e.target.value)}>

		</input>
	)
}

export default SearchBar;