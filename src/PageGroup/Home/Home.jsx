import { useState } from "react";
import Navigation from "./Component/Navbar/Navigation";
import Hero from "./Component/Hero";
import Achievements from "./Component/Achievements";
import JmiCarousel from "./Component/Carousel";

const sections = [
  {
    name: "About",
    links: [
      { url: "/about/aboutjmi", text: "About Jamia" },
      { url: "/about/aboutDept", text: "About Department" },
      { url: "/about/messageHOD", text: "Message From HOD" },
      { url: "/about/achievements", text: "Achievements" },
      { url: "/about/facilities", text: "Facilities" },
      { url: "/about/testimonials", text: "Testimonials" },
    ],
  },
  {
    name: "Academic",
    links: [
      { url: "/academic/courseOffered", text: "Courses Offered" },
      { url: "/academic/courseStructure", text: "Course Structure" },
      { url: "/academic/notices", text: "Notices" },
    ],
  },
  {
    name: "Event",
    links: [{ url: "/event", text: "Event" }],
  },
  {
    name: "Gallery",
    links: [{ url: "/gallery", text: "Gallery" }],
  },
  {
    name: "Placement",
    links: [{ url: "/placement", text: "Placement" }],
  },
  {
    name: "People",
    links: [
      { url: "/people/faculty", text: "Faculty Members" },
      { url: "/people/staffMember", text: "Staff Members" },
      { url: "/people/students", text: "Students" },
      { url: "/people/phdScholar", text: "Ph.D Scholars" },
      { url: "/people/devloper", text: "Devloper" },
    ],
  },
  {
    name: "Research",
    links: [
      { url: "/research/project", text: "Projects" },
      { url: "/research/publication", text: "Publication" },
      { url: "/research/researchArea", text: "Research Area" },
    ],
  },
];

function Home() {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    // <div className="about-us flex w-screen flex-row flex-wrap justify-evenly">
    //   {sections.map((section, index) => (
    //     <div
    //       key={index}
    //       className="section-container relative m-5 bg-slate-400 p-8 hover:bg-gray-500"
    //       onMouseEnter={() => setHoveredSection(section)}
    //       onMouseLeave={() => setHoveredSection(null)}
    //     >
    //       <p className="text-white">{section.name}</p>
    //       {hoveredSection === section && (
    //         <div className="menu absolute left-0 top-full mb-2 bg-white p-2">
    //           <Menu links={hoveredSection.links} />
    //         </div>
    //       )}
    //     </div>
    //   ))}
    //   {/* Rest of the content */}
    // </div>
    <>
      <Navigation />
      <Hero />
      <Achievements />
      <JmiCarousel />
    </>
  );
}

export default Home;
