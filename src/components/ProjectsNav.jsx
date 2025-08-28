import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"
import { House } from "lucide-react";

export const ProjectsNav = () => {
    return (
        <section id="projectsnav"
        className= "flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-left z-10 pt-7 pb-4 bg-secondary">
        <div className="space-y-6">
             <div className="-ml-8 pb-7">
            <Link to="/Home#projects">
             <House className="size-9"/> 
             </Link>
             </div>
             <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-secondary"> Featured Projects
            </h1>
            </div>
        </div>
        </div>
            <div className="pt-3 pb-10 flex md:flex-columns-3 flex-columns-1 opacity-0 animate-fade-in-delay-1">
                <Link to="/CaseStudy1Page" className="cosmic-button">
                Yelp Research
               </Link>
                <Link to="/CaseStudy2Page" className="cosmic-button">
                PVF Website
               </Link>
            <Link to="/CaseStudy3Page" className="cosmic-button">
                RIB App Design</Link>
            </div>
        </section>
    );
};