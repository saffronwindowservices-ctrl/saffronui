import { Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Reviews from "@/pages/Reviews";
import AdminReviews from "@/pages/AdminReviews";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dev-only admin route to manage pending reviews */}
        {((process.env.NODE_ENV !== 'production') || (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.MODE !== 'production')) && (
          <Route path="/admin/reviews" element={<AdminReviews />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
