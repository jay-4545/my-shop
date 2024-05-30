import React from "react";
import FooterCo from "../components/FooterCo";
import NavComponent from "../components/NavComponent";
import ProductList from "../components/productList/ProductList";
import FormA from "../components/form/FormA";
import FormB from "../components/form/FormB";
import FormC from "../components/form/FormC";

function Home() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="max-w-[550px] w-full bg-[#4dd0e1] p-4 rounded">
        {/* <NavComponent />
      <ProductList />
      <FooterCo /> */}
        <h2 className="mb-4 text-3xl text-center">Guest</h2>
        {/* <FormA /> */}
        {/* <FormB /> */}
        <FormC />
      </div>
    </div>
  );
}

export default Home;
