import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer"
import { ProjectsNav } from "../components/ProjectsNav"
import {CaseStudy2} from "../components/CaseStudy2";

export const CaseStudy2Page = () => {
    return (
         <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}


            {/* Projects Half Navigation */}
            <ProjectsNav />

            {/* Main Content */}
            <main>
            <CaseStudy2 />
            </main>
            {/* Footer */}
            <footer>
            <Footer />
            </footer>
         </div>
    )
}