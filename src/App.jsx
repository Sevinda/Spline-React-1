import Spline from "@splinetool/react-spline";
import Nav from "./components/Nav";
import Card from "./components/Card";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="h-[750px] bp-sm:hidden">
        <Spline scene="https://prod.spline.design/pSuVSGt0SZcUmmHs/scene.splinecode" />
      </div>
      <div className="h-[750px] bp-lg:hidden max-bp-sm:hidden">
        <Spline scene="https://prod.spline.design/xS-S0sEclHeoUqve/scene.splinecode" />
      </div>
      <div className="h-[750px] max-bp-lg:hidden">
        <Spline scene="https://prod.spline.design/gp9e7O726tJ2-2Ly/scene.splinecode" />
      </div>
      <Card />
    </>
  );
}

export default App;
