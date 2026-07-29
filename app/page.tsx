import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import WhyHireMe from "@/components/WhyHireMe";
import GithubStats from "@/components/GithubStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certifications />
        <Achievements />
        <WhyHireMe />
        <GithubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
