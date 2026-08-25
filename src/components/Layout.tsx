import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-cloud text-ink-800">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        theme="light"
        toastClassName="!font-body !rounded-xl"
        autoClose={4500}
      />
    </div>
  );
}
