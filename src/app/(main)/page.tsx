"use client";
import ContactsSection from "../components/ContactsSection/ContactsSection";
import EquipmentSection from "../components/EquipmentSection/EquipmentSection";
import ExampleSection from "../components/ExampleWork/ExampleSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import TableSection from "../components/TableSection/TableSection";
import TitleSection from "../components/TitleSection/TitleSection";

export default function Home() {
  return (
    <>
      <Header />
      <TitleSection />
      <ServicesSection />
      <TableSection />
      <EquipmentSection />
      <ExampleSection />
      <ContactsSection />
      <Footer />
    </>
  );
}
