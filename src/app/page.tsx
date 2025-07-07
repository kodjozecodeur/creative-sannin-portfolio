import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ClientLayout from "./ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <main>
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </ClientLayout>
  );
}
