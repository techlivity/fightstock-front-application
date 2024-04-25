"use cliente"
import data from "../../api.json";
import Nav_bar_component from '../../components/nav';
import Footer from "../../components/footer"
import Carousel_Component from "@/app/components/carousel";
import FilterTag from "@/app/components/filterTag";
import Product_Component from "@/app/components/listaProdutos";

export default function Page({ params }) {
  return (
    <main>
      <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
      <Carousel_Component items={data.carrossel}></Carousel_Component>
      <FilterTag categoria={params}></FilterTag>
      <Product_Component items={data}></Product_Component>
      <Footer footer={data.footer}></Footer>
    </main>
  )
}