import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ContactForm from "@/components/ContactForm";
import SiteFooter from "@/components/SiteFooter";
import {
  BriefcaseBusiness,
  Code2,
  Cloud,
  Bot,
  BrainCircuit,
  Network,
  Workflow,
  Database,
  Search,
  Brain,
  Puzzle,
  Layers3,
  Sparkles,
  GitBranch,
} from "lucide-react";

const solutions = [
  {
    category: "AI & Automation",
    title: "AI Business Platform",
    description:
      "A scalable business platform designed to streamline operations, integrate AI-powered capabilities, and provide teams with intelligent tools for managing business data and workflows.",
    benefits: [
      "AI-powered automation and insights",
      "Seamless integrations with existing systems",
      "Secure, scalable, and easy to use",
    ],
    visual: "platform",
  },
  {
    category: "Business Intelligence",
    title: "Business Intelligence & Data Dashboard",
    description:
      "We transform business data into actionable insights through interactive dashboards and reporting solutions that help teams understand performance, identify opportunities, and make data-driven decisions.",
    benefits: [
      "Real-time data and custom dashboards",
      "Advanced analytics and reporting",
      "Connected to business systems and data sources",
    ],
    visual: "analytics",
  },
  {
    category: "Knowledge Management",
    title: "AI Knowledge & Document Assistant",
    description:
      "An intelligent knowledge solution using large language models and retrieval-augmented generation to help teams securely access, search, and interact with business information.",
    benefits: [
      "Instant answers from documents and business data",
      "Secure and private information access",
      "Reduced time spent searching for information",
    ],
    visual: "knowledge",
  },
] as const;

const services = [
  {
    number: "01",
    title: "IT Consulting & Technology Strategy",
    description:
      "Helping businesses make informed technology decisions, improve IT operations, and build practical technology strategies aligned with business goals.",
  },
  {
    number: "02",
    title: "Custom Software & Application Development",
    description:
      "Designing and developing secure, scalable web applications and business software tailored to your organization's needs.",
  },
  {
    number: "03",
    title: "Cloud & Infrastructure Solutions",
    description:
      "Modernizing IT infrastructure, migrating applications to the cloud, and designing scalable environments that support business growth.",
  },
  {
    number: "04",
    title: "AI & Business Automation",
    description:
      "Helping organizations adopt AI and automation to streamline workflows, improve productivity, and create smarter business processes.",
  },
];

const reasons = [
  {
    title: "Business-Focused",
    description:
      "We align technology decisions with your business goals, operational needs, and long-term objectives.",
  },
  {
    title: "Practical Solutions",
    description:
      "We focus on solving real business problems with technology that is useful, maintainable, and built to deliver value.",
  },
  {
    title: "Reliable & Secure",
    description:
      "We design solutions with reliability, security, scalability, and maintainability in mind from the beginning.",
  },
  {
    title: "Built for Growth",
    description:
      "Our solutions are designed to evolve with your organization as your technology needs and business grow.",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your business, existing technology, challenges, and goals.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We identify the right technology strategy and define a practical roadmap focused on your priorities.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and implement secure, scalable solutions using modern technologies and proven engineering practices.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We continuously optimize systems and technology as your business evolves and new opportunities emerge.",
  },
];

const technologies = [
  ["OpenAI", "AI-powered applications, intelligent assistants, and enterprise workflows."],
  ["Claude", "Advanced AI assistants, reasoning workflows, and business automation."],
  ["Google Gemini", "Multimodal AI applications, reasoning, and intelligent automation."],
  ["AI Agents", "Autonomous AI agents designed to execute tasks and business workflows."],
  ["RAG", "Grounded AI systems connected to trusted business knowledge and data."],
  ["Vector Databases", "Semantic search and knowledge retrieval for intelligent applications."],
  ["AI Automation", "Intelligent workflows that reduce repetitive work and improve productivity."],
  ["LLM Applications", "Production-ready applications powered by large language models."],
  ["Machine Learning", "Predictive models and data-driven systems for practical business applications."],
  ["AI Integration", "AI capabilities integrated into existing applications and enterprise systems."],
  ["AI Search", "Intelligent semantic search and knowledge discovery across business data."],
  ["Cloud AI", "Scalable cloud infrastructure for reliable production AI workloads."],
];

const technologyIcons = [
  Sparkles,       // OpenAI
  BrainCircuit,   // Claude
  Network,        // Google Gemini
  Bot,            // AI Agents
  Search,         // RAG
  Database,       // Vector Databases
  Workflow,       // AI Automation
  Layers3,        // LLM Applications
  Brain,          // Machine Learning
  Puzzle,         // AI Integration
  GitBranch,      // AI Search
  Cloud,          // Cloud AI
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}

function SolutionArtwork({
  category,
  index,
  visual,
}: {
  category: string;
  index: string;
  visual: "platform" | "analytics" | "knowledge";
}) {
  const artwork = {
    platform: "/solution-platform.png",
    analytics: "/solution-analytics.png",
    knowledge: "/solution-knowledge.png",
  }[visual];

  return (
    <div className={`solution-art solution-art-${visual}`} aria-hidden="true">
      <Image
        className="solution-art-image"
        src={artwork}
        alt=""
        fill
        sizes="(max-width: 760px) 100vw, 50vw"
      />
      <div className="art-caption">
        <span>{index}</span>
        <span>{category}</span>
      </div>
      <div className="art-index">{index}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero">
          <Image
            className="hero-background-image"
            src="/hero-consulting.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="site-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">IT Consulting &amp; Digital Solutions</p>
              <h1>Building technology that moves your business forward.</h1>
              <p className="hero-description">
                We help businesses design, build, modernize, and scale reliable
                technology solutions using modern software, cloud platforms,
                data, and artificial intelligence.
              </p>
              
              <a className="button button-dark" href="/schedule">
                Schedule Your Call <span aria-hidden="true">↗</span>
              </a>

            </div>
          </div>
          <a className="hero-scroll" href="#solutions">
            Explore solutions <span aria-hidden="true">↓</span>
          </a>
        </section>

        <section id="solutions" className="section solutions-section">
          <div className="site-width">
            <SectionHeading
              eyebrow="Selected Solutions"
              title="Real Solutions. Measurable Impact."
              description="We build modern digital solutions that help businesses work smarter, make better decisions, and achieve sustainable growth."
            />
            <div className="solution-list">
              {solutions.map((solution, i) => (
                <article
                  className={`solution-row ${i % 2 ? "solution-row-reverse" : ""}`}
                  key={solution.title}
                >
                  <SolutionArtwork
                    category={solution.category}
                    index={`0${i + 1}`}
                    visual={solution.visual}
                  />
                  <div className="solution-copy">
                    <p className="eyebrow">{solution.category}</p>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                    <ul>
                      {solution.benefits.map((benefit) => (
                        <li key={benefit}>
                          <span aria-hidden="true">+</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <a className="text-link" href="#contact">
                      Discuss your project <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="site-width">
            <SectionHeading
              eyebrow="Services"
              title="IT Consulting & Digital Solutions"
              description="We help businesses solve technology challenges, modernize their IT environments, and implement secure, scalable solutions that support growth."
            />
            
            <div className="service-grid">
              {services.map((service, i) => {
                const ServiceIcon = [
                  BriefcaseBusiness,
                  Code2,
                  Cloud,
                  Bot,
                ][i];

                return (
                  <article className="service-item" key={service.number}>
                    <span className="item-number">{service.number}</span>

                    <div className="service-icon">
                      <ServiceIcon size={30} strokeWidth={1.5} />
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        <section id="why-code-red" className="section reasons-section">
          <div className="site-width">
            <SectionHeading
              eyebrow="Why Code Red"
              title="Technology Built Around Your Business"
              description="We combine technical expertise with a practical understanding of business needs to deliver solutions that create lasting value."
            />
            <div className="reason-grid">
              {reasons.map((reason, i) => (
                <article className="reason-item" key={reason.title}>
                  <span className="reason-number">0{i + 1}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="section approach-section">
          <div className="site-width">
            <SectionHeading
              eyebrow="Our Approach"
              title="A Practical Approach to Technology"
              description="We take a structured approach to technology projects, from understanding the challenge to delivering and continuously improving the solution."
            />
            <div className="approach-grid">
              {steps.map((step) => (
                <article className="approach-item" key={step.number}>
                  <span className="approach-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="technologies" className="section technology-section">
          <div className="site-width">
            <SectionHeading
              eyebrow="AI Technology & Expertise"
              title="Practical AI. Intelligent Solutions."
              description="We use modern AI technologies, intelligent automation, and proven engineering practices to build practical solutions that improve how businesses operate."
            />
            
            <div className="technology-grid">
              {technologies.map(([name, description], i) => {
                const TechnologyIcon = technologyIcons[i];

                return (
                  <article className="technology-item" key={name}>
                    <span className="item-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="technology-icon">
                      <TechnologyIcon size={28} strokeWidth={1.6} />
                    </div>

                    <h3>{name}</h3>
                    <p>{description}</p>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="site-width about-layout">
            <div className="about-copy">
              <p className="eyebrow">About Code Red</p>
              <h2>Practical Technology. Business-Focused Solutions.</h2>
              <div className="about-prose">
                <p>
                  Code Red Digital Solutions LLC is an IT consulting and
                  digital solutions company helping businesses solve
                  technology challenges through practical, reliable, and
                  scalable solutions.
                </p>
                <p>
                  We combine software engineering, cloud technologies, data
                  solutions, and artificial intelligence to modernize systems,
                  improve business operations, and create new opportunities
                  for growth.
                </p>
                <p>
                  Our approach starts with understanding your business goals
                  and technology challenges. We then design and implement
                  solutions that are secure, maintainable, and built to evolve
                  with your organization.
                </p>
              </div>
              <div className="expertise-list">
                {[
                  ["Software", "Engineering"],
                  ["Cloud", "Infrastructure"],
                  ["AI", "Automation"],
                  ["Data", "Analytics"],
                  ["APIs", "Integrations"],
                  ["IT Strategy", "Technology Planning"],
                ].map(([name, detail]) => (
                  <div key={name}>
                    <strong>{name}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-art" aria-hidden="true">
              <Image
                className="about-art-image"
                src="/about-technology.png"
                alt=""
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <div className="about-art-frame">
                <span className="about-art-index">CODE RED</span>
                <p>Technology &amp; Business Intelligence</p>
                <span className="about-art-rule" />
                <span className="about-art-subtitle">
                  Turning data into better decisions.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="site-width contact-layout">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let&apos;s Talk About Your Project</h2>
              <p>
                Have a technology challenge, software project, or business
                process you&apos;d like to improve? Tell us about it and
                we&apos;ll get back to you.
              </p>
            </div>
            <div className="contact-panel">
              <h3>How We Can Help</h3>
              <p>
                Whether you need help modernizing your technology, developing
                custom software, implementing AI, or improving your IT
                infrastructure, we&apos;re here to help.
              </p>
              <ContactForm />
              <span className="contact-small">Prefer email?</span>
              <a href="mailto:info@coderedsolutions.com">
                info@coderedsolutions.com <span aria-hidden="true">↗</span>
              </a>
              <span className="contact-small">
                Contact us to discuss your project and technology needs.
              </span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
