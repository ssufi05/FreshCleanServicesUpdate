import { BrowserRouter } from "react-router-dom";

import { About, Banner, Contact, Experience, Slideshow, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import { bannerStyle } from "./styles";

//background color #409AEF

//old bg #060817

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className='bg-banner-pattern'>
          <Banner />
        </div>
        <Experience />a
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;