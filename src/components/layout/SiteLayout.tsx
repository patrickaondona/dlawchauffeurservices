import BookingModal from "./BookingModal";
import ContactSupportModal from "./ContactSupportModal";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <BookingModal />
      <ContactSupportModal />
    </>
  );
}
