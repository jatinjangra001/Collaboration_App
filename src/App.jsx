import "./App.css";
import { RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import router from "./Router.jsx";

function App() {
  return (
    <>
      <div className="h-screen relative">
        <div className="bg-image"></div>
        <div className="relative z-10">
          <Navbar />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
