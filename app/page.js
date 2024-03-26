import Link from 'next/link';
import data from "./api.json";
import Carousel_Component from './components/carousel';
import ProductList_Component from './components/produtos';
import Nav_bar_component from './components/nav';
import Footer from "./components/footer"


export default function Home() {
  return (
    <main>
      <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
      <Carousel_Component items={data.carrossel}></Carousel_Component>
      <ProductList_Component items={data}></ProductList_Component>
      <Footer footer={data.footer}></Footer>
    </main>
  );
}
