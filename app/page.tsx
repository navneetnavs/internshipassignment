import { Navbar, Hero, LogoCarousel, About } from './components';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <About />
    </main>
  );
}
