import { ArrowDown } from "lucide-react";

export const CaseStudy1 = () => {
     return (
     <section id="casestudy1" 
     className="relative min-h-screen flex flex-col items-center justify-center px-4"
     >
    <div className="container max-w-4xl mx-auto text-left z-10 md:border-5 pt-11 pb-4 bg-secondary">
        <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
             <span className="opacity-0 animate-fade-in">Yelp </span>
             <span className="text-primary opacity-0 animate-fade-in-delay-1">Original User </span>  
             <span className="text-primary opacity-0 animate-fade-in-delay-2">Research</span>     
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 pt-6 md:pt-9">
            <b className="text-secondary"> Initial Question: </b> Do restaurant connoisseurs (or "foodies") differ from others in how they search for new restaurants?
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 pt-2 md:pt-5">
            <b className="text-secondary"> Answer: </b> Yes, but there is also a more pressing issue. Some <b>users don't believe online restaurant reviews are credible</b>.
            </p>
            <h3 className="pt-40 text-xl text-center"><b>User Survey Results </b> (n=67)</h3>
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                    <div className="space-y-6 mr-4">
                    <img className="border-1" src="../public/graphs/foodiesgraph2.PNG" alt="graph showing questionable review validity frustrates users"></img>  
                    </div>
                    <div className="pt-4 pb-7 text-left text-lg">
                    <p><b className="text-secondary"> 1 in 5 users do not trust the validity
                        of online reviews </b> when searching for restaurants. This might be due to <b className="text-secondary"> paid influencer reviews.</b>
                    </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-3 md:pt-4">
                    <div className="space-y-6 mr-4">
                    <img className="border-1" src="../public/graphs/foodiesgraph.PNG" alt="graph showing some differences between non-food-connoisseurs and casual eaters in source preference"></img>  
                    </div>
                    <div className="pt-5 pb-7 text-left text-lg">
                    <p><b className="text-secondary"> </b> While <b className="text-secondary">food connoisseurs seek out more total information sources</b> to find restaurants, <b className="text-secondary"> both
                    user groups rely on friend referrals </b> to find restaurants.
                    </p>
                    </div>
                </div>
                <div>
                <p className="pt-40">
                    <span className="opacity-0 animate-fade-in text-lg"><b>From the <b>initial user interviews </b> and  survey results</b> of group-related differences, I created <b>two personas.</b> </span>   
                </p>
                </div>
                <div>
                </div>
                <div className='pt-4'>
                    <img className= "border-1" src="../public/projects/persona1.png" alt="user persona of Carl the Chef, a research-derived persona that represents a food connoisseur"></img>
                    <img className="border-1 mt-4" src="../public/projects/persona2.png" alt="user persona of Sawyer the Social Butterfly, a research-derived persona that represents a casual eater"></img>
                </div>
                 <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">In order to <b>further empathize</b> with these two user groups, <b>I created storyboards</b> to explore their unique <b>user needs.</b></span>   
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">I found that <b className="text-primary">food connoisseurs have key differences</b> from casual eaters, such as <b> higher median income </b> and consulting <b> more sources of information.</b> </span>   
                    
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                        Both user groups <b className="text-primary"> struggle to determine if online reviews are valid </b> which, in part, drives their use of <b className="text-primary">word of mouth references for restaurants. </b>
                    </span>
                </p>
                <div className='pt-5 md:pt-7'>
                    <img className="border-1" src="../public/projects/storyboard2fix.png" alt="A storyboard representing a night in which the user persona Sawyer the Social Butterfly tries to remember a friend's food recommendation, but fails"></img>
                    <img className="mt-3 border-1" src="../public/projects/storyboard1fix.png" alt="A storyboard representing Carl the Chef struggling with reading through many different restaurant reviews, before giving up and trying one at random"></img>
                </div>
                <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">
                        From here, <b className="text-primary">I designed a low-fidelity solution with wireframes</b>. The idea of the design was to compile the key sources that users prefer when searching for restaurants into one easy to navigate location.
                    </span>
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                       This design led me to <b className="text-primary">an important realization</b> about these user groups' needs.
                    </span>
                </p>
                <div className="grid md:grid-cols-2 pt-4">
                    <img className="border-1 md:max-w-85" src="../public/projects/friendbites2.png" alt="A website prototype screen displaying a map and search navigation for finding friend-recommended restaurants."></img>
                    <img className="border-1 md:max-w-85 md:mt-0 mt-3" src="../public/projects/friendbites1.png" alt="A website prototype screen displaying local food news, with option to navigate to other taps such as My Profile, My Friend's Top Picks, or to select Map Mode"></img>  
                </div>
                <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">
                       The wireframes presented an <b className="text-primary">elaborate </b>solution that combined the two user groups' typical approaches to finding restaurants. But <b className="text-primary">users did not need that. </b> They needed something <b> much simpler: a way to verify </b> that online reviews were accurate.
                    </span>
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                       This solution just provided <b> yet another source of information </b> to scour for restaurants.
                    </span>
                </p>
                <p className="pt-41">
                    <span className="opacity-0 animate-fade-in text-lg">
                       Returning to Yelp's interface, I performed <b className="text-primary"> moderated usability testing </b> to provide both potential recommendations on a new feature, and uncover existing pain points within the current interface.
                    </span>
                </p>
                 <div className="pt-4">
                    <img className="border-1 sm:size-m justify-center" src="../public/graphs/foodiesusability.png" alt="A graphic representing final user research recommendations, their difficulty, and impact, including adding breadcrumbs to the login page, creating a friend recomendation feature for restaurants, and adding social media login capability (such as through Google, Meta)"></img>
                </div>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                      One <b>easy usability problem to solve </b> is that users had some difficulty navigating out of the login page after clicking there accidentally, revealing an <b>absence of breadcrumbs in the core login flow.</b>
                    </span>
                </p>
                <p className="pt-4">
                    <span className="opacity-0 animate-fade-in text-lg">
                      Additionally, I <b>recommended adding a social login feature </b> to Yelp. This would create an <b>easier login experience</b>, while providing <b>an easier way to track and personalize user experience in the future. </b>It also provides a way for <b> users to easily view friend referrals to restaurants </b> without having to add friends on Yelp that they connect with on other platforms.
                    </span>
                </p>
                <p className="pt-4 pb-41">
                    <span className="opacity-0 animate-fade-in text-lg">
                      Finally, future research projects could <b>further investigate a friend referral feature for other categories of reviews </b>(e.g. automotive services, retail).
                    </span>
                </p>
                <hr className="pt-2"></hr>
                <p className="pt-4 md:pb-7 pb-22">
                    <span className="opacity-0 animate-fade-in text-lg">
                     <b> Summary: </b>While I ultimately abandoned the FriendBites interface, it allowed me to connect in a deeper way with user needs through simple sketches of design ideas. I was able to find out what users do not need before uncovering a simpler solution for what they do.
                    </span>
                </p>
            </div>
                </div>
                
            </div>

            

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        </div>
    </section>)
}