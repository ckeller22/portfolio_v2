import NavBar from "./components/navigation/NavBar";
import Hero from "./components/hero/Hero";
import SocialSideBar from "./components/sidebar/SocialSideBar";
import Projects from "./components/projects/Projects";
import EmailSideBar from "./components/sidebar/EmailSideBar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <main className="font-montserrat bg-earth-gray-900">
      <SocialSideBar />
      <EmailSideBar />
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
