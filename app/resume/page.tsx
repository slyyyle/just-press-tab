"use client"
import { Button } from "@/components/ui/button"
import { Brain, BookOpen, Cpu, ChevronDown, ChevronUp, X } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function ResumePage() {
  const [selectedSection, setSelectedSection] = useState("Skills")  // Default to first section
  const [expandedItem, setExpandedItem] = useState<string | null>(null)
  const [isDataScientistDialogOpen, setIsDataScientistDialogOpen] = useState(false)
  const [isRagDialogOpen, setIsRagDialogOpen] = useState(false)
  const [isUnderperformDialogOpen, setIsUnderperformDialogOpen] = useState(false)
  const [isLightbulbDialogOpen, setIsLightbulbDialogOpen] = useState(false)
  const [isAreWeClearDialogOpen, setIsAreWeClearDialogOpen] = useState(false)
  const isMobile = useIsMobile()

  // Hardcoded research projects
  const researchProjects = [
    {
      id: 1,
      title: "Skills",
      description: "The most important thing.",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Work History",
      description: "The mostly important thing.",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Academic History",
      description: "The mostly-less important thing.",
      icon: <BookOpen className="h-6 w-6" />,
    },
  ]

  const handleExplore = (title: string) => {
    setSelectedSection(title)
  }

  const handleExpand = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item)
  }

  // Featured papers
  const featuredPapers = [
    {
      id: 1,
      title: "Benchmarking Spectral Image Generation Schema & Pre-Trained Convolutional Neural Network Architectures for Audio Classification Tasks (2023)",
      abstract: "Left nothing to the imagination with this title",
    },
  ]

  return (
    <main className="min-h-screen bg-background py-8 md:py-16 px-4 research-theme">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <PageHeader title="Resume" subtitle="A reductionist representation of what I do" />

        {/* Mobile selector - only shown on mobile */}
        {isMobile && (
          <div className="mb-8">
            <div className="bg-card border-2 border-[hsl(var(--primary))] rounded-md p-1 pixel-corners">
              <div className="grid grid-cols-3 gap-1">
                {researchProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => handleExplore(project.title)}
                    className={`
                      px-2 py-3 rounded-sm font-vt323 text-lg transition-all
                      ${selectedSection === project.title 
                        ? "bg-[hsl(var(--primary))] text-background" 
                        : "bg-muted hover:bg-muted/80 text-[hsl(var(--primary))]"
                      }
                    `}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className={selectedSection === project.title ? "text-background" : "text-[hsl(var(--primary))]"}>
                        {project.icon}
                      </div>
                      <span className="text-sm whitespace-nowrap">{project.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Desktop grid - hidden on mobile */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card border-2 border-[hsl(var(--primary))] rounded-md overflow-hidden transition-transform hover:scale-105 pixel-corners"
              >
                <div className="p-4 md:p-6 flex flex-col items-center text-center h-full">
                  <div className="bg-muted p-3 md:p-4 rounded-full mb-3 md:mb-4 text-[hsl(var(--primary))]">{project.icon}</div>
                  <h3 className="font-vt323 text-2xl md:text-3xl mb-2 md:mb-3 text-[hsl(var(--primary))]">{project.title}</h3>
                  <p className="text-lg mb-3 md:mb-4 text-[hsl(var(--platform))] font-vt323">{project.description}</p>
                  <Button 
                    variant="default" 
                    className={`text-lg mt-auto w-full font-vt323 ${
                      selectedSection === project.title 
                      ? "bg-[hsl(var(--primary))]"
                      : "bg-gradient-to-r from-[hsl(var(--platform))] to-[hsl(var(--primary))] hover:from-[hsl(var(--platform)_/_90%)] hover:to-[hsl(var(--primary)_/_90%)]"
                    }`}
                    onClick={() => handleExplore(project.title)}
                  >
                    {selectedSection === project.title ? "Selected" : "Explore"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic content section */}
        <div className="bg-card border-2 border-[hsl(var(--primary))] rounded-md overflow-hidden pixel-corners p-4 md:p-6 mb-8 md:mb-12">
          <h2 className="font-vt323 text-2xl md:text-3xl mb-4 md:mb-6 text-[hsl(var(--primary))]">{selectedSection}</h2>
          <div className="space-y-4">
            {selectedSection === "Skills" && (
              <>
                <div className="flex flex-col p-3 bg-muted/50 rounded-md transition-colors hover:bg-primary/10 overflow-hidden">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleExpand("ml")}
                  >
                    <div>
                      <h4 className="font-vt323 text-2xl md:text-3xl text-[hsl(var(--primary))]">Machine Learning</h4>
                      <p className="text-lg text-[hsl(var(--platform))] font-vt323">Because Arnie said he'd be back.</p>
                    </div>
                    {expandedItem === "ml" ? (
                      <ChevronUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                  {expandedItem === "ml" && (
                    <div className="mt-4 space-y-4">
                      <div className="p-3 bg-background rounded-md overflow-x-hidden">
                        <ul className="list-disc space-y-1 pl-4">
                          <li className="text-lg text-[hsl(var(--primary))] font-vt323">Natural Language Processing</li>
                          <ul className="list-disc ml-12 space-y-1">
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">If you use anything other than <a href="https://pytorch.org/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">pyTorch</a>, <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer"> you should watch this cool video.</a></li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323"><a href="https://en.wikipedia.org/wiki/Word2vec" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Word2Vec</a> - Grandpa's n-grams, but uniquely useful for <em>bespoke</em> embeddings.  Transformers aren't the only game in town.</li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323"><a href="https://huggingface.co/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Huggingface</a> - I'd pay for this quality of documentation elsewhere. Just don't boss around the <a href="https://huggingface.co/docs/transformers/main/en/trainer" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Trainer API</a> (it's not untameable, though).</li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323"><a href="https://en.wikipedia.org/wiki/Large_language_model" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Large Language Models</a> - If you cannot get them to do something, it is mostly a skill issue.</li>
                          </ul>
                          <br />
                          <li className="text-lg text-[hsl(var(--primary))] font-vt323">Computer Vision</li>
                          <ul className="list-disc ml-12 space-y-1">
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">When I was doing it - *lowers monocle* we used <a href="https://en.wikipedia.org/wiki/Convolutional_neural_network" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">CNNs</a>.  <em>They worked fine.</em>  I would use ViTs, if you'd spot me a <a href="https://www.nvidia.com/en-us/geforce/graphics-cards/50-series/rtx-5090/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">5090</a> or <a href="https://www.nvidia.com/en-us/products/workstations/dgx-spark/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">DIGITS</a> machine.</li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Let's just skip to the real computer vision now.</li>
                          </ul>
                          <br />
                          <li className="text-lg text-[hsl(var(--primary))] font-vt323">Computer <span className="line-through">Hearing</span> Vision (IYKYK)</li>
                          <ul className="list-disc ml-12 space-y-1">
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">When I was doing it...never mind.  Check out my <a href="https://github.com/slyyyle/Audio-Benchmarking-Graduate-Thesis" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">thesis on audio classification</a> for a fun study of custom filterbanks and pretrained CNNs!</li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323"><a href="https://github.com/ggerganov/whisper.cpp" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">whisper.cpp</a> local transcription (you can run it on a toaster, seriously).  Bye bye, cloud subscriptions.</li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Fourier transform analysis with Spectrograms, Log Mel Spectrograms, Cochleagrams, Gammachirps.  <a href="https://brian2hears.readthedocs.io/en/stable/auto_examples/simple_anf.html#sphx-glr-auto-examples-simple-anf-py" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Audio is HARD!</a></li>
                          </ul>
                          <br />
                          <li className="text-lg text-[hsl(var(--primary))] font-vt323">Classical Machine Learning (Yes, I Said <a href="https://www.youtube.com/watch?v=T_Dy9OvgjHY" className="text-lg text-[hsl(var(--primary))] hover:underline underline font-vt323" target="_blank" rel="noopener noreferrer">Classical</a>)</li>
                          <ul className="list-disc ml-12 space-y-1">
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Run Forrest: <a href="https://xgboost.readthedocs.io/en/release_3.0.0/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">XGBoost</a> - if you use anything else for tabular data, call me. </li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Future Teller: <a href="https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">ARIMA</a> & <a href="https://en.wikipedia.org/wiki/Long_short-term_memory" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">LSTM</a> - Time Series always felt a little lukewarm to me.  Yes, ARIMAX is mostly the answer.</li>
                            <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Feature Spaghetti: <a href="https://scikit-learn.org/stable/modules/generated/sklearn.decomposition.PCA.html" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">PCA</a>  sparingly - I like to keep it simple and interpretable when working with tabular data.  You just run the risk of your features pipeline being redundant and confusing.</li>
                          </ul>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-3 bg-muted/50 rounded-md transition-colors hover:bg-primary/10 overflow-hidden">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleExpand("backend")}
                  >
                    <div>
                      <h4 className="font-vt323 text-2xl md:text-3xl text-[hsl(var(--primary))]">Backend</h4>
                      <p className="text-lg text-[hsl(var(--platform))] font-vt323">It ain't much to look at, but <em>sheesh</em> it's quick.</p>
                    </div>
                    {expandedItem === "backend" ? (
                      <ChevronUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                  {expandedItem === "backend" && (
                    <div className="mt-4 space-y-4">
                      <div className="p-3 bg-background rounded-md overflow-x-hidden">
                        <h5 className="font-vt323 text-lg text-[hsl(var(--primary))] mb-2">Backend Technologies</h5>
                        <ul className="list-disc ml-8 space-y-1">
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323">I prefer <a href="https://www.python.org/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Python</a> for backend.  If I need faster, I can reach for it.  I mostly never do.</li>
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323"><a href="https://fastapi.tiangolo.com/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">FastAPI</a>. It's a godsend.  I'd love to explore using APIs locally with python packages, that was truly a <button onClick={() => setIsLightbulbDialogOpen(true)} className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323">lightbulb moment</button> for me.</li>
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323">I am a <button onClick={() => setIsDataScientistDialogOpen(true)} className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323">data scientist</button> at heart. I don't pick favorites. Relational, Vector, Graph, etc. Oh also?  Excel doesn't suck.  VBA was my Rucker Park.</li>
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323"><a href="https://www.docker.com/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Docker</a> & <a href="https://podman.io/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Podman</a>.  Would like to learn Kubernetes.  A smarter guy did that at my last job.</li>
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323">I'm an on prem guy, but I have some <a href="https://github.com/slyyyle/xgboost-azure-migration" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Azure</a> experience.  I wanted to use AWS, for the record.  Just go on prem, it's not terribly difficult.</li>
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323">My model runner is <a href="https://ollama.ai/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">Ollama</a>.  I have very strong opinions about Ollama's design choices and service handling, but I can't do better. </li>
                          <li className="text-lg text-[hsl(var(--foreground))] font-vt323">My agentic handler is <a href="https://www.langchain.com/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">LangChain</a>.  I'll like to move to <a href="https://www.llamaindex.ai/" className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323" target="_blank" rel="noopener noreferrer">LlamaIndex</a>, when I have use case for a <button onClick={() => setIsRagDialogOpen(true)} className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323">RAG</button>.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-3 bg-muted/50 rounded-md transition-colors hover:bg-primary/10 overflow-hidden">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleExpand("frontend")}
                  >
                    <div>
                      <h4 className="font-vt323 text-2xl md:text-3xl text-[hsl(var(--primary))]">Frontend</h4>
                      <p className="text-lg text-[hsl(var(--platform))] font-vt323">Somewhat promising 1 number will update in 2 places, <em>at the same time.</em></p>
                    </div>
                    {expandedItem === "frontend" ? (
                      <ChevronUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                  {expandedItem === "frontend" && (
                    <div className="mt-4 space-y-4">
                      <div className="p-3 bg-background rounded-md overflow-x-hidden">
                        <p className="text-lg text-[hsl(var(--foreground))] font-vt323 mb-3">
                          I initially worked with Next.js and TypeScript for modern web applications, using Tailwind CSS and styled-components for styling. 
                          Shadcn was great for most components, though when it came to data grids, AG GRID was my go-to - it's proprietary, but wonderful. 
                          It's like being able to build completely from scratch, with a head start.
                        </p>
                        <p className="text-lg text-[hsl(var(--foreground))] font-vt323">
                          Since starting with these architectures, I've branched out into Vite, MUI, and custom CSS sheets and stylings with Cursor 
                          as I find it more effective and enjoy doing large refactor planning and todo creation with Cursor.
                        </p>
                        <p className="text-lg text-[hsl(var(--foreground))] font-vt323 mt-3">
                          <a href="/software" className="text-lg text-purple-500 hover:text-purple-400 hover:underline font-vt323">View my projects here!</a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {selectedSection === "Work History" && (
              <>
                <div className="flex flex-col p-3 bg-muted/50 rounded-md transition-colors hover:bg-primary/10 overflow-hidden">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleExpand("professional1")}
                  >
                    <div>
                      <h4 className="font-vt323 text-3xl text-[hsl(var(--primary))]">Software Application Developer II</h4>
                      <p className="text-lg text-[hsl(var(--platform))] font-vt323">Signature Performance</p>
                    </div>
                    {expandedItem === "professional1" ? (
                      <ChevronUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                  {expandedItem === "professional1" && (
                    <div className="mt-4 space-y-4">
                      <div className="p-3 bg-background rounded-md overflow-x-hidden">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Speech-to-Text Sentiment Analysis Pipeline</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Created/labeled 12.5k+ training examples under mental health professional guidance for fine-tuning a suicidal/homicidal intent detection model</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Built and deployed local Whisper-based speech recognition system integrated with binary sentiment classification</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Developed auxiliary model analyzing Fourier transform of call audio for holistic emotional sentiment classification</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">AI Medical Coding Research</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Implemented RAC (Read, Attend, and Code) architecture with Wave2Vec and n-gram convolution for medical records</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Developed custom attention block schema to optimize information extraction from inputs and outputs</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Created custom variants of Google BigBird and Longformers models fixing Q tensors in the QK=V attention schema.  <button onClick={() => setIsUnderperformDialogOpen(true)} className="text-lg text-[hsl(var(--primary))] hover:underline font-vt323">Why did these underperform?</button></li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Internal Development</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Created automated LLM powered QA review that would allow an organization to forego real-time listening of service rep calls, allow strategic managerial styles to be "embedded" to the review, and created a front end system that allowed for easy auditing</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Prototyped a suite of tools that mimicked Microsoft CoPilot with Whisper transcription, LLM analysis of transcribed meetings, and created suggested JIRA tickets, tagged participants to action items, discussed unresolved issues, risk assessment, member involvement</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Generalized the above into a set of problem solving prompts - full stack protoypes were about ~30 minutes in dev</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-3 bg-muted/50 rounded-md transition-colors hover:bg-primary/10 overflow-hidden">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleExpand("professional2")}
                  >
                    <div>
                      <h4 className="font-vt323 text-3xl text-[hsl(var(--primary))]">Data Analyst</h4>
                      <p className="text-lg text-[hsl(var(--platform))] font-vt323">Liss Technologies Group, LLC (Jan 2019 - Jun 2023)</p>
                    </div>
                    {expandedItem === "professional2" ? (
                      <ChevronUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                  {expandedItem === "professional2" && (
                    <div className="mt-4 space-y-4">
                      <div className="p-3 bg-background rounded-md overflow-x-hidden">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Data Infrastructure</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Used Python to pull and push API data/metadata to IoT infrastructure</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Created Python data pipelines to scrape, prepare, and import data into SQLite database</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Developed Microsoft Access and SQL databases with graphical UIs for utility usage and inventory analysis</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Automation</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Developed VBA/ Python automation for accounting and billing tasks, saving ~60 hours of manual work per month</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Streamlined project management, sales contract tracking, and CRM functions via cost-effective Office365 solutions</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Analytics & Reporting</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Automated utility usage data analysis to aid property managers in maintenance allocation and cost recovery</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Designed an energy audit program with Energy Star's portfolio manager to identify energy-saving opportunities</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Tracked and analyzed company KPIs to maintain productivity and efficiency</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-3 bg-muted/50 rounded-md transition-colors hover:bg-primary/10 overflow-hidden">
                  <div 
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => handleExpand("professional3")}
                  >
                    <div>
                      <h4 className="font-vt323 text-3xl text-[hsl(var(--primary))]">Actuarial Analyst</h4>
                      <p className="text-lg text-[hsl(var(--platform))] font-vt323">CSG Actuarial (Jun 2015 - Dec 2017)</p>
                    </div>
                    {expandedItem === "professional3" ? (
                      <ChevronUp className="h-6 w-6 text-[hsl(var(--primary))]" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-[hsl(var(--primary))]" />
                    )}
                  </div>
                  {expandedItem === "professional3" && (
                    <div className="mt-4 space-y-4">
                      <div className="p-3 bg-background rounded-md overflow-x-hidden">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Actuarial Analysis</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Negotiated premium increases for Pre-Standardized, Standardized, and Modernized Medicare Supplement business</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Performed homegrown STAT and GAAP reserving processes using Microsoft SQL, Access, and Excel</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Developed claim costs using incidence rates found in peer reviewed journals and SOA studies</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Utilized claim costs to aid FSA in pricing Critical Illness, Dental/Vision, & Medicare Supplement plans</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Data Management</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Maintenance of experience databases, tracking policy exposure, loss ratio experience, actual to expected mortality</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Developed monthly experience reports to maintain active Medicare Supplement/Advantage blocks of business</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Performed raw data preparation and uploads to SQL and Access databases for a variety of clients and data formats</li>
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Performed homegrown gross premium and commission valuations and created deliverable reports highlighting trends</li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <p className="text-lg text-[hsl(var(--primary))] font-vt323">Market Analysis</p>
                            <ul className="list-disc ml-8 space-y-1">
                              <li className="text-lg text-[hsl(var(--foreground))] font-vt323">Analyzed competitors' plans (profit, expenses, loss ratios, sales) to inform expectations and achieve cohort goals</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            {selectedSection === "Academic History" && (
              <>
                <div className="space-y-4">
                  <div className="p-3 bg-background rounded-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-2 rounded-full text-[hsl(var(--primary))] w-16 h-16 flex items-center justify-center">
                        <img src="/uno_logo.jpg" alt="UNO Logo" className="w-full h-full object-contain rounded-full" />
                      </div>
                      <div>
                        <h5 className="font-vt323 text-3xl text-[hsl(var(--primary))]">University of Nebraska at Omaha</h5>
                        <p className="text-lg text-[hsl(var(--platform))] font-vt323">Master of Science in Data Science</p>
                        <p className="text-lg text-[hsl(var(--muted-foreground))] font-vt323">Aug 2021 - May 2023</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-background rounded-md">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted p-2 rounded-full text-[hsl(var(--primary))] w-16 h-16 flex items-center justify-center">
                        <img src="/unl_logo.jpg" alt="UNL Logo" className="w-full h-full object-contain rounded-full" />
                      </div>
                      <div>
                        <h5 className="font-vt323 text-3xl text-[hsl(var(--primary))]">University of Nebraska-Lincoln</h5>
                        <p className="text-lg text-[hsl(var(--platform))] font-vt323">Bachelor of Business Administration in Actuarial Science</p>
                        <p className="text-lg text-[hsl(var(--muted-foreground))] font-vt323">Aug 2011 - May 2015</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Featured papers */}
        <div className="bg-card border-2 border-[hsl(var(--primary))] rounded-md overflow-hidden p-6 mb-12 pixel-corners">
          <h2 className="font-vt323 text-2xl md:text-3xl text-[hsl(var(--primary))] mb-6">Official Research</h2>
          <div className="space-y-6">
            {featuredPapers.map((paper) => (
              <div key={paper.id} className="p-4 bg-muted/50 rounded-md hover:bg-muted transition-colors">
                <h4 className="font-vt323 text-2xl md:text-3xl text-[hsl(var(--primary))] mb-2 w-full break-words">{paper.title}</h4>
                <div className="flex justify-between items-start gap-4">
                  <p className="text-lg text-[hsl(var(--foreground))] font-vt323">{paper.abstract}</p>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="bg-gradient-to-r from-[hsl(var(--platform))] to-[hsl(var(--primary))] hover:from-[hsl(var(--platform)_/_90%)] hover:to-[hsl(var(--primary)_/_90%)] whitespace-nowrap"
                    onClick={() => window.open('https://github.com/slyyyle/Audio-Benchmarking-Graduate-Thesis', '_blank')}
                  >
                    View Repo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Scientist Dialog */}
      {isDataScientistDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-xl shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="text-base font-bold text-white font-vt323">Actual Photo of Data Scientist</h2>
              <button
                onClick={() => setIsDataScientistDialogOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="relative w-full h-[400px]">
                <img
                  src="/big_data.jpg"
                  alt="Data Science Visualization"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RAG Dialog */}
      {isRagDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-xl shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="text-base font-bold text-white font-vt323">RAG = AI Librarian</h2>
              <button
                onClick={() => setIsRagDialogOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="relative w-full h-[400px]">
                <img
                  src="/rag.jpg"
                  alt="RAG Visualization"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Underperform Dialog */}
      {isUnderperformDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-xl shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="text-base font-bold text-white font-vt323">Why did this underperform?</h2>
              <button
                onClick={() => setIsUnderperformDialogOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-white">For one, extreme sparse tail multilabel classification remains an active and extremely difficult research area. How does one draw patterns where no data exists? AI Medical Coding is a race 3M will win anyways. Yes, the stapler people.</p>
              <br />
              <p className="text-white">Ignoring difficulty, long context document analysis was challenging with a 4096-token window. Inpatient medical records are long, contextual, and messy—ranging from 100 to 100,000 words with inconsistent headers. MIMIC public data was our only option.  It was mostly inpatient data - which is much more difficult than outpatient.</p>
              <br />
              <p className="text-white">Google BigBird and Longformers were able to ingest long documents using sparse attention to extend context windows. The idea was to mimic current research and fix the Query in the Attention blocks to an embedding of the output space—ICD codes and their definitions.</p>
              <br />
              <p className="text-white">In practice, fixing the Query aligned with theory, but due to block sparse attention and complications with each model's pretrained state, performance matched SOTA but did not exceed it. This indicated room for specialized solutions. I emulated SOTA's specific n-gram creation in Word2Vec, though I believe the key difference is the model architecture.</p>
              <br />
              <p className="text-white">The SOTA solution used a CNN, which allows for careful convolution of the input space, unlike block sparse attention that indirectly learns patterns through a limited global token set. We needed the Query to act like a magnifying glass—an "open note test." Block sparse attention on an unseen Query caused fine-tuning to create "holes" in the answer key. Full attention was computationally prohibitive.</p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbulb Moment Dialog */}
      {isLightbulbDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-xl shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="text-base font-bold text-white font-vt323">Me Realizing APIs Don't Mean Internet</h2>
              <button
                onClick={() => setIsLightbulbDialogOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/d6uN9xYUMxE?si=oqaq_JaoIXvWGAqT&amp;start=14" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Are We Clear Dialog */}
      {isAreWeClearDialogOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-xl shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="text-base font-bold text-white font-vt323">Fill in the L's for me</h2>
              <button
                onClick={() => setIsAreWeClearDialogOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/d9sS7PNkcuo?si=xfwj-m3M8yMVAU6Z&amp;start=16" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full aspect-video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </main>
  )
} 