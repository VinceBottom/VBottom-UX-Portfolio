import { ArrowDown } from "lucide-react";

export const CaseStudy2 = () => {
     return (
     <section id="casestudy2" 
     className="relative min-h-screen flex flex-col items-center justify-center px-4"
     >
    <div className="container max-w-4xl mx-auto text-left z-10 md:border-5 pt-11 pb-4 bg-secondary">
        <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
             <span className="opacity-0 animate-fade-in">Pro Volleyball Fantasy </span>
             <span className="text-primary opacity-0 animate-fade-in-delay-1">Website </span>  
             <span className="text-primary opacity-0 animate-fade-in-delay-2">Design</span>     
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-6 md:pt-9">
            <b className="text-secondary"> Initial Problem: </b> How can I help my friends to play online fantasy volleyball, when there is no current website for the sport?</p>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 pt-2 md:pt-5">
            <b className="text-secondary"> Solution: </b> By web scraping online professional volleyball statistics, setting up a data pipeline, and creating responsive and human-centered data tables, I can analyze the statistics and create my own fantasy sports website.
            </p>
            <h3 className="pt-40 text-xl text-center"><b>Web Scraping </b>with <b className="text-primary">BeautifulSoup</b></h3>
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="space-y-6 mr-4">
                    <img className="border-1" src="../public/projects/codesnippet2.PNG" alt="A screenshot of Python code that uses its Playwright and BeautifulSoup packages to scrape online volleyball roster data from the web"></img>  
                    </div>
                    <div className="pt-4 pb-7 text-left text-lg">
                    <p className="text-secondary">I first used a combination of Python's packages Playwright and BeautifulSoup to pull player names, positions, and rosters from the pro volleyball website. BeautifulSoup helped to parse the html into csv format.
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-3 md:pt-4">
                    <div className="space-y-6 mr-4">
                    <img className="border-1" src="../public/projects/pvfpics.PNG" alt="An action picture of a professional opposite hitter in volleyball hitting a ball past an opposing blocker, with the pro volleyball federation logo in the center"></img>  
                    </div>
                    <div className="pt-5 pb-7 text-left text-lg">
                    <p className="text-secondary">From there I created a data pipeline to pull in-game data from the websites, convert it into player statistics, and update many reusable data tables to add the new numbers into the website.
                    </p>
                    </div>
                </div>
                <div>
                <p className="pt-40">
                    <span className="opacity-0 animate-fade-in text-lg">I created a responsive menu and website to change across breakpoints. Additionally, the menu serves as both a signifier of location of the page and a button link to a new page, to keep the user's location visible at all times.</span>   
                </p>
                </div>
                <div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center pt-4'>
                    <img className= "border-1" src="../public/projects/pvf2.png" alt="The home landing page for the PVF Fantasy Volleyball League website, currently displaying team standings."></img>
                    <img className="border-1 mt-4 md:ml-19 md:mt-0 md:size-58 size:70" src="../public/projects/pvf8.png" alt="The home landing page for the mobile format of the PVF Fantasy Volleyball League website, with only the navigation links in view."></img>
                </div>
                 <p className="pt-7">
                    <span className="opacity-0 animate-fade-in text-lg">I experimented with different data table formats to visualize the player data. Since users would need to cross-reference and compare their own team statistics along with potential free agents and other teams, I included the functionality to sort tables by individual statistics.</span>   
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">Since there are many players to choose from but this could be distracting for the purpose of comparison, I wanted to include only the first ten results per page. This also scales better for mobile and provides user choice if they prefer to see a longer list in a desktop browser. </span>   
                    
                </p>
                <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">
                        While I started by creating table visualizations in custom CSS, I eventually found a superior JavaScript solution that already exists called DataTables. It builds in all of this necessary functionality with many customization options to fit the user goals of the fantasy website.
                    </span>
                </p>
                <div className='pt-5 md:pt-7'>
                    <img className="border-1" src="../public/projects/pvf3.png" alt="A responsive JavaScript DataTable currently displaying All Player Stats on the PVF Fantasy Volleyball Website"></img>
                </div>
                <hr className="pt-2"></hr>
                <p className="pt-43 pb-21">
                    <span className="opacity-0 animate-fade-in text-lg">
                     <b> Summary: </b>Using my skills in data analysis and scraping, as well as some basic user experience heuristics and web development skills, I created a Fantasy Volleyball Website for the inaugural season of the Pro Volleyball Federation. The league has sadly since disbanded, but it was an important learning experience for me across several domains.
                    </span>
                    <p className="opacity-0 animate-fade-in text-lg pt-5">
                     In the future, I would involve the users of the website in testing for improvements. In an ideal world with an unlimited budget, I would have created a back-end to automate data scraping, uploads, and create user login screens.
                    </p>
                    <p className="opacity-0 animate-fade-in text-lg pt-5">
                     Overall, I created a way to meet user needs as they navigated the site throughout the season, and enjoyed playing one of the only available formats of online fantasy volleyball.
                    </p>
                </p>
            </div>
                </div>
                
            </div>

            

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        </div>
    </section>)
}