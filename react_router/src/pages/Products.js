import React from "react";
import { Link } from "react-router-dom";

// call to get products from backend example
const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
];

const Products = () => {
    return (
        <>
            <h1>Products Page</h1>
            <ul>
                {PRODUCTS.map((product) => (
                    <li>
                        <Link to={`/products/${product.id}`}>
                            {product.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Products;
