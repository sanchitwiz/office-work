import CarBooking from './components/CarBooking'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import HeroSection from './components/Hero'
import Navbar from './components/Navbar'
// import Test from './Test'

function App() {

  return (
    <>
    <Navbar />
    <HeroSection />
    {/* <div className="text-center py-10">
      <h1 className="text-4xl font-bold mb-8">Car Rental Service</h1>
      <CarBooking />
    </div> */}
    <CarBooking />
    <ContactForm />
    <Footer />
    </>
  )
}

export default App
