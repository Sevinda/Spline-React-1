import Spline from "@splinetool/react-spline";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="h-[750px] max-bp:hidden">
        <Spline scene="https://prod.spline.design/gp9e7O726tJ2-2Ly/scene.splinecode" />
      </div>
      <h1>hey</h1>
    </>
  );
}

export default App;
