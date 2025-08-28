import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { CaseStudy1 } from "../components/CaseStudy1"
import { CaseStudy2 } from "../components/CaseStudy2"
import { CaseStudy3 } from "../components/CaseStudy3"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
            <HeroSection />
            <About />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            </main>
            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div>
    );
}