import React from "react";
import Cards from "../../Cards/Cards";

const ProductsSection = ({ data }) => {
  return (
    <section id="products">
      <div className="products__div">
        <Cards data={data} />
      </div>
    </section>
  );
};

export default ProductsSection;
