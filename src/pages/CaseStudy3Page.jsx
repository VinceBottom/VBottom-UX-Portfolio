import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer"
import { ProjectsNav } from "../components/ProjectsNav"
import {CaseStudy3} from "../components/CaseStudy3";

export const CaseStudy3Page = () => {
    return (
         <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}


            {/* Projects Half Navigation */}
            <ProjectsNav />

            {/* Main Content */}
            <main>
            <CaseStudy3 />
            </main>
            {/* Footer */}
            <footer>
            <Footer />
            </footer>
         </div>
    )
}