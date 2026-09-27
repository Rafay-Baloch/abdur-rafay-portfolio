"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Award, BookOpen, BriefcaseBusiness,
  CheckCircle2, Code2, Download, ExternalLink, FolderCode,
  GraduationCap, Home as HomeIcon, Layers3, Mail, MapPin,
  Menu, MessageCircle, Phone, Plane, Quote, Rocket, Send, Sparkles, UserRound, X,
} from "lucide-react";
import {
  FaBootstrap, FaCss3Alt, FaFacebookF, FaGitAlt, FaGithub,
  FaHtml5, FaLinkedinIn, FaNodeJs, FaPython, FaReact,
} from "react-icons/fa";
import {
  SiAngular, SiDjango, SiDotnet, SiJavascript, SiMongodb,
  SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiRedux,
  SiTailwindcss, SiTensorflow, SiTypescript,
} from "react-icons/si";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  Dialog, DialogClose, DialogContent, DialogDescription,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const PROFILE = {
  name: "Abdur Rafay Hassan Baloch",
  role: "Full Stack Developer",
  email: "abdurrafay248@gmail.com",
  phone: "+92 334 4041602",
  location: "Islamabad, Pakistan",
  linkedin: "https://linkedin.com/in/abdur-rafay-hassan-baloch-0860b9225",
  github: "https://github.com/Rafay-Baloch",
  whatsapp: "https://wa.me/923344041602",
  emailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=abdurrafay248@gmail.com",
};

const navItems = [
  { label: "Home", href: "#home", icon: HomeIcon },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: Layers3 },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Stories", href: "#stories", icon: MessageCircle },
  { label: "Contact", href: "#contact", icon: Mail },
];

const skillGroups = [
  {
    title: "Frontend", icon: Code2,
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Redux", icon: SiRedux, color: "#764abc" },
      { name: "Angular", icon: SiAngular, color: "#dd0031" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952b3" },
    ],
  },
  {
    title: "Backend & APIs", icon: Layers3,
    skills: [
      { name: "Python", icon: FaPython, color: "#f7c845" },
      { name: "Django", icon: SiDjango, color: "#44b78b" },
      { name: "Node.js", icon: FaNodeJs, color: "#68a063" },
      { name: "PHP", icon: SiPhp, color: "#777bb4" },
      { name: "C#", icon: Code2, color: "#9b4f96" },
      { name: ".NET", icon: SiDotnet, color: "#512bd4" },
    ],
  },
  {
    title: "Database & Tools", icon: FolderCode,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#ffffff" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#ff6f00" },
    ],
  },
];

const projects = [
  {
    number: "01", title: "Dynamic College CMS", subtitle: "Final Year Project",
    description: "A full-stack content management system for Government Degree College No. 1, D.I. Khan. It lets non-technical staff manage departments, programs, faculty, admissions, notices, news and student records from one dashboard.",
    stack: ["Django", "Python", "PostgreSQL", "JavaScript", "Bootstrap"], variant: "cms",
  },
  {
    number: "02", title: "MERN Web Application", subtitle: "Code Alpha Internship",
    description: "A responsive full-stack application built during the MERN internship, focused on reusable UI, API-driven data, clean component structure and database integration.",
    stack: ["MongoDB", "Express", "React", "Node.js"], variant: "mern",
  },
  {
    number: "03", title: "Freelance Web Collection", subtitle: "Client & Practice Work",
    description: "A collection of gaming, food, personal portfolio, InTrained and e-commerce websites designed for fast loading, clear navigation and responsive experiences across devices.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js"], variant: "studio",
  },
];

const experiences = [
  { date: "Sep 2026 — Present", role: "AI / ML Intern", company: "Big Brains", text: "Working with Python, Pandas and NumPy while learning model selection, loss functions and practical machine-learning workflows.", tag: "Current" },
  { date: "Apr 2026 — Jun 2026", role: "Full Stack Developer Intern", company: "DevelopersHub Corporation", text: "Completed a six-week full-stack internship and received the Best Award (DHC-1975) for performance and project contribution.", tag: "Awarded" },
  { date: "Sep 2025", role: "Frontend Developer Intern", company: "YoungDev Interns", text: "Built responsive interfaces using HTML, CSS and Tailwind CSS with emphasis on reusable layouts and mobile usability." },
  { date: "Apr 2025", role: "MERN Stack Intern", company: "Code Alpha", text: "Developed full-stack features with MongoDB, Express, React and Node.js and strengthened API integration skills." },
  { date: "Jan 2025", role: "Frontend Developer Intern", company: "Datagonomix", text: "Completed frontend tasks, UI improvements and web-fundamentals work in a remote professional environment." },
];

const professionalStories = [
  {
    number: "01",
    icon: Award,
    eyebrow: "Recognition",
    title: "Best Performer Award",
    source: "DevelopersHub Corporation",
    period: "Apr — Jun 2026",
    text: "Completed a six-week Full Stack Development internship and received the Best Award (DHC-1975) for performance and project contribution.",
  },
  {
    number: "02",
    icon: FolderCode,
    eyebrow: "Final Year Project",
    title: "A CMS Built for Real Staff",
    source: "Gomal University",
    period: "2025 — 2026",
    text: "Built a Dynamic College CMS so non-technical staff can manage departments, admissions, notices, events and student records without writing code.",
  },
  {
    number: "03",
    icon: Code2,
    eyebrow: "Remote Experience",
    title: "Frontend in a Global Team",
    source: "Datagonomix, California",
    period: "Jan 2025",
    text: "Worked remotely on frontend tasks and interface improvements, strengthening practical web fundamentals and professional collaboration.",
  },
  {
    number: "04",
    icon: Layers3,
    eyebrow: "Full Stack Growth",
    title: "Learning the MERN Workflow",
    source: "Code Alpha",
    period: "Apr 2025",
    text: "Practised full-stack development with MongoDB, Express, React and Node.js while connecting reusable interfaces with APIs and data.",
  },
  {
    number: "05",
    icon: Sparkles,
    eyebrow: "Current Learning",
    title: "Moving into AI & ML",
    source: "Big Brains",
    period: "Sep 2026 — Present",
    text: "Expanding beyond web development through Python, Pandas, NumPy, model selection and practical machine-learning foundations.",
  },
];

const courses = [
  "Cisco Packet Tracer — 2026",
  "Cisco PCAP: Programming Essentials in Python — 2024",
  "IBM Web Development — 2023",
  "LearnCode.academy: Web Development for Beginners — 2023",
  "Cursa HTML & CSS — 2023",
  "Cursa C for Beginners — 2023",
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow"><span /> {eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

function ProjectPreview({ variant, label }: { variant: string; label: string }) {
  if (variant === "cms") {
    return (
      <div className="project-preview cms-preview" aria-label={`${label} interface preview`}>
        <div className="mock-browser"><i/><i/><i/><span>college-admin.local</span></div>
        <div className="mock-app"><aside><b>DC</b><span/><span/><span/><span/></aside><div className="mock-main"><div className="mock-title"><span/><i/></div><div className="mock-stats"><b/><b/><b/></div><div className="mock-chart"><span/><span/><span/><span/><span/></div></div></div>
      </div>
    );
  }
  if (variant === "mern") {
    return (
      <div className="project-preview mern-preview" aria-label={`${label} interface preview`}>
        <div className="mock-browser"><i/><i/><i/><span>mern-workspace.app</span></div>
        <div className="mern-shell"><div className="mern-top"><b>M</b><span/><span/><em/></div><div className="mern-copy"><small>FULL STACK WORKSPACE</small><strong>Build. Connect.<br/>Ship faster.</strong><span/></div><div className="mern-panels"><i/><i/><i/></div></div>
      </div>
    );
  }
  return (
    <div className="project-preview studio-preview" aria-label={`${label} interface preview`}>
      <div className="mock-browser"><i/><i/><i/><span>rafay-web-studio.dev</span></div>
      <div className="studio-grid"><div className="studio-hero"><small>CREATIVE DEVELOPMENT</small><strong>Digital experiences<br/>with purpose.</strong><span/></div><div className="studio-card food"><b>FOOD</b></div><div className="studio-card game"><b>GAME</b></div><div className="studio-card shop"><b>SHOP</b></div></div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [typedName, setTypedName] = useState("");
  const [talkOpen, setTalkOpen] = useState(false);
  const [talkService, setTalkService] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 25, mass: 0.2 });

  useEffect(() => {
    const fullName = `${PROFILE.name}.`;
    let index = 0;
    let deleting = false;
    let typingTimer: ReturnType<typeof setTimeout> | undefined;

    const runTypingLoop = () => {
      setTypedName(fullName.slice(0, index));

      if (!deleting && index < fullName.length) {
        index += 1;
        typingTimer = setTimeout(runTypingLoop, 72);
        return;
      }

      if (!deleting) {
        deleting = true;
        typingTimer = setTimeout(runTypingLoop, 1450);
        return;
      }

      if (index > 0) {
        index -= 1;
        typingTimer = setTimeout(runTypingLoop, 38);
        return;
      }

      deleting = false;
      typingTimer = setTimeout(runTypingLoop, 480);
    };

    typingTimer = setTimeout(runTypingLoop, 420);

    return () => {
      if (typingTimer) clearTimeout(typingTimer);
    };
  }, []);

 useEffect(() => {
  let animationFrame = 0;

  const updateActiveSection = () => {
    cancelAnimationFrame(animationFrame);

    animationFrame = requestAnimationFrame(() => {
      const activationLine = Math.min(180, window.innerHeight * 0.28);
    let currentSection = "home";
let closestTop = Number.NEGATIVE_INFINITY;

navItems.forEach(({ href }) => {
  const section = document.querySelector<HTMLElement>(href);

  if (!section) return;

  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop <= activationLine && sectionTop > closestTop) {
    closestTop = sectionTop;
    currentSection = href.slice(1);
  }
});

      setActive(currentSection);
    });
  };

  updateActiveSection();

  window.addEventListener("scroll", updateActiveSection, {
    passive: true,
  });

  window.addEventListener("resize", updateActiveSection);

  return () => {
    cancelAnimationFrame(animationFrame);
    window.removeEventListener("scroll", updateActiveSection);
    window.removeEventListener("resize", updateActiveSection);
  };
}, []);

  useEffect(() => {
    const updateBackToTop = () => setShowBackToTop(window.scrollY > 520);
    updateBackToTop();
    window.addEventListener("scroll", updateBackToTop, { passive: true });
    return () => window.removeEventListener("scroll", updateBackToTop);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`${PROFILE.emailCompose}&su=${subject}&body=${body}`, "_blank", "noopener,noreferrer");
  };

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!talkService) return;

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("talk-name") || "").trim();
    const message = `Assalamualaikum Abdur Rafay, my name is ${name}. I am interested in ${talkService}. I found your portfolio and would like to discuss the project with you.`;
    window.open(`https://wa.me/923344041602?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setTalkOpen(false);
  };

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="gold-particles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, index) => <span key={index} />)}
      </div>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home" onClick={closeMenu}>
          <span className="brand-mark">AR</span>
          <div><b>Abdur Rafay <em>Hassan Baloch</em></b><small><i /> Full Stack Developer</small></div>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {navItems.map(({ label, href, icon: Icon }) => <a key={href} href={href} className={active === href.slice(1) ? "active" : ""} onClick={closeMenu}><Icon size={15} aria-hidden="true" />{label}</a>)}
        </nav>
        <div className="header-actions">
          <Dialog open={talkOpen} onOpenChange={setTalkOpen}>
            <DialogTrigger asChild>
              <button className="talk-button" type="button"><MessageCircle aria-hidden="true" /><span>Let&apos;s Talk</span></button>
            </DialogTrigger>
            <DialogContent className="talk-dialog" showCloseButton={false}>
              <DialogClose asChild>
                <button className="talk-dialog-close" type="button" aria-label="Close contact form"><X /></button>
              </DialogClose>
              <div className="talk-monogram" aria-hidden="true"><span>AR</span><small>FULL STACK</small></div>
              <DialogHeader className="talk-dialog-header">
                <DialogTitle>Let&apos;s Work Together</DialogTitle>
                <DialogDescription>Share a few details to start a WhatsApp chat directly.</DialogDescription>
              </DialogHeader>
              <form className="talk-form" onSubmit={handleWhatsAppSubmit}>
                <div className="talk-field">
                  <label htmlFor="talk-name">Your name</label>
                  <input id="talk-name" name="talk-name" type="text" placeholder="Enter your name" autoComplete="name" required />
                </div>
                <div className="talk-field">
                  <label>Select service</label>
                  <Select value={talkService} onValueChange={setTalkService}>
                    <SelectTrigger className="talk-select" aria-label="Select a service">
                      <Sparkles aria-hidden="true" />
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="talk-select-content" position="popper">
                      <SelectItem value="a full-stack website">Full-Stack Website</SelectItem>
                      <SelectItem value="frontend development">Frontend Development</SelectItem>
                      <SelectItem value="backend and API development">Backend &amp; API Development</SelectItem>
                      <SelectItem value="a portfolio website">Portfolio Website</SelectItem>
                      <SelectItem value="another web development service">Other Web Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <button className="talk-submit" type="submit" disabled={!talkService}><Send aria-hidden="true" /> Send Message <Sparkles aria-hidden="true" /></button>
              </form>
            </DialogContent>
          </Dialog>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <aside className="social-rail" aria-label="Social and contact links">
        <span className="social-line" />
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
        <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a>
        <a href={PROFILE.emailCompose} target="_blank" rel="noreferrer" aria-label="Compose email in Gmail"><Mail /></a>
        <span className="social-line" />
      </aside>

      <section id="home" className="hero section-shell">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
           
            <p className="hero-kicker">Hi, I&apos;m</p>
            <h1 className="typing-heading" aria-label={`Hi, I'm ${PROFILE.name}`}>
              <span className="name-primary">
                {typedName.slice(0, 11)}
                {typedName.length <= 11 && <i className="typing-cursor" />}
              </span>
              <br />
              <span className="name-accent">
                {typedName.slice(11).trimStart()}
                {typedName.length > 11 && <i className="typing-cursor" />}
              </span>
            </h1>
            <div className="role-line"><span>Full Stack Developer</span><i /></div>
            <p className="hero-intro">I create reliable full-stack web experiences—from polished responsive interfaces to secure backends, APIs and databases.</p>
            <div className="hero-actions"><a className="button button-gold" href="#projects">Explore my work <ArrowDown size={17}/></a><a className="button button-outline" href="/Abdur-Rafay-Hassan-Baloch-CV.pdf" download>Download CV <Download size={17}/></a></div>
            <div className="hero-meta"><span><MapPin size={16}/> {PROFILE.location}</span><a href={PROFILE.emailCompose} target="_blank" rel="noreferrer" aria-label={`Compose email to ${PROFILE.email} in Gmail`}><Mail size={16}/> {PROFILE.email}</a></div>
          </motion.div>

          <motion.div className="portrait-stage" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
            <div className="orbit orbit-one"><span>01</span></div><div className="orbit orbit-two"><span>DEV</span></div>
            <div className="portrait-frame"><div className="portrait-corner top-left"/><div className="portrait-corner bottom-right"/><Image src="/a.png" alt="Professional portrait of Abdur Rafay Hassan Baloch" width={720} height={900} priority/><div className="portrait-shade"/><span className="portrait-label"><Sparkles size={14}/> Building ideas into products</span></div>
            <div className="code-chip chip-one">&lt;code /&gt;</div><div className="code-chip chip-two">API • DB</div>
          </motion.div>
        </div>
        <div className="hero-stats"><div><strong>05+</strong><span>Internship<br/>experiences</span></div><div><strong>15+</strong><span>Technologies<br/>& tools</span></div><div><strong>03+</strong><span>Years of<br/>learning</span></div><div><strong>100%</strong><span>Responsive<br/>mindset</span></div></div>
      </section>

      <section id="about" className="section-shell about-section">
        <SectionHeading eyebrow="About me" title="Development with clarity, craft and purpose." />
        <div className="about-grid">
          <Reveal className="about-story"><p className="lead">I&apos;m a results-driven <strong>Full Stack Developer</strong> and BS Computer Science student who enjoys turning ideas into scalable end-to-end applications.</p><p>My work spans responsive frontend development, backend systems, REST APIs and relational databases. I value clean code, careful problem-solving and interfaces that feel simple to use.</p><p>Alongside development, I&apos;m building practical knowledge in AI and machine learning—always learning, experimenting and improving the way I solve real problems.</p><div className="about-points"><span><CheckCircle2/> Clean, maintainable code</span><span><CheckCircle2/> Mobile-first UI</span><span><CheckCircle2/> API & database integration</span><span><CheckCircle2/> Fast learner and collaborator</span></div></Reveal>
          <Reveal className="about-card" delay={0.12}><span className="card-index">PROFILE / 2026</span><div className="about-monogram">AR</div><dl><div><dt>Degree</dt><dd>BS Computer Science</dd></div><div><dt>University</dt><dd>Gomal University</dd></div><div><dt>CGPA</dt><dd>3.62 / 4.00</dd></div><div><dt>Focus</dt><dd>Full Stack Web Development</dd></div><div><dt>Based in</dt><dd>Islamabad, Pakistan</dd></div></dl><a href="#contact">Let&apos;s work together <ArrowUpRight size={17}/></a></Reveal>
        </div>
      </section>

      <section id="skills" className="section-shell skills-section">
        <SectionHeading eyebrow="Technical toolkit" title="Technologies I use to bring products to life." text="A practical stack for building responsive frontends, dependable backends and data-driven applications." />
        <div className="skill-groups">{skillGroups.map((group, groupIndex) => <Reveal className="skill-group" delay={groupIndex * 0.08} key={group.title}><div className="skill-group-title"><group.icon/><h3>{group.title}</h3><span>0{groupIndex + 1}</span></div><div className="skills-grid">{group.skills.map(({ name, icon: Icon, color }) => <div className="skill-item" key={name}><Icon style={{ color }} aria-hidden="true"/><span>{name}</span></div>)}</div></Reveal>)}</div>
      </section>

      <section id="projects" className="section-shell projects-section">
        <SectionHeading eyebrow="Selected work" title="Projects built around real problems." text="A selection of academic, internship and freelance work across full-stack development." />
        <div className="projects-list">{projects.map((project, index) => <Reveal className="project-card" key={project.title}><div className="project-visual-wrap"><ProjectPreview variant={project.variant} label={project.title}/><span className="project-number">{project.number}</span></div><div className="project-info"><span className="project-type"><FolderCode size={15}/>{project.subtitle}</span><h3>{project.title}</h3><p>{project.description}</p><div className="stack-list">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><a href={PROFILE.github} target="_blank" rel="noreferrer" className="project-link"><FaGithub/> GitHub <ArrowUpRight/></a><a href="#contact" className="project-link muted"><ExternalLink/> Demo request <ArrowUpRight/></a></div></div><span className="project-watermark">{String(index + 1).padStart(2, "0")}</span></Reveal>)}</div>
        <Reveal className="project-note"><Sparkles/><p>Want the exact live demo or repository for a project? Send me a message and I&apos;ll share the relevant link.</p></Reveal>
      </section>

      <section id="experience" className="section-shell experience-section">
        <SectionHeading eyebrow="Experience" title="Learning by building in real teams." text="Internships and practical roles that strengthened my development, collaboration and problem-solving skills." />
        <div className="experience-layout"><div className="timeline">{experiences.map((item, index) => <Reveal className="timeline-item" key={`${item.company}-${item.date}`} delay={index * 0.05}><span className="timeline-dot"/><div className="timeline-date">{item.date}</div><div className="timeline-content"><div className="timeline-title"><div><h3>{item.role}</h3><p>{item.company}</p></div>{item.tag && <span>{item.tag}</span>}</div><p>{item.text}</p></div></Reveal>)}</div><Reveal className="freelance-card" delay={0.12}><div className="freelance-icon"><Rocket/></div><span>Independent work</span><h3>Freelance Full Stack Developer</h3><p>Designed and developed gaming, food, portfolio, training and e-commerce web experiences.</p><ul><li>Responsive interface development</li><li>Reusable components and layouts</li><li>Frontend and backend integration</li><li>Performance-focused delivery</li></ul><a href="#contact">Discuss a project <ArrowUpRight/></a></Reveal></div>
      </section>

      <section id="stories" className="stories-section">
        <div className="section-shell stories-shell">
          <SectionHeading eyebrow="Professional stories" title="Milestones that shaped how I build." text="Real experiences from internships, university work and continuous technical learning." />
          <div className="stories-viewport" aria-label="Professional experience stories">
            <div className="stories-track">
              {[...professionalStories, ...professionalStories].map((story, loopIndex) => {
                const StoryIcon = story.icon;
                const duplicate = loopIndex >= professionalStories.length;
                return (
                  <article className="story-card" key={`${story.number}-${loopIndex}`} aria-hidden={duplicate}>
                    <div className="story-card-top">
                      <span className="story-icon"><StoryIcon /></span>
                      <span className="story-number">{story.number}</span>
                    </div>
                    <span className="story-eyebrow">{story.eyebrow}</span>
                    <h3>{story.title}</h3>
                    <p>{story.text}</p>
                    <div className="story-source">
                      <Quote />
                      <div><b>{story.source}</b><span>{story.period}</span></div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <p className="stories-hint"><span /> Moving automatically · Hover to pause</p>
        </div>
      </section>

      <section id="education" className="section-shell education-section">
        <SectionHeading eyebrow="Education & growth" title="Strong foundations. Continuous progress." />
        <div className="education-grid"><Reveal className="education-card primary-card"><div className="education-icon"><GraduationCap/></div><span>Oct 2022 — Jun 2026</span><h3>BS Computer Science</h3><p>Gomal University, Dera Ismail Khan, Khyber Pakhtunkhwa</p><div className="cgpa"><strong>3.62</strong><span>CGPA / 4.00</span></div><div className="fyp"><small>FINAL YEAR PROJECT</small><b>Dynamic College Content Management System</b></div></Reveal><Reveal className="education-card courses-card" delay={0.08}><div className="education-card-head"><BookOpen/><div><span>Professional learning</span><h3>Courses & Certifications</h3></div></div><ul>{courses.map((course) => <li key={course}><CheckCircle2/>{course}</li>)}</ul></Reveal><Reveal className="education-card leadership-card" delay={0.16}><div className="education-card-head"><Award/><div><span>Beyond development</span><h3>Leadership</h3></div></div><div className="leadership-item"><b>Leopardship 6.0</b><span>National Youth Leadership Expedition · Islamabad · Feb 2026</span></div><div className="leadership-item"><b>Youth Entrepreneurship Boot Camp</b><span>Batakundi · Jul 2024</span></div></Reveal></div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <Reveal className="contact-heading">
          <span className="eyebrow"><span/> Start a conversation</span>
          <h2>Let&apos;s build <em>together.</em></h2>
          <p>I&apos;m open to full-time roles, internships, freelance projects and thoughtful collaborations.</p>
        </Reveal>
        <Reveal className="contact-panel">
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" placeholder="hello@example.com" required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea id="contact-message" name="message" placeholder="Tell me about your project or opportunity..." rows={5} required />
            </div>
            <button className="button button-gold contact-submit" type="submit">Send message <Send size={17}/></button>
          </form>

          <div className="contact-side">
            <div className="contact-orbit" aria-hidden="true"><span/><span/><span/><div>AR</div></div>
            <div className="contact-details">
              <a href={PROFILE.emailCompose} target="_blank" rel="noreferrer"><span><Mail/></span><div><small>Email</small><b>{PROFILE.email}</b></div></a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}><span><Phone/></span><div><small>Phone</small><b>{PROFILE.phone}</b></div></a>
              <div><span><MapPin/></span><div><small>Location</small><b>{PROFILE.location}</b></div></div>
            </div>
            <a className="button button-outline whatsapp-button" href={PROFILE.whatsapp} target="_blank" rel="noreferrer">Continue on WhatsApp <MessageCircle size={17}/></a>
          </div>
        </Reveal>
      </section>

      <footer><div className="footer-brand"><span>AR</span><div><b>Abdur Rafay <em>Hassan Baloch</em></b><small><i /> Full Stack Developer</small></div></div><p>Designed &amp; developed with focus, curiosity and clean code.</p><a href="#home" aria-label="Back to top">Back to top <ArrowUpRight/></a></footer>

      <motion.button
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        type="button"
        aria-label="Fly back to the top"
        title="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 18, scale: showBackToTop ? 1 : 0.82 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4, scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="back-to-top-trails" aria-hidden="true"><i /><i /></span>
        <Plane aria-hidden="true" />
      </motion.button>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: PROFILE.name, jobTitle: PROFILE.role, email: PROFILE.email, telephone: PROFILE.phone, address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" }, sameAs: [PROFILE.linkedin, PROFILE.github], knowsAbout: ["Full Stack Development", "React", "Next.js", "Django", "Node.js", "PostgreSQL"] }) }} />
    </main>
  );
}
