import "./app.scss"
import Navbar from "./components/navbar/Navbar.jsx";
import Test from "./Test.jsx";
const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Contact</section>
    {/*<Test />*/}
  </div>;
};

export default App;
