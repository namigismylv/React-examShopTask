import React, { useContext } from "react";
import ProductsSection from "../../../Components/Site/HomeSections/Products.Section/Products.Section";
import MainContext from "../../../Context/Context";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data } = useContext(MainContext);
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <main>
      <ProductsSection data={data}/>
    </main>
    
    </>
  );
};

export default Home;
