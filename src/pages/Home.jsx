import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import AboutCards from '../components/AboutCards.jsx';
import Services from '../components/Services.jsx';
import Portfolio from '../components/Portfolio.jsx';
import FAQ from '../components/FAQ.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <AboutCards />
        <Services />
        <Portfolio />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
