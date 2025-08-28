import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer"
import { ProjectsNav } from "../components/ProjectsNav"
import {CaseStudy1} from "../components/CaseStudy1";

export const CaseStudy1Page = () => {
    return (
         <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            

            {/* Projects Half Navigation */}
            <ProjectsNav />

            {/* Main Content */}
            <main>
            <CaseStudy1 />
            </main>
            {/* Footer */}
            <footer>
            <Footer />
            </footer>
         </div>
    )
}