import {
  Navbar,
  Hero,
  About,
  Sports,
  Registration,
  Footer,
  Contact,
} from "@/components/landing-page";

export default function Home() {
  return (
    <main className="bg-gray-50 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Sports />
      <Registration />
      <Contact />
      <Footer />
    </main>
  );
}
