import IndustryPartners from "../components/IndustryPartners"
import Navbar from "../components/Navbar"
import HomeNavbar from "../components/HomeNavbar"

export default function IndustryPartnersPage() {
  return (
    <div className="font-montserrat overflow-auto h-auto">
      <Navbar />
      <IndustryPartners />
      <HomeNavbar />
    </div>
  )
}