import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
        {
        id: 1,
        title: "Yelp: Original User Research",
        description: "Data-driven evidence for a friend referral feature in restaurant reviews on Yelp",
        image: "/projects/Yelp Friend Referral Case Study Image.png",
        tags: ["User Research","Usability Testing","User Surveys","Mixed-Methods Research"],
        demoUrl: "#",
        siteUrl: "/CaseStudy1Page",
    },
            {
        id: 2,
        title: "PVF Fantasy Sports League: Original Web Design",
        description: "A new web app to play fantasy sports using web-scraped indoor volleyball data",
        image: "/projects/PVF League UX Picture.png",
        tags: ["Web Development","JavaScript","HTML/CSS","Web Scraping","Data Visualizaation"],
        demoUrl: "#",
        githubUrl: "",
        siteUrl: "/CaseStudy2Page",
    },
    {
        id: 3,
        title: "Run it Back Mobile App: Original Research and Design",
        description: "An app that makes it easier to find pick-up sports games near you",
        image: "/projects/Run It Back Wireframe.png",
        tags: ["User Research","Usability Testing","UX Design","Figma","Mixed-Methods Research"],
        demoUrl: "#",
        siteUrl: "/CaseStudy3Page",
    }
];

export const ProjectsSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent user experience projects. Each project was carefully designed
                with attention to detail, while designing to address user and business needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <Link to={project.siteUrl} key={key}>
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag)=> (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}
                           <span className="flex justify-between items-center">
                                <span className="flex space-x-3">
                                </span>
                            </span>
                            </p>
                        </div>
                        
                
                </div>
                </Link>
                ))}
            </div>
            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/VinceBottom"
                
                >
                   <Github size={18}/> Find My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
    )
};