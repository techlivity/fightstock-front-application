import data from "../../api.json";
import Nav_bar_component from '../../components/nav';
import Footer from "../../components/footer"
import Carousel_Component from "@/app/components/carousel";
import FilterTag from "@/app/components/renderfilterCategory/filterTag";

export default function Page({ params }) {
  return (
    <main>
      <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
      <Carousel_Component items={data.carrossel}></Carousel_Component>
      <FilterTag categoria={params}></FilterTag>
      <Footer footer={data.footer}></Footer>
    </main>
  )
}