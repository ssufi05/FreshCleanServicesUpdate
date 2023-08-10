import {
    vacuum,
    bathroom,
    duster,
    garbage,
    mop,
    wiping,
    breakroom,
    restock,

  } from "../assets";
  
  export const contactLink = [
    {
      id: "contact",
      title: "Contact Us",
    },
  ];
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Vacuuming",
      icon: vacuum,
    },
    {
      title: "Mopping",
      icon: mop,
    },
    {
      title: "High Dusting Low Dusting",
      icon: duster,
    },
    {
      title: "Surface Detailing",
      icon: wiping,
    },
    {
      title: "Break Room Cleaning",
      icon: breakroom,
    },
    {
      title: "Bathroom Sanitizing",
      icon: bathroom,
    },
    {
      title: "Restocking Supplies",
      icon: restock,
    },
    {
      title: "Garbage Removal",
      icon: garbage,
    },
    /*
    {
      title: "Algorithm Designer",
      icon: creator,
    },
    {
      title: "Algorithm Designers",
      icon: creator,
    },
    */
  ];
  

  const testimonials = [
    {
      testimonial:
        "Lorenzo pays attention to the small details most people forget like the microwave, baseboard, and the bathroom. Staff was very satisfied with the cleaning.",
      name: "Jackie",
      designation: "Community Chirpractic Clinic",
      company: "Merrillville, IN",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Cleaning was much better. Things were cleaned that had not been touched in a long time. Happy with Lorenzo",
      name: "Kathy",
      designation: "Orthopaedics Inc of Indiana",
      company: "Merrillville, IN",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      testimonial:
        "Lorenzo is doing a great job. He is probably the best we've had.",
      name: "Rose Brick, Diane L Keseley",
      designation: "CFO",
      company: "Chesterson, IN",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    
  ];
  
  export { services, testimonials };