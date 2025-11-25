import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Colors defined inline to avoid Tailwind config issues
  const colors = {
    pink: '#e84a8a',
    pinkDark: '#c93d75',
    pinkLight: '#fdf2f6',
    cream: '#fdfbf9',
    charcoal: '#2d2a32',
    peach: '#fff0e6',
    lavender: '#f3eefa',
    mint: '#e8f6f1',
    purple: '#8b5fa8',
    orange: '#e07849',
    teal: '#3a9a85',
  };

  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: colors.cream, color: colors.charcoal }}>
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
        style={{ backgroundColor: scrolled ? `${colors.cream}f2` : 'transparent', backdropFilter: scrolled ? 'blur(8px)' : 'none' }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="font-serif text-2xl hover:opacity-70 transition-opacity">
              chloe<span style={{ color: colors.pink }}></span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Work', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
        {/* Soft gradient blobs */}
        <div 
          className="absolute top-24 right-[10%] w-80 h-80 rounded-full blur-3xl opacity-40"
          style={{ backgroundColor: colors.pink }}
        />
        <div 
          className="absolute bottom-24 left-[5%] w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: '#ffd4b8' }}
        />
        <div 
          className="absolute top-1/2 right-[25%] w-64 h-64 rounded-full blur-3xl opacity-25"
          style={{ backgroundColor: '#e2d4f0' }}
        />
        
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-[1fr,auto] gap-12 items-center">
            <div>
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{ backgroundColor: `${colors.pink}15` }}
              >
                <span 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: colors.pink }}
                />
                <span className="text-sm font-medium" style={{ color: colors.pink }}>
                  Starting Master's at LSU — Jan 2026
                </span>
              </div>
              
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.1] mb-6">
                Hi! I'm Chloe
                <span style={{ color: colors.pink }}>—</span><br />
                full-stack developer<br />
                & ML engineer<span style={{ color: colors.pink }}>.</span>
              </h1>
              
              <p className="text-lg leading-relaxed mb-8 max-w-lg opacity-70">
                CS senior at LSU focused on building AI-powered applications. 
                I like hackathons, clean code, and making data do useful things.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:cgray39@lsu.edu"
                  className="px-6 py-3 text-white rounded-full font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: colors.pink }}
                >
                  Get in touch
                </a>
                <a
                  href="https://github.com/chloegray2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-white rounded-full font-medium transition-all hover:opacity-80"
                  style={{ backgroundColor: colors.charcoal }}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/chloegray-cs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-medium transition-all border-2 hover:border-current"
                  style={{ borderColor: `${colors.charcoal}30`, color: colors.charcoal }}
                  onMouseEnter={(e) => { e.target.style.borderColor = colors.pink; e.target.style.color = colors.pink; }}
                  onMouseLeave={(e) => { e.target.style.borderColor = `${colors.charcoal}30`; e.target.style.color = colors.charcoal; }}
                >
                  LinkedIn
                </a>
              </div>
            </div>
            
            {/* Avatar card */}
            <div className="hidden lg:block relative">
              <div 
                className="w-72 h-72 rounded-[48px] rotate-6 shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${colors.pink}, #ffd4b8, #e2d4f0)` }}
              />
              <div 
                className="absolute inset-3 rounded-[40px] -rotate-3 flex items-center justify-center shadow-inner"
                style={{ backgroundColor: colors.cream }}
              >
                <span className="font-serif text-7xl" style={{ color: colors.pink }}>CG</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span 
                className="font-medium text-sm tracking-wider uppercase"
                style={{ color: colors.pink }}
              >
                About
              </span>
              <h2 className="font-serif text-4xl mt-2 mb-6">
                A bit about me
              </h2>
              <div className="space-y-4 opacity-70 leading-relaxed">
                <p>
                  I'm a senior at <strong className="opacity-100">Louisiana State University</strong> studying 
                  Computer Science with a concentration in Data Science & Analytics, plus a math minor.
                </p>
                <p>
                  My path into tech started with building websites, evolved into machine learning, 
                  and now I spend most of my time working with LLMs and AI applications. I'm drawn to 
                  problems where software can genuinely make things better.
                </p>
                <p>
                  Outside of class, I'm involved with Women in Computer Science and usually have 
                  at least one side project going.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Education card */}
              <div 
                className="rounded-3xl p-8"
                style={{ backgroundColor: colors.cream, border: `1px solid ${colors.charcoal}10` }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl"
                    style={{ backgroundColor: `${colors.pink}15` }}
                  >
                    🎓
                  </div>
                  <div>
                    <h3 className="font-serif text-xl">Louisiana State University</h3>
                    <p className="opacity-70">B.S. Computer Science — Data Science & Analytics</p>
                    <p className="text-sm opacity-50 mt-1">Math Minor · December 2025</p>
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '4x', label: "Dean's List", bg: colors.pinkLight, color: colors.pink },
                  { value: '1st', label: 'Place Hackathon', bg: colors.lavender, color: colors.purple },
                  { value: '1000+', label: 'Platform Users', bg: colors.peach, color: colors.orange },
                  { value: '10K+', label: 'Data Points Analyzed', bg: colors.mint, color: colors.teal },
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="rounded-2xl p-5 text-center"
                    style={{ backgroundColor: stat.bg }}
                  >
                    <p className="font-serif text-3xl" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="text-sm opacity-60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="work" className="py-24" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          <span 
            className="font-medium text-sm tracking-wider uppercase"
            style={{ color: colors.pink }}
          >
            Experience
          </span>
          <h2 className="font-serif text-4xl mt-2 mb-12">
            Work history
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Software Developer Intern',
                company: 'MikeGPT — LSU AI Lab',
                date: 'July 2025 — Present',
                color: colors.pink,
                bg: `${colors.pink}15`,
                points: [
                  'Contributing to MikeGPT, a secure LLM platform used by 1,000+ LSU faculty and staff',
                  'Building features with React, Django, REST APIs, and Azure',
                  'Working in agile sprints with cross-functional teams'
                ]
              },
              {
                title: 'LLM Contractor',
                company: 'Entergy × LSU',
                date: 'Aug — Dec 2025',
                color: colors.purple,
                bg: colors.lavender,
                points: [
                  'Built full-stack HR analytics platform with PostgreSQL, Python, and React',
                  'Applied NLP (TF-IDF) and clustering (DBSCAN) to analyze 3,000+ job descriptions',
                  'Created AI career roadmap system using 10+ years of employee data'
                ]
              },
              {
                title: 'Research Assistant',
                company: 'LSU Data Science Research',
                date: 'Jan — Dec 2025',
                color: colors.teal,
                bg: colors.mint,
                points: [
                  'Analyzed 10,000+ data points evaluating VR impact on students with ADHD',
                  'Handled data cleaning, preprocessing, and visualization at scale',
                  'Applied statistical and ML techniques to extract insights'
                ]
              },
              {
                title: 'Data Center Management',
                company: 'Bullish Mining',
                date: '2021 — 2023, 2025+',
                color: colors.orange,
                bg: colors.peach,
                points: [
                  'Built and maintained high-performance computing systems',
                  'Weekly maintenance across 25 machines at 3 locations',
                  'Optimized performance to prevent hardware failures'
                ]
              }
            ].map((job, i) => (
              <div 
                key={i} 
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow"
                style={{ borderLeft: `4px solid ${job.color}` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-serif text-xl">{job.title}</h3>
                    <p className="opacity-60">{job.company}</p>
                  </div>
                  <span 
                    className="text-sm px-4 py-1.5 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: job.bg, color: job.color }}
                  >
                    {job.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 opacity-70">
                      <span style={{ color: colors.pink }} className="mt-0.5">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <span 
            className="font-medium text-sm tracking-wider uppercase"
            style={{ color: colors.pink }}
          >
            Projects
          </span>
          <h2 className="font-serif text-4xl mt-2 mb-12">
            Selected work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* FiscalFocus - Featured */}
            <div
              className="md:col-span-2 rounded-3xl overflow-hidden bg-white"
            >
              <div className="grid md:grid-cols-[1fr,1.2fr] gap-0">
                {/* Image side */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/hackathon1.jpeg"
                    alt="FiscalFocus Hackathon"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 0%, ${colors.pink}15 100%)` }}
                  />
                </div>

                {/* Content side */}
                <div
                  className="p-8 md:p-12 relative"
                  style={{ background: `linear-gradient(135deg, ${colors.pinkLight}, ${colors.peach})` }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1 text-white text-xs font-medium rounded-full"
                      style={{ backgroundColor: colors.pink }}
                    >
                      1st Place
                    </span>
                    <span
                      className="px-3 py-1 text-white text-xs font-medium rounded-full"
                      style={{ backgroundColor: colors.charcoal }}
                    >
                      Best Technical
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl mb-2">FiscalFocus</h3>
                  <p className="opacity-60 mb-4">GeauxCash Hackathon · March 2025</p>
                  <p className="opacity-70 leading-relaxed mb-6">
                    Financial analysis platform with ML-powered stock prediction, risk assessment,
                    and goal tracking. Built in 48 hours, won first place out of 180+ participants.
                    Integrated SEC filings and real-time market data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'React', 'ML', 'SEC Data', 'REST APIs'].map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-full"
                        style={{ backgroundColor: 'rgba(255,255,255,0.6)', color: `${colors.charcoal}aa` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CarbonSight - Featured */}
            <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white">
              <div className="grid md:grid-cols-[1.2fr,1fr] gap-0">
                {/* Image side */}
                <div className="relative h-80 md:h-auto">
                  <img
                    src="/nexus1.jpeg"
                    alt="CarbonSight Project"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 22%' }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to bottom, transparent 0%, ${colors.mint}30 100%)` }}
                  />
                </div>

                {/* Content side */}
                <div
                  className="p-8 md:p-12 relative"
                  style={{ background: `linear-gradient(135deg, ${colors.mint}, #b8e6d5)` }}
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="px-3 py-1 text-white text-xs font-medium rounded-full"
                      style={{ backgroundColor: colors.teal }}
                    >
                      Finalist
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl mb-2">CarbonSight</h3>
                  <p className="opacity-60 mb-4">Nexus LA DevDays · Aug — Dec 2025</p>
                  <p className="opacity-70 leading-relaxed mb-6">
                    Environmental compliance dashboard integrating Climate TRACE satellite data.
                    Built 3 specialized portals (company, public, and regulator dashboards) with
                    an AI recommendation engine for sustainability initiatives. Advanced to competition
                    finals with live demo and compliance monitoring system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Climate Data', 'Multi-Portal Dashboard', 'AI Recommendations', 'Compliance Tracking'].map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-sm rounded-full"
                        style={{ backgroundColor: 'rgba(255,255,255,0.6)', color: `${colors.charcoal}aa` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24" style={{ backgroundColor: colors.cream }}>
        <div className="max-w-6xl mx-auto px-6">
          <span 
            className="font-medium text-sm tracking-wider uppercase"
            style={{ color: colors.pink }}
          >
            Skills
          </span>
          <h2 className="font-serif text-4xl mt-2 mb-12">
            Technical skills
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Languages', items: ['Python', 'SQL', 'Java', 'C/C++', 'C#', 'MATLAB'], color: colors.pink },
              { title: 'Web & Cloud', items: ['React', 'TypeScript', 'Tailwind', 'Azure', 'AWS', 'Firebase'], color: colors.purple },
              { title: 'ML & Data', items: ['TensorFlow', 'Pandas', 'NumPy', 'Jupyter', 'OpenAI API'], color: colors.teal },
              { title: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Jira', 'PyCharm'], color: colors.orange },
            ].map((category, i) => (
              <div key={i} className="bg-white rounded-3xl p-6">
                <h3 className="font-medium mb-4" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map(item => (
                    <li key={item} className="opacity-70">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-white relative overflow-hidden" style={{ backgroundColor: colors.charcoal }}>
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: colors.pink }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: '#e2d4f0' }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="max-w-2xl">
            <span 
              className="font-medium text-sm tracking-wider uppercase"
              style={{ color: colors.pink }}
            >
              Contact
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mt-2 mb-6">
              Let's connect
            </h2>
            <p className="text-white/60 text-lg mb-10">
              I'm starting my Master's in Computer Science at LSU in January 2026.
              Feel free to reach out about research, projects, or just to say hi.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:cgray39@lsu.edu"
                className="px-8 py-4 text-white rounded-full font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: colors.pink }}
              >
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/chloegray-cs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-medium transition-all hover:border-white/50"
              >
                LinkedIn
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 text-white/50">
              <a href="mailto:cgray39@lsu.edu" className="transition-colors" style={{ ':hover': { color: colors.pink } }}
                onMouseEnter={(e) => e.target.style.color = colors.pink}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                cgray39@lsu.edu
              </a>
              <a href="tel:+17692041022" className="transition-colors"
                onMouseEnter={(e) => e.target.style.color = colors.pink}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.5)'}
              >
                (769) 204-1022
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10" style={{ backgroundColor: colors.charcoal }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>Built with React & Tailwind</p>
            <p>© 2025 Chloe Gray</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;