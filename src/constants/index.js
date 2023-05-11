import {
    vacuum,
    bathroom,
    duster,
    garbage,
    mop,
    wiping,
    breakroom,
    restock,

    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    cplusplus,
    java,
    emailjs,
    csharp,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    glowup,
    nationaluniversity,
    tesla,
    shopify,
    carrent,
    glowupecommerce,
    glowupecommerceresize,
    washingmachineuml,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      id: "services",
      title: "Services",
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
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "emailjs",
      icon: emailjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "cplusplus",
      icon: cplusplus,
    },
    {
      name: "csharp",
      icon: csharp,
    },
  ];
  
  const experiences = [
    {
      title: "Washing Machine Project",
      company_name: "CSC - 300 Object Oriented Design",
      icon: nationaluniversity,
      iconBg: "#383E56",
      date: "July 2022 - Aug 2022",
      points: [
        "Collaborating on a team project where we create a project domain in which we identify and formulate a domain\'s Minimum Viable Product requirements and constraints.",
        "Using these requirements, we created use cases with priority weight indicators as well as a Requirements - Use Case Traceability Matrix.",
        "In addition, we created a domain model, UML class diagram as well as an Actor-System interaction model of our top three use cases.",
        "Finally, we implemented the domain into a sequence diagram and narrative to explain and show the control structures between the created objects.",
      ],
    },
    {
      title: "Algorithm Design",
      company_name: "CSC - 338 Algorithm Design",
      icon: nationaluniversity,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Strategically applied and designed algorithms to be applied to commonly encountered problems in computing.",
        "Topics include asymptotic behavior of algorithms, algorithm designs such as brute force and exhaustive search, divide-and-conquer, dynamic programming, greedy techniques, backtracking as well as branch and bound approach.",
      ],
    },
    {
      title: "Ecommerce Mockup Website",
      company_name: "Glow Up",
      icon: glowup,
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        "Worked with customer to create a full-responsive e-commerce mockup website.",
        "Implementing HTML, CSS, and JavaScript to create responsive design.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
  ];
  
  const education = [
    {
      school: "National University",
      location: "San Diego, CA",
      degree: "(BS in CS)",
      image: nationaluniversity,
      date: "Class of 2024",
      points: [
        "3.6 GPA",
        "Honoree of The National Society of Leadership and Success",
      ],
    },
    {
      school: "Southwestern College",
      location: "Chula Vista, CA",
      degree: "(AS in CS)",
      image: nationaluniversity,
      date: "Class of 2021",
      points: [
        "3.9 GPA",
        "Honoree of Phi Theta Kappa",
        "Dean's List Fall 2021",
      ],
    },
    {
      school: "Otay Ranch High",
      location: "Chula Vista, CA",
      degree: "",
      image: nationaluniversity,
      date: "Class of 2021",
      points: [
        "4.16 GPA",
        "Honoree of California Scholarship Federation",
      ],
    },
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
  
  const projects = [
    {
      name: "Ecommerce Website",
      description:
        "Ecommerce mockup website platform that shows a potential view of customer's products on a website, providing a convenient and efficient solution for selling their products, that shows price, image, and stars for each product.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: glowupecommerce,
      source_code_link: "https://github.com/ssufi05/Glow-Up-Mockup-Ecommerce-Project.git",
    },
    {
      name: "Washing Machine",
      description:
        "Project domain where domain's Minimum Viable Product requirements and constraints are formulated and implemented into a sequence diagram to explain and show the control structures between the created objects.",
      tags: [
        {
          name: "UML",
          color: "blue-text-gradient",
        },
        {
          name: "Use-Case",
          color: "green-text-gradient",
        },
        {
          name: "Sequence Diagram",
          color: "pink-text-gradient",
        },
      ],
      image: washingmachineuml,
      source_code_link: "https://github.com/ssufi05/Washing_Machine_Project.git",
    },
  ];
  
  export { services, technologies, experiences, education, testimonials, projects };