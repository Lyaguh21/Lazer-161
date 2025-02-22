import ContactsSection from "../components/ContactsSection/ContactsSection";
import ExampleSection from "../components/ExampleWork/ExampleSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TitleSection from "../components/TitleSection/TitleSection";

export default function Home() {
  return (
    <>
      <Header />
      <TitleSection />
      <div className="w-full h-[1000px] bg-red-200"></div>
      <ExampleSection />
      <ContactsSection />
      <Footer />
    </>
  );
}
