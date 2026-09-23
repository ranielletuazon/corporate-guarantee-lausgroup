import Header from "./components/Header";
import Footer from "./components/Footer";
import FAQ from "./components/Faq";

export default function FaqPage() {
    return (
        <>
            <Header />
            <main className="w-full">
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
