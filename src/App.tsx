import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Updates from "./pages/Updates";
import Contact from "./pages/Contact";
import OnlinePayment from "./pages/OnlinePayment";
import UpdatesView from "./pages/UpdatesView";
import ProductsView from "./pages/ProductsView";
import DataPrivacy from "./pages/DataPrivacy";
import FaqPage from "./pages/FaqPage";
import CorporateGovernance from "./pages/CorporateGovernance";
import ContactFire from "./pages/ContactFire";
import LegacyRedirectHandler from "./pages/components/LegacyRedirectHandler";
import PromoProduct from "./pages/PromoProduct";

function App() {
    return (
        <>
            <HelmetProvider>
                <BrowserRouter>
                    <LegacyRedirectHandler />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route
                            path="/corporate-governance"
                            element={<CorporateGovernance />}
                        ></Route>
                        <Route path="/products" element={<Products />} />
                        <Route path="/updates" element={<Updates />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route
                            path="/contact-us-fire"
                            element={<ContactFire />}
                        />
                        <Route path="/faqs" element={<FaqPage />} />
                        <Route
                            path="/online-payment"
                            element={<OnlinePayment />}
                        />
                        <Route
                            path="/updates/:slug"
                            element={<UpdatesView />}
                        />
                        <Route
                            path="/products/:slug"
                            element={<ProductsView />}
                        />
                        <Route
                            path="/products/online-products"
                            element={<PromoProduct />}
                        ></Route>
                        <Route
                            path="/data-privacy-notice"
                            element={<DataPrivacy />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </HelmetProvider>
        </>
    );
}

export default App;
