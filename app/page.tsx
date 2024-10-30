import { Contact } from '@/components/layouts/Contact';
import { Experiences } from '@/components/layouts/Experiences';
import { Footer } from '@/components/layouts/Footer';
import { Hero } from '@/components/layouts/Hero';
import { Projects } from '@/components/layouts/Projects';
import { Skills } from '@/components/layouts/Skills';

export default function Home() {
    return (
        <main>
            <Hero />
            <Projects />
            <Experiences />
            <Skills />
            <Contact />
            <Footer />
        </main>
    );
}
