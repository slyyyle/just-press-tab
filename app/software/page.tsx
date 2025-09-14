"use client"
import { Button } from "@/components/ui/button"
import { Code, Terminal, Cpu, ChevronDown, ChevronUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"
import React, { useState, useEffect } from "react"

export default function SoftwarePage() {
  const [mounted, setMounted] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState<{[key: string]: boolean}>({});

  // Handle mounting - start with all projects collapsed
  useEffect(() => {
    setMounted(true);
    
    // Always start with all projects collapsed
    setExpandedProjects({});
    
    // Clear any saved state to ensure fresh start
    try {
      localStorage.removeItem('software_expandedProjects');
    } catch (error) {
      console.error('Error clearing software page state:', error);
    }
  }, []);

  // Toggle project expansion
  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => {
      const newState = { ...prev, [projectId]: !prev[projectId] };
      
      // Save to localStorage
      try {
        localStorage.setItem('software_expandedProjects', JSON.stringify(newState));
      } catch (error) {
        console.error('Error saving expanded state:', error);
      }
      
      return newState;
    });
  };

  // Show loading state during hydration
  if (!mounted) {
    return (
      <main className="min-h-screen bg-background py-16 px-4 software-theme">
        <div className="max-w-6xl mx-auto">
          <PageHeader 
            title="Software" 
            subtitle="Coding projects, tools, and development" 
            className="text-primary"
          />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-card border-2 border-primary rounded-md p-6 animate-pulse">
                <div className="h-8 bg-muted rounded mb-4 w-1/3"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  const projects: Array<{
    id: string;
    title: string;
    caption?: string;
    headerImage?: string;
    content: React.ReactNode;
  }> = [
    {
      id: "slysearch",
      title: "SlySearch",
      caption: "Working On: PAUSED - Waiting on acquiring proper hardware for locally testing larger models. Learning YaCY for my own index engine.",
      headerImage: "/slysearch_frontpage.jpg",
      content: (
        <div className="max-w-none space-y-4">
          <p className="text-xl leading-relaxed"><strong>Problem Motivation:</strong> I was having issues verifying how altered my search results were due to revenue‑based conflicts of interest. After seeing sponsored results mar my experience consistently over the past few years, I was interested in what I might see in searches that are not algorithmically touched by a corporate entity who might not be aligned with my interests or life. Naturally, I am liable to receive sub‑optimal or focused content online, and thus I almost certainly receive sub‑optimal or focused content in a way that influences my behavior without complementing it.</p>
          
          <p className="text-xl leading-relaxed"><strong>Challenge:</strong> Can I personalize and optimize my user experience online with my own search tool? How much personal and sensitive data that current service providers ask for is actually necessary for personalization from which I can derive an objective, nonzero benefit?</p>
          
          <p className="text-xl leading-relaxed"><strong>Solution:</strong> Slysearch is an aggregator powered by SearxNG. It was designed to be fully local, hiding all external information from the user at search time within reason, and sending and requesting no personal data. It combines scrape‑ or API‑based searches across roughly 200 search engines, in order to create a more raw method of finding and aggregating indexed and served results from precrawled web content.</p>
          
          <img src="/slysearch-listsearch.jpg" alt="Slysearch list search interface" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed"><strong>AI Twist: Retrieval‑Augmented Generation + LangChain Expressive Language</strong> – While a user can create loadouts of any combination of the 200+ engines available to search from, this can be tedious: defining search preferences in rule‑based ways ("I really want X file format when I search for a song," or "When I search for a musical artist name, I feel it is implied through my use and behavior that I want to go to YouTube"). Interestingly, this is the exact personalization all current providers operate with, so I was even more surprised to find I had arrived at a truly personalized experience without deliberately collecting any data on myself or ever needing to ask myself for it. Most of the personalized benefit I extract daily from this tool actually came from exploiting common expectations and knowledge about the tool and medium, and almost none came from information I provide about myself. The latter is wholly unnecessary.</p>
          
          <img src="/slysearch_loadouts_top.jpg" alt="Slysearch loadouts configuration" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed">The power is having choice: I can save search‑engine loadouts to quickly change my angle given my query. I can also rely on a small language model to more effectively parse my search query, find the X/200 optimal engines to search that query across, rephrase the query X times (one per engine, given the engine's implementation and nuances of use), and make X searches to aggregate them into one Google‑like UX.</p>
          
          <img src="/slysearch_loadouts_bottom.jpg" alt="Slysearch loadouts bottom interface" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed">In order to do this with low resources (8B models are all I can locally afford to host, which affects output quality and context quality twofold), I found I could embed necessary differentiating information for each of the 200 engines, and then serve a small language model that information in a way that was chunkable and manageable with such a small model architecture. By embedding personal preference into design (which is still unfeasible at the single‑human level due to cost, skill, and time of development), I was able to achieve a personalized experience without truly articulating anything conceptually of myself. That was the major W on this project for me.</p>
          
          <p className="text-xl leading-relaxed">I'd like to push further, but given the machinery required to continue to locally host models is very expensive to own and obtain, I am eagerly waiting for conditions to push the RAG‑powered engine further. Eventually, the RAG engine selector will be one of many submodules a user will be able to employ to do things like dynamic, deep search voyages across the web that mimic user real‑time use. When users surf the web, it is a complex and sophisticated interaction between human user and the content in its end form—and I envision ChatGPT's Deep Research, but more interactive, like a stochastic and user‑evolving "tower defense" of information flow. Perhaps you want to do an initial search, gather info, and come back and make a real one with a better vantage point of what you're beginning to learn or research. We as humans unknowingly perform a lot of cognitive grunt behaviors that we've internalized as necessary but simply are no longer even optimal, and I'm excited to explore that after I find a new organization to produce for!</p>
          
          <img src="/slysearch_quicklinks.jpg" alt="Slysearch quicklinks interface" className="w-full h-auto object-contain rounded-md my-4" />
        </div>
      ),
    },
    {
      id: "slymaps",
      title: "SlyMaps",
      caption: "Working On: AI Tool Call Integration for Intelligent Routing, Day and Trip Planning, and more!",
      headerImage: "/slymaps_transit_directions.jpg",
      content: (
        <div className="max-w-none space-y-4">
          <p className="text-xl leading-relaxed"><strong>Problem Motivation:</strong> I was moving from Omaha to Seattle, wanted to ditch my car, and use and understand public transit. There was one major feature I really wanted:</p>
          
          <p className="text-xl leading-relaxed">I wanted to be able to search for public transit routes, instead of using Google Maps, which presents public transit information only in the scope of directions. I wanted to be able to route‑hop on a whim, but with foreknowledge of the entire routes. For example, I could take Route 7 all the way south out of Seattle, and each stop along the way might intersect with another route. There are some stops that allow for true exploration, but it takes careful planning to know "Route 40 goes to X Street, where if I wait five minutes, Route 35 will be here to pick me up and go somewhere else." It is very nice in general just to be able to view the routes and stops agnostic of a trip, because then I can just walk out of my house and go exploring using my careful route‑mapping system. Naturally, I made my own map app to see if I could achieve this before I moved. It has worked quite well and helped me understand context behind routes, and come up with new ideas for presenting this information in a way that helped me personally given what I know about my communication and thought styles.</p>
          
          <img src="/slymaps_route_display.jpg" alt="Slymaps route display interface" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed">The cool bonus of this project was realizing how underutilized map technology is. It is so fun to be a map nerd; I wonder why I never played with it previously.</p>
          
          <p className="text-xl leading-relaxed">However, map tech is expensive at scale. I spend as a user about $3 when I get lazy with my development calls to a few different APIs (OSM, Foursquare, One Bus Away – Puget Sound, Mapbox integrated geomapping and address/GPS handling) per month, but can see how that gets out of control. Rendering 3D tile sets and lighting on a map opens up a world of custom data possibilities and mapping far beyond locational utility. I am exploring funneling RSS feeds from local newspapers and placing "happenings" on the map. I intend to integrate POIs and happenings/events directly on the map as POIs, sort of like a quest would pop up on a video‑game map. As I walk around Seattle, I find areas like the Harbor Steps, snap a picture, and put the location on my map. I can put notes about the location and keep them private, so next time someone suggests going to a crappy eight‑dollar fake Seattle‑dog imposter stand, I can say "Nay! I already made that mistake; it says right here on my map—don't do it again!" I like to envision a world where my preferences mean that much to myself, so I try to enforce it.</p>
          
          <img src="/slymaps_recent_search.jpg" alt="Slymaps recent search functionality" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed"><strong>AI Twist:</strong> This is where it clicked for me—I can provide application data to an LLM much like raw context. In this case, I can coerce LLMs to feel like or take the role of the website itself. The AI can choose to invoke or search using the mechanisms in the app I developed for myself to search with. The AI can basically manifest in any method I provide it. It makes most application development heavily dependent on doing the simple non‑AI UX things right, and the better I did that, the more clear the AI results were. The end goal with better machinery is to test larger models in context and output in this domain. I anticipate it will be very easy to have an LLM do advanced things like honor edge desires in a daily schedule: "I have to do this thing, but want to do this thing too. Routing and conditions may just not be good for this today. I also don't think I can borrow my friend's car today until 2 PM. What do you see? Help me plan!" Maybe you can do both. Planning our day, even with current map applications, is difficult. And, dare I say, it could also be fun, you know.</p>
          
          <img src="/slymaps_home_save.jpg" alt="Slymaps home save feature" className="w-full h-auto object-contain rounded-md my-4" />
        </div>
      ),
    },
    {
      id: "vgtodo",
      title: "VG-Todo",
      caption: "Working On: Need to clean up a fix small UX things, fully in use!",
      headerImage: "/slyTodo_quests_main.jpg",
      content: (
        <div className="max-w-none space-y-4">
          <p className="text-xl leading-relaxed"><strong>Problem Motivation:</strong> I like the video‑game XP vibe of to‑do apps, but none implement this system in a way that is passive. It almost always requires non‑planning cost from the user to set up in a responsible way not many can. Thus, I made a simple themed to‑do app that does only the crucial CRUD. It doesn't distract with gamified systems. The aesthetic I found to be enough. I really liked doing this one, and I use it every day! Plus, you can live out your dreams of being an adult Pokéball. I struggle to know what else people could ever need—as being a Pokéball is quite luxurious and niche.</p>
          
          <img src="/slyTodo_quest_dialog.jpg" alt="VG-Todo quest dialog interface" className="w-full h-auto object-contain rounded-md my-4" />
          
          <img src="/slyTodoAbandon.jpg" alt="VG-Todo abandon quest feature" className="w-full h-auto object-contain rounded-md my-4" />
        </div>
      ),
    },
    {
      id: "neverpayedvarsity",
      title: "Never Played Varsity",
      caption: "Working On: Final Data Validation and Model Suite Validation - Almost Alpha!",
      headerImage: "/NPVmodelpredictions.jpg",
      content: (
        <div className="max-w-none space-y-4">
          <p className="text-xl leading-relaxed"><strong>Problem Motivation:</strong> My father told me never to gamble. I'm not much for gambling and I never played varsity sports. However, I was morbidly curious if market inefficiencies in the sports speculation world:</p>
          
          <p className="text-xl leading-relaxed">A) Held life or game theory lessons or perspectives I can extrapolate to many life circumstances—negotiation and game awareness have always been things I wanted to explore and improve upon.<br/>
          B) Held insights into modeling systems as a whole<br/>
          C) Were large enough to prove my dad wrong on a small scale just because it was a fun challenge.</p>
          
          <p className="text-xl leading-relaxed">Overall, I use paper money. Math and speculation is fun, and solving problems can lead to unrelated solutions elsewhere.</p>
          
          <img src="/NPV_oddspage.jpg" alt="Never Played Varsity odds page interface" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed">I also knew that this application would force heavier architectural questions and learning in my web dev journey. For example, I had to employ a DuckDB middleware architecture, with intelligent caching, and I actually had to pay for an Odds API. For this reason, I could no longer be lazy with my API calls. I have to maximize what I have each month, and I can't just delete the database for a fresh initialization every time I personally get the willy nillies or think I've encountered a data quality issue. The world of microservices is wonderful and confusing.</p>
          
          <p className="text-xl leading-relaxed"><strong>Solution:</strong> Never Played Varsity pulls real-time Odds data, and interlays it with historical data. It allows users to create strategies, train models and attach them to strategies, track and control betting behaviors, and backtest even their own behavior agnostic of the predictions they are using to bet. It covers every intelligent consideration one would need to treat their sports speculation just as seriously as their investment portfolio. In the end, I see raw risk to differing extents, different market inefficiencies, and the same game across the board. I see no market as any more fair or moral than any other, given legality is sound. I find the distance in litigation and rhetoric behind our American markets and non-traditional speculations like betting to be a bit unwarranted.</p>
          
          <img src="/NPVmoneylineodds.jpg" alt="Never Played Varsity moneyline odds display" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed">It currently allows training of XGBoost, some Regression, and some ensembling (simple for the MVP, but easily expandable), hosts a model training suite with websocket training tracking, extremely advanced and opinionated feature engineering and flow that contextually caters to the speculation of interest (pitcher strikeout bets should only display to the user contextual and advanced features they can use). Partially, I am continuing to press on my personal philosophy: unopinionated data software is as good as nothing. Often users don't want the shell—they want an understandable decision-making tool. This was my testing ground for the feasibility of that.</p>
          
          <img src="/NPV_train_model.jpg" alt="Never Played Varsity model training interface" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed"><strong>AI Twist:</strong> For a long time, I've felt we as people have become very far disconnected from the metrics we use to describe life. For example, we might follow an accurate model to a wrong decision because we are hyperfocused on accuracy as a buzzword—and not thinking of why we're using it or what it literally measures in our context. Thus, I am exploring if there is demand for applications (outside of my personal use) where these decisions are made for the user. Betting is polarizing in that strategy is everywhere, and experientially the game and systems are very nuanced. Thus, a weak data tool with no consideration for end use, that places the analytical responsibility of everything on the user, will end up unused. No one reads the manual. You have to embed that with tooltips in every corner of the application now.</p>
          
          <img src="/NPV feature importance.jpg" alt="Never Played Varsity feature importance analysis" className="w-full h-auto object-contain rounded-md my-4" />
          
          <p className="text-xl leading-relaxed">Jokes aside, it is tough. Making use of in-place information is AI's raw power. Contextual understanding of metrics, and articulating and exploring a final hinge decision point is its power. When we act, and choose to go from decision to action, that is our power. It's hard to determine when to act and when the data is right. It is scary. That's exactly why I chose betting—it is not a no-consequence experiment. It is learning with skin in the game about modeling, how much to trust metrics, how to effectively conversate with your data and yourself to make this decision with metrics kept in their correct place and time. And, I must say after moving from NBA data to MLB data, my mind is racing. It's very fun to speculate and employ mathematics and metrics in real life to see if you can predict it with the best of them. It was as much a self-confidence experiment (playing in systems and understanding their inefficiencies instead of disregarding them as unfair or uninterfaceable) as it was a pure data exploration experiment. I might even use it! That would be true modeling only when I do. It really presses on what it means to make a decision, why they often cost us in deliberation and not consequence, and how powerful some nuanced analysis can be if we relax assumptions in ways we see responsible or amenable. With hyperparameter tuning recently being considered in research to be rather fixed and arrived on, I can forget forever the long nights I spent during my Master's thesis picking Adam's learn rate schedule. XGBoost is awesome, I like the way ML is trending, and this brought me back to pre-transformer old-school cool "AI" to see how it's developed in the quiet shadows of LLMs.</p>
          
          <img src="/NPV Insights.jpg" alt="Never Played Varsity insights and analytics dashboard" className="w-full h-auto object-contain rounded-md my-4" />
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-background py-8 md:py-16 px-4 software-theme">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <PageHeader 
          title="Software" 
          subtitle="Coding projects, tools, and development" 
          className="text-primary"
        />

        {/* Projects expandable list */}
        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border-2 border-primary rounded-md overflow-hidden pixel-corners"
            >
              <div 
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => toggleProject(project.id)}
              >
                <div className="flex items-center justify-between p-4 md:p-6">
                  <div className="flex-1">
                    <h3 className="font-vt323 text-2xl md:text-3xl text-[hsl(var(--primary))] mb-2">
                      {project.title}
                    </h3>
                    {project.caption && (
                      <p className="text-lg text-[hsl(var(--platform))] font-medium font-vt323">
                        {project.caption}
                      </p>
                    )}
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {expandedProjects[project.id] ? (
                      <ChevronUp className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                </div>
                {project.headerImage && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    <img 
                      src={project.headerImage} 
                      alt={`${project.title} preview`} 
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </div>
                )}
              </div>
              
              {expandedProjects[project.id] && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-primary/20">
                  <div className="pt-4 text-[hsl(var(--platform))] leading-relaxed font-vt323 text-xl">
                    {project.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

