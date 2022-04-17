import React, { useState } from "react";
import axios from "axios";

const ProductImage = (props) => {
	const [images, setImages] = React.useState(null);

	const baseURL = "http://localhost/images/"+props.id;

  	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setImages(response.data.data);
		});
	}, [props.id]);

	if (!images) return null;

  	return (
		<div>
			<ul>
				{images.map((image, key) => {
					if(image.is_thumbnail)
						return (<img key={key} src={image.url_thumbnail} className="img-fluid"></img>)
				})}
			</ul>
		</div>
  	);
};

export default ProductImage;