import { Navbar, HeroWithCarousel, About } from './components';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroWithCarousel />
      <About />
    </main>
  );
}
