import { Code, User, Microscope } from "lucide-react";

export const About = () => {
    return (
        <section id="about" 
        className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>    
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate UX Researcher, Designer, & Web Developer</h3>
        <div className="text-muted-foreground"> 
            <p className="pb-4">With my M.S. degree in User-Centered Design and 2 years of experience 
                creating intuitive data dashboard designs, I specialize in creating
                responsive, accessible websites.
            </p>
            <p className="pb-4">
            I'm passionate about creating aesthetically pleasing websites that
            solve user needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                {" "}
                Get in Touch
                </a>
            <a href="\resume\VincentBottomResume.pdf" target="_blank" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                {" "}
                Download Resume
                </a>
            </div>
        </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">User Experience</h4>
                    <p>Researching, ideating, and designing to solve user problems.</p>
                </div>
            </div>
        </div>
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p>Creating responsive websites using modern technologies like ReactJS.</p>
                </div>
            </div>
        </div>
        <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Microscope className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Analysis</h4>
                    <p>Automating data analysis in Python and publishing academic research.</p>
                </div>
                
            </div>
            
        </div>
            </div>


        </div>
        </div>
<div className="container mx-auto max-w-5xl pt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education <span className="text-primary"></span>    
            </h2>
</div>       
<div className="flex justify-center items-center sm:hide">
    <div>
    <img className="h-27 w-48 lg:w-45 lg:h-30 p-2" src="/logos/brandeislogo.jpg" alt="Brandeis University Logo"></img>
    <p className="text-sm"><b>Master of Science</b></p>
    <p className="text-sm sm:text-xs">UX Design</p>
    </div>
    <div>
    <img className="h-27 w-48 size-auto lg:w-45 lg:h-30 p-2" src="/logos/metalogoalt.png" alt="Meta and Coursera Combined Logo"></img>
    <p className="text-sm"><b>Certificate</b></p>
    <p className="text-sm">Web Development</p>
    </div>
    <div>
    <img className="h-27 w-48 size-auto lg:w-45 lg:h-30 p-2" src="/logos/depaullogo.gif" alt="DePaul University Logo"></img>
    <p className="text-sm"><b>Bachelor cum laude</b></p>
    <p className="text-sm">Psychology</p>
    </div>
</div>
        </section>
    );
};