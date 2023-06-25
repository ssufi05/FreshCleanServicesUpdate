import { BrowserRouter } from "react-router-dom";

import { About, Banner, Contact, Experience, Feedbacks, Hero, Navbar, NewNavbar, Work, Works, StarsCanvas, FooterTest, HeroSection, } from "./components";

//background color #409AEF

//old bg #060817

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <HeroSection />
        </div>
        <About />
        <div className='bg-banner-pattern'>
          <Banner />
        </div>
        <Experience />
        <Work />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <FooterTest />
      </div>
    </BrowserRouter>
  );
}

export default App;