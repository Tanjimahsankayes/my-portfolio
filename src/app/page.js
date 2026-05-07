
import Banner from "./Components/Banner";
import About from "./Components/About";
import Educations from "./Components/Educations";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import FAQ from "./Components/FAQ";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-bg">

      <Banner />
      <About />
      <Educations />
      <Projects />
      <Skills />
      <FAQ />
      <Contact />
      <Footer />
      {/* Additional sections can be added here */}
    </main>
  );
}








