import { ArrowDown } from "lucide-react";
import { House } from "lucide-react";

export const CaseStudy3 = () => {
     return (
     <section id="casestudy3" 
     className="relative min-h-screen flex flex-col items-center justify-center px-4"
     >
    <div className="container max-w-4xl mx-auto text-left z-10 md:border-5 pt-11 pb-4 bg-secondary">
        <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
             <span className="opacity-0 animate-fade-in text-secondary">Run it Back </span>
             <span className="text-primary opacity-0 animate-fade-in-delay-1">Mobile App </span>  
             <span className="text-primary opacity-0 animate-fade-in-delay-2">Design</span>     
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-6 md:pt-9">
            <b className="text-secondary"> Initial Question: </b> Is there a design solution that can help adults to more actively fulfill their need to engage in pick-up sports?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 pt-2 md:pt-5">
            <b className="text-secondary"> Answer: </b> Players need the most help with finding new, friendly competitors, and organizing the details of playing (location and availability).
            </p>
            <h3 className="pt-40 text-xl text-center"><b>User Survey Results </b> (n=35)</h3>
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="space-y-6 mr-4">
                    <img className="border-1" src="../public/graphs/graphRIB.PNG" alt="Graph showing the top two user frustrations are finding new people and access to gyms"></img>  
                    </div>
                    <div className="pt-4 pb-7 text-left text-lg">
                    <p><b className="text-secondary"> 7 in 10 users </b>  report difficulty with finding new players. This can be especially difficult for sports that require many players.
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-3 md:pt-4">
                    <div className="space-y-6 mr-4">
                    <img className="border-1" src="../public/projects/competitor2.png" alt="Graph of an older, athletic man with a beard climbing on hanging rings in an obstacle course"></img>  
                    </div>
                    <div className="pt-5 pb-7 text-left text-lg">
                    <p><b className="text-secondary"> </b> A <b>small subset of users </b> (30%) indicated that they <b>prefer high competition-level</b> to socializing.
                    </p>
                    </div>
                </div>
                <div>
                <p className="pt-41 md:pt-11">
                    <span className="opacity-0 animate-fade-in text-lg"><b>From the <b>initial user interviews </b> and  survey results</b> of group-related differences, I created <b>two personas.</b> and <b>one customer journey map </b> of the experience searching for pick-up sports players</span>   
                </p>
                </div>
                <div>
                </div>
                <div className='pt-4'>
                    <img className= "border-1" src="../public/projects/uripersona.png" alt="User persona for Uri the Uncertain, a research-derived persona that would like to play more sports socially but feels awkward and nervous to do so"></img>
                    <img className="border-1 mt-4" src="../public/projects/customerjourneymap.png" alt="A customer journey map for Uri the Uncertain, as he navigates finding new friends to play pickleball with"></img>
                </div>
                 <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">Then, I created <b className="text-primary">low-fidelity wireframes </b>to address these core user needs: finding other players and managing field or court availability.</span>   
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">My goal was to develop a hybrid between Facebook and Tinder, that mimics the experience of searching for players in a local gym or field, but with none of the downsides. This would allow players to navigate their own matchmaking while making friends along the way.</span>   
                    
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                        In a gym, it can be hard to assess the skills and friendliness of players without knowing them personally first. Having skill, player description, and ability to message players addresses several core user behaviors and needs when searching for sports.
                    </span>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 pt-5 mx-auto'>
                    <img className="md:size-93 border-1" src="../public/projects/wireframes3.png" alt="Low-fidelity prototype of the Available Players Near You screen in gray and white depicting an app to find pick-up sports players in your area"></img>
                    <img className="mt-3 md:mt-0 border-1 md:size-93" src="../public/projects/wireframes4.png" alt="Low-fidelity prototype of the My Games Screen in gray and white depicting an app to find pick-up sports players in your area"></img>
                </div>
                <p className="pt-41 md:pt-5">
                    <span className="opacity-0 animate-fade-in text-lg">
                        I conducted moderated usability testing sessions with three users, and uncovered several important findings to implement into the next iteration of design.
                    </span>
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                       The first key finding was that all <b className="text-primary">users were very hesitant to add a stranger to a game </b> without their consent. They wanted to message the person first to establish consent to play. For the next iteration, I made sure to incorporate a "Send Invitation" feature, to give players the option to choose their games.
                    </span>
                </p>
                 <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                       Additionally, I needed to create a user flow to represent the action of receiving an invitation from another player, which I explored in the next design.
                    </span>
                </p>
                 <div className='grid grid-cols-1 md:grid-cols-2 pt-5 mx-auto'>
                    <img className="md:size-93 border-1" src="../public/projects/lofiprototypev2.png" alt="Low-fidelity prototype screen depicting Basketball 1 versus 1 players available now in gray and white"></img>
                    <img className="mt-3 md:mt-0 border-1 md:size-93" src="../public/projects/lofiprototype2v2.png" alt="Low-fidelity prototype screen also depicting Basketball 1 versus 1, but with sending a game request to a player named Josh, and a notification arrives that he accepts the request"></img>
                </div>
                 <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">
                       Users navigated the new game request feature much more readily, and quickly saw the visible feedback of the request acceptance as it appeared on the screen.
                    </span>
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                      One issue stakeholders raised at this stage was difficulty of thumb placement when navigating the app. Studies have shown that users do navigate flexibly using both hands at varying times, however that a footer navigation would make it less difficult for the mobile app.
                    </span>
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                       To account for this, I altered the navigation to include some key features consistently seen at the top right of the screen (such as profile, search, and alerts) while adding a footer navigation for other pages within the site. This also reduced visual clutter, making the top of the visual space less distracting.
                    </span>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 pt-41 mx-auto'>
                    <img className="md:size-93 border-1" src="../public/projects/hifiwireframes2v2.png" alt="High-fidelity prototype screens in full color of a Basketball 1 versus 1 page where the user has clicked on the profile card of Josh P., a college player with brown hair."></img>
                    <img className="mt-3 md:mt-0 border-1 md:size-93" src="../public/projects/hifiwireframes2.png" alt="High-fidelity prototype screens in full color displaying Soccer Groups near the San Diego region, and another screen depicting the final stages of scheduling a 1 versus 1 
                    basketball game with another player named Josh"></img>
                </div>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                      After two more rounds of usability testing and iterations, solving minor problems within the core flow at each step while gradually increasing the fidelity, I constructed the final prototype above.
                    </span>
                </p>
                 <p className="pt-4 pb-25">
                    <span className="opacity-0 animate-fade-in text-lg">
                      While the key functionality allows for finding new players easily, I also wanted to add a way to quickly find and create groups. For that reason, I included a groups flow using the same core navigation I tested throughout.
                    </span>
                </p>
                <hr className="pt-2"></hr>
                <p className="pt-4 md:pb-7 pb-22">
                    <span className="opacity-0 animate-fade-in text-lg">
                     <b> Summary: </b>From initial user interviews and surveys, through multiple rounds of design iterations and usability testing, I created a mobile app solution to help people better locate other pick-up sports players in their area. 
                </span>
                </p>
            </div>
                </div>
                
            </div>

            

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        </div>
    </section>)
}