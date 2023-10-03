import Spline from "@splinetool/react-spline";
import Nav from "./components/Nav";
import Card from "./components/Card";
import Notifier from "./components/Notifier";

function App() {
  return (
    <>
      <header className="px-10">
        <Nav />
      </header>

      <main>
        <div className="relative h-[750px] bp-sm:hidden">
          <Spline scene="https://prod.spline.design/pSuVSGt0SZcUmmHs/scene.splinecode" />
          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <Notifier />
          </div>
        </div>
        <div className="relative h-[750px] bp-lg:hidden max-bp-sm:hidden">
          <Spline scene="https://prod.spline.design/xS-S0sEclHeoUqve/scene.splinecode" />
          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <Notifier />
          </div>
        </div>
        <div className="relative h-[750px] max-bp-lg:hidden">
          <Spline scene="https://prod.spline.design/gp9e7O726tJ2-2Ly/scene.splinecode" />
          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <Notifier />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
