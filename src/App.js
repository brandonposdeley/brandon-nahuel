import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { DataContext } from "./context/SliceContext";

function App() {
  const { colors } = DataContext();
  return (
    <>
      <div
        className={` ${colors}`}
        style={{
          minHeight: "93.9vh",
        }}
      >
        <Navbar />
        <div className="pt-20">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
