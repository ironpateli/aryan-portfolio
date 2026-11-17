"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, BrainCircuit,
  Code2, Database, Cpu, Sparkles, ExternalLink, Terminal, Layers3
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "GetuPlaced",
    category: "AGENTIC AI · RAG · INTERVIEW INTELLIGENCE",
    description:
      "An adaptive AI interview coach that orchestrates teaching, quizzes, coding practice and mock interviews around a candidate’s performance.",
    highlights: [
      "Agentic workflows for adaptive interview preparation",
      "Qdrant-powered RAG with embeddings and cross-encoder reranking",
      "Persistent candidate memory using PostgreSQL",
      "Resume analysis and automated PDF knowledge ingestion"
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "Qdrant", "Groq API", "JavaScript"],
    github: "https://github.com/ironpateli/getuplaced",
    featured: true,
    mark: "GP"
  },
  {
    number: "02",
    name: "Gesture-Controlled Desktop Assistant",
    category: "COMPUTER VISION · DEEP LEARNING · AUTOMATION",
    description:
      "A real-time human-computer interaction system that turns hand gestures into desktop actions using a custom-trained LSTM model.",
    highlights: [
      "90.04% test accuracy across 9 gesture classes",
      "Custom PyTorch LSTM trained on hand-landmark sequences",
      "MediaPipe landmark pipeline with wrist-relative normalization",
      "Gesture cooldown logic and Windows desktop integration"
    ],
    stack: ["Python", "PyTorch", "LSTM", "OpenCV", "MediaPipe", "PyAutoGUI"],
    github: "https://github.com/ironpateli/Gesture-Controlled-Desktop-Assistant-",
    featured: false,
    mark: "GA"
  },
  {
    number: "03",
    name: "ChargeUp",
    category: "FULL-STACK · EV INFRASTRUCTURE · GEOSPATIAL",
    description:
      "A full-stack EV charging platform for discovering chargers, searching by location, booking slots and managing charger listings.",
    highlights: [
      "PostgreSQL and PostGIS data model for geospatial discovery",
      "Booking conflict prevention using PostgreSQL time ranges and exclusion constraints",
      "JWT authentication, password hashing and Zod validation",
      "Modular Express REST API with domain-based routing"
    ],
    stack: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL", "PostGIS", "JWT"],
    github: "https://github.com/ironpateli/ChargeUp",
    featured: false,
    mark: "CU"
  }
];

const skillGroups = [
  { title: "AI & Machine Learning", icon: BrainCircuit, items: ["Generative AI", "LLMs", "Agentic AI", "RAG", "Vector Databases", "PyTorch", "scikit-learn", "LSTM", "OpenCV", "MediaPipe", "NumPy", "Pandas"] },
  { title: "Frameworks & Development", icon: Code2, items: ["Python", "C++", "JavaScript", "React", "FastAPI", "Flask", "Node.js", "Express.js", "LangGraph", "LangChain", "HTML", "CSS"] },
  { title: "Data & Infrastructure", icon: Database, items: ["PostgreSQL", "PostGIS", "MySQL", "Qdrant", "REST APIs", "Docker", "AWS EC2", "Jenkins", "SonarQube", "Prometheus", "Grafana", "Git"] }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } }
};

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <a className="wordmark" href="#home">AP<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={14} /></a>
        </div>
      </nav>

      <section className="hero shell" id="home">
        <div className="hero-grid">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
            <h1>Building intelligent<br /><span className="muted-heading">systems</span> for the<br />real world<span className="accent">.</span></h1>
            <p className="hero-intro">
              I’m Aryan, a computer engineering student exploring the intersection of
              <strong> AI, machine learning and software engineering.</strong> I enjoy turning
              complex ideas into useful, thoughtfully engineered products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="text-link" href="mailto:aryanpatel070505@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/ironpateli" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/iron-pateli/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
              <a href="mailto:aryanpatel070505@gmail.com"><Mail size={17} /> Email</a>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="visual-core">
              <div className="core-top"><span>AP / 001</span><span>BUILDING MODE</span></div>
              <div className="core-symbol"><BrainCircuit size={72} strokeWidth={1.15} /></div>
              <div className="core-bottom"><span>AI</span><span>SOFTWARE</span><span>IDEAS</span></div>
            </div>
            <div className="float-tag tag-one"><Sparkles size={14} /> Agentic AI</div>
            <div className="float-tag tag-two"><Cpu size={14} /> Machine learning</div>
            <div className="float-tag tag-three"><Terminal size={14} /> Engineering</div>
            <div className="visual-caption">CURIOUS BY DESIGN. BUILT TO EXPLORE.</div>
          </motion.div>
        </div>
        <div className="hero-bottomline">
          <span>MUMBAI, INDIA</span><span>COMPUTER ENGINEERING · SPIT</span><span>2023 — 2027</span>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <div><div className="eyebrow">SELECTED WORK / 2024—26</div><h2>Projects with<br /><span className="serif-italic">a purpose.</span></h2></div>
          <p className="section-aside">A few things I’ve built across agentic AI, computer vision and full-stack engineering.</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.number}
              initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={fadeUp}>
              <div className="project-topline"><span>{project.number} / 03</span><span>{project.category}</span></div>
              <div className="project-main">
                <div className="project-mark">{project.mark}<span>✳</span></div>
                <div className="project-content">
                  <div className="project-title-row"><h3>{project.name}</h3><a className="circle-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub`}><ArrowUpRight size={20} /></a></div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-details">
                    <ul>{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                    <div className="stack-wrap">{project.stack.map((item) => <span className="stack-pill" key={item}>{item}</span>)}</div>
                  </div>
                  <a className="project-github" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> View source code <ExternalLink size={13} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="shell about-grid">
          <div><div className="eyebrow">A LITTLE ABOUT ME</div><h2>Engineer by study.<br /><span className="serif-italic">Problem-solver</span><br />by instinct.</h2></div>
          <div className="about-copy">
            <p>I’m pursuing a B.Tech in Computer Engineering at Sardar Patel Institute of Technology, Mumbai. My interests sit around building intelligent applications, understanding how systems work under the hood, and connecting research ideas to practical software.</p>
            <p>Recently, I’ve been working with agentic workflows, retrieval-augmented generation, deep learning and backend systems. I value clear thinking, experimentation and building things that solve actual problems.</p>
            <div className="education-card"><div className="education-icon"><Layers3 size={20} /></div><div><strong>Sardar Patel Institute of Technology</strong><span>B.Tech, Computer Engineering · 2023–2027</span></div><b>7.44 / 10</b></div>
            <div className="certifications"><span className="eyebrow">CERTIFICATIONS</span><p>Supervised Machine Learning: Regression and Classification · DeepLearning.AI / Stanford, 2026</p><p>Advanced Learning Algorithms · DeepLearning.AI / Stanford, 2026</p></div>
          </div>
        </div>
      </section>

      <section className="section shell" id="skills">
        <div className="section-heading skills-heading"><div><div className="eyebrow">MY TOOLKIT</div><h2>Tools of the<br /><span className="serif-italic">trade.</span></h2></div><p className="section-aside">Technologies I use to explore ideas, build products and make systems work.</p></div>
        <div className="skills-grid">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return <motion.div className="skill-card" key={group.title} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <div className="skill-card-head"><Icon size={21} /><span>0{i + 1}</span></div><h3>{group.title}</h3>
              <div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </motion.div>;
          })}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <div className="eyebrow">HAVE A GOOD PROBLEM?</div>
          <h2>Let’s build<br /><span className="serif-italic">something useful.</span></h2>
          <a className="contact-email" href="mailto:aryanpatel070505@gmail.com">aryanpatel070505@gmail.com <ArrowUpRight size={19} /></a>
          <div className="contact-bottom"><span>MUMBAI, INDIA</span><div><a href="https://github.com/ironpateli" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/iron-pateli/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13} /></a></div><span>© 2026 ARYAN PATEL</span></div>
        </div>
      </section>
    </main>
  );
}
