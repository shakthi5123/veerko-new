import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
        <Navbar />
        <main className="pt-32">
            <Outlet />
            <WhatsAppButton />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout