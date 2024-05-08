import data from "../api.json";
import Nav_bar_component from '../components/nav';
import Footer from "../components/footer"

export default function Home() {
  return (
    <main>
        <Nav_bar_component data={data.nav_bar}></Nav_bar_component>
        <div className='h-[69vh]'></div>
        <Footer footer={data.footer}></Footer>
    </main>
  );
}
