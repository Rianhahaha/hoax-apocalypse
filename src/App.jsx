import Footer from "./components/Footer";
import Header from "./components/Header/header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font-Bagus">
        <Header />
        <div className="text-blueMain ">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
