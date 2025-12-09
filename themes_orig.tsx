import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { 
  Menu, X, ArrowRight, 
  Bot, Code2, Settings, Lightbulb, 
  Search, Wand2, Rocket, 
  Users, MessageSquare, Shield, Zap, 
  CheckCircle2, 
  Sun, Moon, Monitor,
  Database, Server, Globe, Cpu, Cloud
} from 'lucide-react';

/* --- TYPES & INTERFACES --- */

interface NavLink {
  name: string;
  value: string;
}

interface ServiceData {
  title: string;
  icon: React.ReactElement;
  description: string;
  capabilities: string[];
  target: string;
}

interface CaseStudyData {
  title: string;
  industry: string;
  problem: string;
  solution: string;
  outcome: string;
  tags: string[];
}

interface BlogPostContent {
  type: 'h3' | 'p';
  text: string;
}

interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: BlogPostContent[];
}

interface NavigateFunction {
  (page: string): void;
}

/* --- UTILS & HOOKS --- */

const useOnScreen = (ref: React.RefObject<HTMLDivElement>, rootMargin: string = "0px"): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (element) observer.unobserve(element);
        }
      },
      { rootMargin }
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};

/* --- ANIMATION COMPONENTS --- */

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(ref, "-50px");
  const style = { transitionDelay: `${delay}ms` };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out transform ${
        onScreen 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
};

/* --- DATA & CONTENT --- */

const NAV_LINKS: NavLink[] = [
  { name: 'Home', value: 'home' },
  { name: 'About', value: 'about' },
  { name: 'Services', value: 'services' },
  { name: 'Work', value: 'work' },
  { name: 'Blog', value: 'blog' },
  { name: 'Contact', value: 'contact' },
];

const SERVICES: ServiceData[] = [
  {
    title: "AI & Automation",
    icon: <Bot className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Stop doing the same manual tasks over and over. We build intelligent automation that actually saves time.",
    capabilities: ["Workflow automation", "AI agents", "Data pipelines & ETL", "Intelligent dashboards", "Document processing"],
    target: "Ops teams, Agencies, SaaS companies"
  },
  {
    title: "Web & App Development",
    icon: <Code2 className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Fast, reliable websites and apps. No bloat, no month-long delays.",
    capabilities: ["Marketing websites", "Web applications (SaaS)", "Mobile-responsive design", "Performance optimization", "CMS integration"],
    target: "Startups, SMEs, Agencies"
  },
  {
    title: "Systems Integration",
    icon: <Settings className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Your tools should talk to each other. We make that happen without the mess.",
    capabilities: ["API development", "CRM/billing connections", "Third-party integrations", "Webhook setup", "Legacy modernization"],
    target: "SMEs, Enterprises, Tech teams"
  },
  {
    title: "Product Strategy",
    icon: <Lightbulb className="w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" />,
    description: "Not sure what to build, buy, or fix? We help you figure it out.",
    capabilities: ["Technical audits", "Build vs buy analysis", "Roadmap planning", "Tech stack evaluation", "Process optimization"],
    target: "Founders, CTOs, Product teams"
  }
];

const CASE_STUDIES: CaseStudyData[] = [
  {
    title: "Reduced manual ops by 60% with custom automation",
    industry: "B2B SaaS",
    problem: "Customer onboarding required 10+ manual steps across 4 different tools.",
    solution: "Built a unified onboarding dashboard with automated workflows connecting Stripe, HubSpot, and internal systems.",
    outcome: "60% reduction in onboarding time, freed up 15 hours/week for the ops team.",
    tags: ["Automation", "API Integration", "Dashboard"]
  },
  {
    title: "Modernized legacy inventory system without downtime",
    industry: "Regional Grocery Chain",
    problem: "15-year-old inventory system couldn't scale, but they couldn't afford to shut down during migration.",
    solution: "Built a new API-first system that ran in parallel with the old one, gradually migrated data, trained staff in phases.",
    outcome: "Zero downtime migration, 40% faster stock updates, integrated with new suppliers.",
    tags: ["Systems Integration", "Legacy Modernization"]
  },
  {
    title: "Built real-time tracking portal in 6 weeks",
    industry: "Logistics & Delivery",
    problem: "Customers constantly calling for package status updates, support team overwhelmed.",
    solution: "Developed a customer-facing tracking portal with SMS notifications and API integration to their dispatch system.",
    outcome: "75% drop in support calls, customers can track shipments in real-time.",
    tags: ["Web App", "Real-time", "SMS Integration"]
  },
  {
    title: "Automated client reporting across 6 platforms",
    industry: "Marketing Agency",
    problem: "Team spent 20+ hours/month manually pulling data from Google Ads, Meta, Analytics, and other platforms.",
    solution: "Built an automated reporting system that pulls data from all platforms, generates custom reports, and sends them on schedule.",
    outcome: "Reporting time reduced from 20 hours to 2 hours/month, more consistent data.",
    tags: ["Automation", "Data Pipeline", "Reporting"]
  }
];

const BLOG_POSTS: BlogPostData[] = [
  {
    slug: "when-to-use-ai",
    title: "When to use AI automation vs hiring more people",
    date: "November 15, 2025",
    tags: ["Automation", "Strategy", "AI"],
    description: "Not every problem needs more headcount. Here's how to figure out when automation makes sense and when it doesn't.",
    content: [
      { type: 'p', text: "The question comes up all the time: should we hire someone to do this, or should we automate it? The answer isn't always obvious. Hiring feels safer. Automation feels like a gamble." },
      { type: 'h3', text: "When automation makes sense" },
      { type: 'p', text: "Automation is a good fit when the task is repetitive and predictable. If you can document the steps clearly, you can probably automate it. It's perfect for high-volume, low-complexity tasks like moving data between tools." },
      { type: 'h3', text: "When hiring makes more sense" },
      { type: 'p', text: "Hiring is better when the task requires judgment. If every situation is different and needs human decision-making, automation won't cut it. Also, if the task involves relationships (Sales, Customer Success), you need humans." },
      { type: 'h3', text: "The hybrid approach" },
      { type: 'p', text: "Most of the time, the answer isn't 'automate everything' or 'hire a team.' It's a mix. Automate the data entry, hire someone to analyze the results." },
      { type: 'h3', text: "Our advice" },
      { type: 'p', text: "Start small. Pick one painful, repetitive task. Automate that. See if it works. If it saves time and doesn't create new headaches, do another one." }
    ]
  },
  {
    slug: "rewrite-system",
    title: "What we look at before rewriting a system",
    date: "October 22, 2025",
    tags: ["Engineering", "Strategy", "Systems"],
    description: "Rewrites are tempting. They're also risky and expensive. Here's how we decide if it's worth it.",
    content: [
      { type: 'p', text: "Every engineer has been there: you inherit a legacy system, look at the code, and think 'we should just rewrite this.' Sometimes that's true. Often it's not. Rewrites are expensive, slow, and risky." },
      { type: 'h3', text: "Questions we ask before recommending a rewrite" },
      { type: 'p', text: "1. What's actually broken? Be specific. 'The code is messy' isn't a good enough reason.\n2. Can we fix it incrementally? Most systems can be improved piece by piece.\n3. Do you understand why the old system is the way it is? Legacy code usually looks weird for a reason." },
      { type: 'h3', text: "When we do recommend a rewrite" },
      { type: 'p', text: "We'll recommend a rewrite when the system is genuinely holding you back, fixing it incrementally would cost more than starting over, and the team is committed." },
      { type: 'h3', text: "The alternative: strategic replacement" },
      { type: 'p', text: "Instead of a big-bang rewrite, we often recommend a strategic replacement. Build a new system alongside the old one. Migrate one feature at a time." }
    ]
  },
  {
    slug: "small-team",
    title: "Keeping a small, senior team on purpose",
    date: "September 10, 2025",
    tags: ["Team", "Philosophy", "Business"],
    description: "We're not trying to scale to 50 people. Here's why staying small is a feature, not a limitation.",
    content: [
      { type: 'p', text: "We get asked all the time: 'When are you going to scale up?' The answer is: we're not. We're staying small on purpose." },
      { type: 'h3', text: "Why small teams work better" },
      { type: 'p', text: "Big teams have overhead. Lots of it. You need managers to manage managers. Small teams move faster. Fewer people means less coordination, less miscommunication." },
      { type: 'h3', text: "Why we only hire senior people" },
      { type: 'p', text: "When you hire us, you're paying for experience. You're paying for people who've already made the mistakes and learned from them. You're not paying for us to train someone on your project." },
      { type: 'h3', text: "What this means for clients" },
      { type: 'p', text: "When you work with us, you get direct access to the people building your product and fast decision-making. You don't get unlimited capacity or rock-bottom pricing." }
    ]
  },
  {
    slug: "build-vs-buy",
    title: "How we decide what to build vs buy",
    date: "August 5, 2025",
    tags: ["Strategy", "Tools", "Decision-making"],
    description: "Should you build a custom solution or use an off-the-shelf tool? Here's our framework for making that call.",
    content: [
      { type: 'p', text: "One of the most common questions we get: 'Should we build this ourselves or just use [insert SaaS tool]?' The answer is almost always: it depends." },
      { type: 'h3', text: "When to buy" },
      { type: 'p', text: "Off-the-shelf tools are great when the problem is generic (email marketing, accounting) and speed matters more than customization." },
      { type: 'h3', text: "When to build" },
      { type: 'p', text: "Building makes sense when your workflow is unique, integration is critical, or you're doing something at scale where SaaS pricing becomes prohibitive." },
      { type: 'h3', text: "Our advice" },
      { type: 'p', text: "Default to buying. Most problems aren't unique enough to justify custom software. But if you're constantly fighting your tools, it might be time to build." }
    ]
  }
];

/* --- COMPONENTS --- */

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('auto');

  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;
      const isDark = theme === 'dark' || (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    applyTheme();

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'auto') applyTheme();
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const cycleTheme = () => {
    if (theme === 'auto') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('auto');
  };

  return (
    <button 
      onClick={cycleTheme}
      className="p-2 rounded-full text-slate-500 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] hover:bg-slate-100 dark:hover:bg-[#111835] transition-colors"
      title={`Current theme: ${theme}`}
    >
      {theme === 'light' && <Sun className="w-5 h-5" />}
      {theme === 'dark' && <Moon className="w-5 h-5" />}
      {theme === 'auto' && <Monitor className="w-5 h-5" />}
    </button>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseClasses = "inline-flex items-center px-6 py-3 border text-[15px] font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] transform active:scale-95 tracking-tight";
  
  const variants = {
    primary: "border-transparent text-white bg-[#1A3CE4] hover:bg-[#1530b5] hover:shadow-lg hover:shadow-[#1A3CE4]/30 dark:text-[#0A0F2C] dark:bg-[#4FD3FF] dark:hover:bg-[#3dc0ea] dark:hover:shadow-[#4FD3FF]/30",
    secondary: "border-slate-300 text-[#1A3CE4] hover:bg-slate-50 hover:border-[#1A3CE4] dark:border-slate-700 dark:text-[#4FD3FF] dark:hover:bg-[#111835] dark:hover:border-[#4FD3FF]",
    text: "border-transparent text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] px-0 py-0"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ eyebrow, title, description, align = "left" }) => (
  <FadeIn className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    {eyebrow && <span className="text-[#1A3CE4] dark:text-[#4FD3FF] font-semibold tracking-wide uppercase text-[11px] mb-3 block">{eyebrow}</span>}
    <h2 className="text-3xl md:text-5xl font-[700] text-[#0A0F2C] dark:text-white tracking-tighter leading-tight">{title}</h2>
    {description && <p className="mt-5 text-[19px] md:text-[21px] text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed tracking-normal font-normal">{description}</p>}
  </FadeIn>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`group bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#1A3CE4]/30 dark:hover:border-[#4FD3FF]/30 dark:hover:shadow-[#000000]/50 ${className}`}>
    {children}
  </div>
);

const TechTicker: React.FC = () => (
  <div className="w-full overflow-hidden bg-slate-50 dark:bg-[#080c24] border-y border-slate-200 dark:border-slate-800 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">Powering Next-Gen Systems With</p>
    </div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Cpu className="w-6 h-6"/> AI/ML Models</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Cloud className="w-6 h-6"/> AWS Cloud</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Code2 className="w-6 h-6"/> React & Next.js</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Database className="w-6 h-6"/> PostgreSQL</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Server className="w-6 h-6"/> Node.js</div>
       <div className="flex items-center gap-2 text-lg font-semibold text-slate-600 dark:text-slate-300 tracking-tight"><Globe className="w-6 h-6"/> Edge Networks</div>
    </div>
  </div>
);

/* --- PAGES --- */

interface PageProps {
  navigate: NavigateFunction;
}

const Home: React.FC<PageProps> = ({ navigate }) => (
  <div className="space-y-0">
    <section className="relative pt-32 pb-40 overflow-hidden bg-white dark:bg-[#0A0F2C]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1A3CE4]/10 dark:bg-[#4FD3FF]/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
        <FadeIn delay={100}>
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#1A3CE4]/30 dark:border-[#4FD3FF]/30 bg-[#1A3CE4]/5 dark:bg-[#4FD3FF]/5 text-[#1A3CE4] dark:text-[#4FD3FF] text-[11px] font-bold tracking-wide mb-8 backdrop-blur-sm uppercase">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1A3CE4] dark:bg-[#4FD3FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1A3CE4] dark:bg-[#4FD3FF]"></span>
            </span>
            AI, Automation & Product Engineering
          </div>
        </FadeIn>
        
        <FadeIn delay={200}>
          <h1 className="text-5xl md:text-[5.5rem] font-[800] text-[#0A0F2C] dark:text-white tracking-tighter mb-8 leading-[1.05]">
            Calm systems for <br className="hidden md:block" />
            teams that <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1A3CE4] to-[#705df2] dark:from-[#4FD3FF] dark:to-[#4f8bff]">hate chaos.</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-[20px] md:text-[24px] text-slate-600 dark:text-slate-400 max-w-3xl mb-12 leading-relaxed md:mx-0 mx-auto tracking-tight font-normal">
            MARVONIX helps companies automate workflows, ship better software, and scale without the mess. You get direct access to engineers who actually ship.
          </p>
        </FadeIn>
        
        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <Button onClick={() => navigate('contact')}>
              Start a Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" onClick={() => navigate('work')}>
              View Our Work
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-500 text-[13px] font-semibold border-t border-slate-200 dark:border-slate-800 pt-8 max-w-4xl tracking-wide uppercase">
            <div className="flex items-center justify-center md:justify-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[#1A3CE4] dark:text-[#4FD3FF]" /> Fast delivery & No bloat</div>
            <div className="flex items-center justify-center md:justify-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[#1A3CE4] dark:text-[#4FD3FF]" /> Senior-level Engineering</div>
            <div className="flex items-center justify-center md:justify-start"><CheckCircle2 className="w-5 h-5 mr-3 text-[#1A3CE4] dark:text-[#4FD3FF]" /> Long-term Scalability</div>
          </div>
        </FadeIn>
      </div>
    </section>

    <TechTicker />

    <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle 
        eyebrow="What we do" 
        title="Services built around what you actually need."
        description="We don't sell packages. We solve complex engineering problems."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((service, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <Card className="h-full">
              <div className="bg-slate-50 dark:bg-[#0F163A]/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700/50">
                {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#1A3CE4] dark:text-[#4FD3FF]" })}
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-[15px]">{service.description}</p>
              <ul className="space-y-3">
                {service.capabilities.slice(0, 3).map((cap, i) => (
                  <li key={i} className="flex items-start text-[14px] font-medium text-slate-500 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 bg-[#1A3CE4] dark:bg-[#4FD3FF] rounded-full mt-2 mr-3"></span>
                    {cap}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Button variant="secondary" onClick={() => navigate('services')}>View all services</Button>
      </div>
    </section>

    <section className="bg-slate-50 dark:bg-[#080c24] py-32 border-y border-slate-200 dark:border-slate-800 transition-colors relative overflow-hidden">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-200/50 dark:from-[#1A3CE4]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle 
          eyebrow="How we work" 
          title="A process that doesn't get in your way."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
          {[
            { step: "01", title: "Discover", icon: Search, desc: "We dig into what you're trying to fix, what's slowing you down, and where automation helps." },
            { step: "02", title: "Design & Build", icon: Wand2, desc: "We prototype fast, ship iteratively, and keep you in the loop. No disappearing for months." },
            { step: "03", title: "Launch & Iterate", icon: Rocket, desc: "We help you deploy, monitor, and refine. Real support when you scale." }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 150}>
              <div className="relative p-6">
                {idx !== 2 && <div className="hidden md:block absolute top-12 left-full w-full h-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-8"></div>}
                
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#111835] border-2 border-[#1A3CE4]/20 dark:border-[#4FD3FF]/20 flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-[#1A3CE4]/5">
                  <span className="font-bold text-[#1A3CE4] dark:text-[#4FD3FF]">{item.step}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <SectionTitle 
            eyebrow="Why MARVONIX" 
            title="What makes us different."
            description="We're not trying to be the biggest. We're trying to be the most useful."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: Users, title: "Direct access", desc: "No account managers. You work with the engineers." },
            { icon: MessageSquare, title: "Clear collab", desc: "Communication is efficient. Fewer meetings, more progress." },
            { icon: Shield, title: "Senior decisions", desc: "We're small on purpose. Everyone has built at scale." },
            { icon: Zap, title: "No overhead", desc: "We skip bureaucracy. Practical solutions that last." }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="bg-white dark:bg-[#111835] p-8 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors hover:border-[#1A3CE4]/30 dark:hover:border-[#4FD3FF]/30">
                <item.icon className="w-6 h-6 text-[#1A3CE4] dark:text-[#4FD3FF] mb-4" />
                <h4 className="font-bold text-[#0A0F2C] dark:text-white mb-2 text-lg tracking-tight">{item.title}</h4>
                <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
      <FadeIn>
        <div className="relative overflow-hidden bg-[#0A0F2C] rounded-3xl p-12 md:p-20 text-center border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A3CE4]/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4FD3FF]/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-[800] text-white mb-6 tracking-tighter">Have a project in mind?</h2>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-[18px] leading-relaxed">Let's make your systems less painful. Tell us what you're trying to fix, and we'll figure out the best way forward.</p>
            <Button onClick={() => navigate('contact')}>Start a Conversation</Button>
          </div>
        </div>
      </FadeIn>
    </section>
  </div>
);

const About: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <SectionTitle 
      eyebrow="About MARVONIX" 
      title="We're the engineers you wish were on your team."
      description="We started MARVONIX because too many good ideas get stuck in bad processes."
    />
    
    <FadeIn delay={200}>
      <div className="prose prose-lg max-w-none mb-24 dark:prose-invert">
        <h3 className="text-[#0A0F2C] dark:text-white font-bold text-2xl tracking-tight">What we believe</h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[18px]">
          Most software projects fail not because of technology, but because of process overhead, misaligned incentives, and teams that don't actually talk to each other.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[18px]">
          We think there's a better way. Small, senior teams. Direct communication. Clear priorities. No disappearing into the void for weeks at a time.
        </p>
      </div>
    </FadeIn>

    <h3 className="text-3xl font-[700] text-[#0A0F2C] dark:text-white mb-12 tracking-tight">How we operate</h3>
    <div className="grid gap-12">
      {[
        { title: "Small, on purpose", desc: "We don't scale by adding junior devs. Everyone on your project has built production systems before." },
        { title: "Long-term relationships", desc: "We're not chasing one-off gigs. We want to work with teams that care about their products long-term." },
        { title: "Clear communication", desc: "We communicate often but efficiently. Fewer meetings that could've been a message." },
        { title: "Engineering-first", desc: "Product decisions get made by engineers, not account managers. We care about technical debt." },
        { title: "Transparency", desc: "We'll tell you when something's slow or expensive. We won't promise the impossible." },
        { title: "Real support", desc: "Launch isn't the end. We help you monitor, debug, and refine." }
      ].map((principle, idx) => (
        <FadeIn key={idx} delay={idx * 100}>
          <div className="flex gap-6 border-b border-slate-100 dark:border-slate-800 pb-12 last:border-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1A3CE4]/10 dark:bg-[#4FD3FF]/10 flex items-center justify-center text-[#1A3CE4] dark:text-[#4FD3FF] font-bold text-sm border border-[#1A3CE4]/20 dark:border-[#4FD3FF]/20">
              {idx + 1}
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#0A0F2C] dark:text-white mb-3 tracking-tight">{principle.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[16px]">{principle.desc}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

const ServicesPage: React.FC<PageProps> = ({ navigate }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <SectionTitle 
      eyebrow="Services" 
      title="We solve problems. Here's how."
      description="No packages, no one-size-fits-all solutions. We figure out what you actually need and build that."
    />

    <div className="grid gap-12">
      {SERVICES.map((service, idx) => (
        <FadeIn key={idx} delay={idx * 100}>
          <div className="bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 transition-colors shadow-sm hover:shadow-xl hover:border-[#1A3CE4]/20 dark:hover:border-[#4FD3FF]/20">
            <div className="md:w-1/3">
              <div className="bg-slate-50 dark:bg-[#0F163A]/50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700/50">
                {React.cloneElement(service.icon, { className: "w-10 h-10 text-[#1A3CE4] dark:text-[#4FD3FF]" })}
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-[#1A3CE4] dark:text-[#4FD3FF] text-xs font-bold uppercase tracking-widest mb-2 opacity-80">Best For</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{service.target}</p>
            </div>
            <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-800 pt-8 md:pt-0 md:pl-12 flex flex-col justify-center">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed font-light">{service.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {service.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-[#1A3CE4] dark:text-[#4FD3FF] mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>

    <FadeIn delay={400}>
      <div className="mt-24 text-center bg-slate-50 dark:bg-[#080c24] p-16 rounded-3xl border border-slate-200 dark:border-slate-800 transition-colors">
        <h3 className="text-3xl font-bold text-[#0A0F2C] dark:text-white mb-4 tracking-tight">Not sure what you need?</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Tell us what's broken, slow, or painful in your current setup. We'll diagnose the issue together.</p>
        <Button onClick={() => navigate('contact')}>Start a Conversation</Button>
      </div>
    </FadeIn>
  </div>
);

const Work: React.FC<PageProps> = ({ navigate }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
    <SectionTitle 
      eyebrow="Selected Work" 
      title="Real problems we've solved."
      description="We can't share all the details (NDAs and such), but here's a look at the kind of work we do."
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {CASE_STUDIES.map((study, idx) => (
        <FadeIn key={idx} delay={idx * 100}>
          <Card className="flex flex-col h-full bg-slate-50 dark:bg-[#111835] border-0 ring-1 ring-slate-200 dark:ring-slate-800">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] font-bold text-[#1A3CE4] dark:text-[#4FD3FF] uppercase tracking-wider">{study.industry}</span>
              <span className="bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] px-3 py-1 rounded-full font-medium border border-slate-200 dark:border-slate-700">Case Study</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-6 leading-tight group-hover:text-[#1A3CE4] dark:group-hover:text-[#4FD3FF] transition-colors tracking-tight">{study.title}</h3>
            
            <div className="space-y-6 mb-8 flex-grow">
              <div className="bg-white dark:bg-[#0A0F2C]/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800/50">
                <span className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-wide block mb-2">The Challenge</span>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{study.problem}</p>
              </div>
              <div className="bg-white dark:bg-[#0A0F2C]/50 p-4 rounded-lg border border-slate-100 dark:border-slate-800/50">
                <span className="text-[#1A3CE4] dark:text-[#4FD3FF] font-bold text-xs uppercase tracking-wide block mb-2 opacity-80">The Solution</span>
                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{study.solution}</p>
              </div>
              <div>
                 <span className="text-[#0A0F2C] dark:text-white font-bold text-sm block mb-1">Result:</span>
                 <p className="text-slate-600 dark:text-slate-400 text-sm">{study.outcome}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-200 dark:border-slate-700 pt-6">
              {study.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[11px] font-semibold uppercase tracking-wide border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        </FadeIn>
      ))}
    </div>

    <FadeIn delay={400}>
      <div className="mt-24 text-center">
        <h3 className="text-3xl font-bold text-[#0A0F2C] dark:text-white mb-6 tracking-tight">Want results like these?</h3>
        <Button onClick={() => navigate('contact')}>Start a Project</Button>
      </div>
    </FadeIn>
  </div>
);

interface BlogProps {
  activePost: string | null;
  setActivePost: (slug: string | null) => void;
}

const Blog: React.FC<BlogProps> = ({ activePost, setActivePost }) => {
  if (activePost) {
    const post = BLOG_POSTS.find(p => p.slug === activePost);
    if (!post) return null;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <button onClick={() => setActivePost(null)} className="text-[#1A3CE4] dark:text-[#4FD3FF] hover:underline flex items-center mb-10 text-sm font-bold tracking-wide uppercase">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to all posts
        </button>
        <span className="text-slate-500 text-sm font-medium mb-4 block">{post.date}</span>
        <h1 className="text-3xl md:text-5xl font-[800] text-[#0A0F2C] dark:text-white mt-2 mb-8 leading-tight tracking-tighter">{post.title}</h1>
        <div className="flex gap-2 mb-16">
          {post.tags.map(tag => (
            <span key={tag} className="text-[11px] uppercase tracking-wide bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-full font-bold">{tag}</span>
          ))}
        </div>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.map((block, i) => {
            if (block.type === 'h3') return <h3 key={i} className="text-2xl font-bold text-[#0A0F2C] dark:text-white mt-12 mb-6 tracking-tight">{block.text}</h3>
            return <p key={i} className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-[18px]">{block.text}</p>
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <SectionTitle 
        eyebrow="Blog" 
        title="Thoughts on building better systems."
        description="No fluff. Just practical insights on automation, software development, and making technology work for you."
      />

      <div className="grid gap-10 mt-16">
        {BLOG_POSTS.map((post, idx) => (
          <FadeIn key={idx} delay={idx * 100}>
            <div 
              onClick={() => setActivePost(post.slug)}
              className="group cursor-pointer bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-2xl hover:border-[#1A3CE4]/40 dark:hover:border-[#4FD3FF]/40 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <span className="text-slate-500 text-sm font-medium mb-2 md:mb-0">{post.date}</span>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-[11px] uppercase tracking-wide bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-md border border-slate-100 dark:border-slate-700 font-bold">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-4 group-hover:text-[#1A3CE4] dark:group-hover:text-[#4FD3FF] transition-colors tracking-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-[16px]">{post.description}</p>
              <span className="text-[#1A3CE4] dark:text-[#4FD3FF] text-[13px] font-bold flex items-center tracking-wide uppercase">
                Read Post <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <SectionTitle 
            eyebrow="Contact" 
            title="Tell us what you're trying to fix."
            description="We usually reply within 1–2 business days. If it's urgent, mention that in your message."
          />
          
          <FadeIn delay={200}>
            <div className="bg-white dark:bg-[#111835] p-10 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors shadow-sm">
              <h4 className="text-[#0A0F2C] dark:text-white font-bold mb-8 text-xl tracking-tight">What happens next?</h4>
              <div className="space-y-8">
                {[
                  { title: "We respond", desc: "You'll hear from someone on our team within 1–2 business days." },
                  { title: "We ask questions", desc: "We'll dig into what you're trying to solve, your timeline, and your budget." },
                  { title: "We propose next steps", desc: "If we're a good fit, we'll set up a call or send a proposal." }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="text-[#1A3CE4] dark:text-[#4FD3FF] font-bold text-lg leading-none mt-1">{idx + 1}.</div>
                    <div>
                      <div className="text-[#0A0F2C] dark:text-white font-bold mb-2 text-lg tracking-tight">{step.title}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="bg-white dark:bg-[#111835] border border-slate-200 dark:border-slate-800 p-10 rounded-2xl h-fit transition-colors shadow-xl shadow-slate-200/50 dark:shadow-none">
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-[#1A3CE4]/10 dark:bg-[#4FD3FF]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                   <CheckCircle2 className="w-10 h-10 text-[#1A3CE4] dark:text-[#4FD3FF]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A0F2C] dark:text-white mb-2 tracking-tight">Message Received</h3>
                <p className="text-slate-600 dark:text-slate-400">We'll get back to you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')} 
                  className="mt-8 text-[#1A3CE4] dark:text-[#4FD3FF] hover:underline text-sm font-bold tracking-wide uppercase"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Name</label>
                  <input required type="text" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Email</label>
                  <input required type="email" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="jane@company.com" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Company</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="Acme Inc" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Budget</label>
                    <input type="text" className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="$10k+" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide text-[11px]">Message</label>
                  <textarea required rows={4} className="w-full bg-slate-50 dark:bg-[#0A0F2C] border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3.5 text-[#0A0F2C] dark:text-white focus:ring-2 focus:ring-[#1A3CE4] dark:focus:ring-[#4FD3FF] focus:border-transparent outline-none transition-all placeholder-slate-400 font-medium" placeholder="Tell us about your project..."></textarea>
                </div>
                <Button className="w-full justify-center text-lg h-14">
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

const Privacy: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 prose prose-lg dark:prose-invert">
    <h1 className="text-[#0A0F2C] dark:text-white font-[800] tracking-tighter">Privacy Policy</h1>
    <p className="text-slate-600 dark:text-slate-400 lead">Last Updated: 7 December 2025</p>
    <p className="text-slate-600 dark:text-slate-400">MARVONIX ("we", "us", or "our") respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Information we collect</h3>
    <p className="text-slate-600 dark:text-slate-400">When you use our website or contact us, we may collect: Contact information (Name, email), Project details, and Technical data (IP address, browser type).</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">How we use your information</h3>
    <p className="text-slate-600 dark:text-slate-400">We use your data to respond to inquiries, improve our services, and comply with legal obligations. We do not sell your data to third parties.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Contact us</h3>
    <p className="text-slate-600 dark:text-slate-400">If you have questions about this privacy policy, contact us at privacy@marvonix.com.</p>
  </div>
);

const Terms: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32 prose prose-lg dark:prose-invert">
    <h1 className="text-[#0A0F2C] dark:text-white font-[800] tracking-tighter">Terms & Conditions</h1>
    <p className="text-slate-600 dark:text-slate-400 lead">Last Updated: 7 December 2025</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Overview</h3>
    <p className="text-slate-600 dark:text-slate-400">These terms govern your use of the MARVONIX website and any services we provide. By using our site or engaging our services, you agree to these terms.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Intellectual property</h3>
    <p className="text-slate-600 dark:text-slate-400">Unless otherwise agreed in writing, all content on this website is owned by MARVONIX. Work created for clients under a project agreement will be governed by the terms of that agreement.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Limitation of liability</h3>
    <p className="text-slate-600 dark:text-slate-400">To the maximum extent permitted by law, MARVONIX will not be liable for loss of data or profits, business interruption, or indirect losses.</p>
    <h3 className="text-[#0A0F2C] dark:text-white font-bold tracking-tight">Contact</h3>
    <p className="text-slate-600 dark:text-slate-400">For questions about these terms, contact us at legal@marvonix.com.</p>
  </div>
);

/* --- LAYOUT --- */

const Footer: React.FC<PageProps> = ({ navigate }) => (
  <footer className="bg-white dark:bg-[#0A0F2C] border-t border-slate-200 dark:border-slate-800 pt-24 pb-12 transition-colors">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="text-2xl font-[800] text-[#0A0F2C] dark:text-white tracking-tighter mb-6 flex items-center">
            MARVONIX
            <div className="w-2 h-2 bg-[#1A3CE4] dark:bg-[#4FD3FF] rounded-full ml-1"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-sm text-lg leading-relaxed mb-6">
            We build calm, reliable systems for teams that hate chaos. Based in the UK & India, working globally.
          </p>
          <div className="flex space-x-4">
             {/* Socials with icons */}
             <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1A3CE4] dark:hover:bg-[#4FD3FF] hover:text-white dark:hover:text-[#0A0F2C] cursor-pointer transition-all duration-300">
               <span className="sr-only">Twitter</span>
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
             </div>
             <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#1A3CE4] dark:hover:bg-[#4FD3FF] hover:text-white dark:hover:text-[#0A0F2C] cursor-pointer transition-all duration-300">
               <span className="sr-only">GitHub</span>
               <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
             </div>
          </div>
        </div>
        <div>
          <h4 className="text-[#0A0F2C] dark:text-white font-bold mb-6 tracking-wide text-sm uppercase">Company</h4>
          <ul className="space-y-4">
            {['About', 'Services', 'Work', 'Blog', 'Contact'].map(link => (
              <li key={link}>
                <button onClick={() => navigate(link.toLowerCase())} className="text-slate-600 dark:text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] text-[15px] font-medium transition-colors">
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[#0A0F2C] dark:text-white font-bold mb-6 tracking-wide text-sm uppercase">Legal</h4>
          <ul className="space-y-4">
            <li><button onClick={() => navigate('privacy')} className="text-slate-600 dark:text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] text-[15px] font-medium transition-colors">Privacy Policy</button></li>
            <li><button onClick={() => navigate('terms')} className="text-slate-600 dark:text-slate-400 hover:text-[#1A3CE4] dark:hover:text-[#4FD3FF] text-[15px] font-medium transition-colors">Terms & Conditions</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-medium">© {new Date().getFullYear()} MARVONIX. All rights reserved.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0 text-slate-400 text-xs">
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
           <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

/* --- GLOBAL STYLES --- */

const GLOBAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
  
  :root {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Custom Scrollbar for Chrome/Safari/Edge */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #cbd5e1; /* slate-300 */
    border-radius: 5px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #94a3b8; /* slate-400 */
  }

  /* Dark mode scrollbar */
  .dark ::-webkit-scrollbar-thumb {
    background-color: #1e293b; /* slate-800 */
  }

  .dark ::-webkit-scrollbar-thumb:hover {
    background-color: #334155; /* slate-700 */
  }

  /* Custom Text Selection */
  ::selection {
    background: rgba(26, 60, 228, 0.2); /* Royal Blue low opacity */
    color: #1A3CE4;
  }

  .dark ::selection {
    background: rgba(79, 211, 255, 0.2); /* Neon Sky Blue low opacity */
    color: #4FD3FF;
  }

  /* Remove tap highlight on mobile */
  * {
    -webkit-tap-highlight-color: transparent;
  }
`;

/* --- MAIN APP --- */

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activePost, setActivePost] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navigate: NavigateFunction = (page) => {
    setCurrentPage(page);
    setActivePost(null);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home navigate={navigate} />;
      case 'about': return <About />;
      case 'services': return <ServicesPage navigate={navigate} />;
      case 'work': return <Work navigate={navigate} />;
      case 'blog': return <Blog activePost={activePost} setActivePost={setActivePost} />;
      case 'contact': return <Contact />;
      case 'privacy': return <Privacy />;
      case 'terms': return <Terms />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0F2C] text-[#0A0F2C] dark:text-slate-200 font-sans transition-colors duration-500 selection:bg-[#1A3CE4]/30 dark:selection:bg-[#4FD3FF]/30">
      <style>{GLOBAL_STYLES}</style>
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#0A0F2C]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0A0F2C]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="text-xl font-[800] text-[#0A0F2C] dark:text-white tracking-tighter flex items-center cursor-pointer select-none"
              onClick={() => navigate('home')}
            >
              MARVONIX
              <div className="w-2 h-2 bg-[#1A3CE4] dark:bg-[#4FD3FF] rounded-full ml-1"></div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map(link => (
                <button
                  key={link.value}
                  onClick={() => navigate(link.value)}
                  className={`text-[14px] font-semibold transition-colors duration-200 ${
                    currentPage === link.value ? 'text-[#1A3CE4] dark:text-[#4FD3FF]' : 'text-slate-600 dark:text-slate-400 hover:text-[#0A0F2C] dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pl-6 border-l border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <ThemeToggle />
                <Button 
                  variant="primary" 
                  className="!px-5 !py-2 !text-[13px] !rounded-full !font-semibold"
                  onClick={() => navigate('contact')}
                >
                  Start a Project
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button & Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-400 hover:text-[#0A0F2C] dark:hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-[#0A0F2C] border-b border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {NAV_LINKS.map(link => (
                <button
                  key={link.value}
                  onClick={() => navigate(link.value)}
                  className={`block w-full text-left px-3 py-3 text-base font-semibold rounded-lg ${
                    currentPage === link.value ? 'bg-slate-50 dark:bg-[#111835] text-[#1A3CE4] dark:text-[#4FD3FF]' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-[#111835] hover:text-[#0A0F2C] dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        {renderPage()}
      </main>

      <Footer navigate={navigate} />
    </div>
  );
}