"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Brain, Cloud, Sparkles, ArrowRight, Clock, Users, BarChart3, CheckCircle2,
  Cpu, Rocket, Globe, Terminal, Monitor, Briefcase,
} from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";

const programs = [
  {
    id: "aws-cloud",
    icon: Cloud,
    title: "AWS Cloud",
    subtitle: "Cloud Training · 3 Months",
    duration: "3 Months",
    level: "Beginner–Intermediate",
    students: "40+",
    color: "#FF9900",
    description: "Master Amazon Web Services from the ground up. Build, secure, and scale real cloud infrastructure — EC2, S3, VPC, IAM, Lambda — and walk away AWS-certification-ready.",
    modules: [
      "Cloud Fundamentals & AWS Overview",
      "EC2, VPC & Networking Deep Dive",
      "S3, RDS & Storage Solutions",
      "IAM, Security & Compliance",
      "Lambda, CloudWatch & Auto Scaling",
      "Elastic Load Balancing & Route 53",
      "Cost Optimization & Billing Strategy",
      "Capstone Project & Certification Prep",
    ],
    tools: ["EC2", "S3", "VPC", "IAM", "Lambda", "CloudWatch"],
  },
  {
    id: "devops",
    icon: Cpu,
    title: "DevOps",
    subtitle: "DevOps Training · 3 Months",
    duration: "3 Months",
    level: "Intermediate",
    students: "45+",
    color: "#00e676",
    description: "Automate everything. End-to-end DevOps: CI/CD pipelines, container orchestration, infrastructure as code, and production monitoring — the skills every modern engineering team demands.",
    modules: [
      "DevOps Culture & Linux Essentials",
      "Git, GitHub & Version Control Workflows",
      "Docker & Containerisation",
      "Jenkins CI/CD Pipelines",
      "Kubernetes Orchestration",
      "Terraform & Infrastructure as Code",
      "Ansible & Configuration Management",
      "Prometheus, Grafana & Monitoring",
      "Capstone: End-to-end Deployment Pipeline",
    ],
    tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible", "Prometheus"],
  },
  {
    id: "aws-devops",
    icon: Rocket,
    title: "AWS + DevOps",
    subtitle: "Combined Programme · 6 Months",
    duration: "6 Months",
    level: "Intermediate–Advanced",
    students: "30+",
    color: "#1457d6",
    description: "The complete cloud-to-production stack. 6 months of full AWS cloud architecture plus DevOps automation — the most career-accelerating programme Exyra offers.",
    modules: [
      "AWS Foundations & Core Services",
      "Networking: VPC, Route 53, CloudFront",
      "Compute: EC2, ECS, Lambda & Fargate",
      "Storage & Databases: S3, RDS, DynamoDB",
      "IAM, Security & Governance",
      "DevOps Toolchain: Docker, Jenkins, Git",
      "CI/CD Pipelines & Automated Testing",
      "Kubernetes on AWS (EKS)",
      "Terraform & CloudFormation IaC",
      "Observability: CloudWatch, Prometheus, Grafana",
      "FinOps: Cost Control & Right-sizing",
      "Capstone: Production-Grade Cloud System",
    ],
    tools: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "CloudFormation"],
  },
  {
    id: "cloud-computing",
    icon: Globe,
    title: "Cloud Computing",
    subtitle: "Foundations · 1–3 Months",
    duration: "1–3 Months",
    level: "Beginner",
    students: "35+",
    color: "#00bcd4",
    description: "Understand the cloud from first principles. IaaS, PaaS, SaaS, virtualisation, networking, and multi-cloud architecture — the foundation every DevOps and cloud career is built on.",
    modules: [
      "Cloud Models: IaaS, PaaS, SaaS",
      "Virtualisation & Hypervisors",
      "Cloud Networking & Load Balancing",
      "Storage, Databases & CDNs",
      "Cloud Security Best Practices",
      "Serverless & Managed Services",
      "Multi-Cloud Strategy & Vendor Comparison",
      "Migration Planning & Cloud Economics",
    ],
    tools: ["IaaS", "PaaS", "SaaS", "VMs", "CDN", "Security"],
  },
  {
    id: "linux",
    icon: Terminal,
    title: "Linux & Shell",
    subtitle: "Scripting · 1 Month",
    duration: "1 Month",
    level: "Beginner–Intermediate",
    students: "50+",
    color: "#f97316",
    description: "Own the command line. Linux system administration and Bash scripting — the backbone of every DevOps, cloud, and backend engineering career. Build real automation from day one.",
    modules: [
      "Linux File System & CLI Essentials",
      "Users, Permissions & Process Management",
      "Package Management & System Services",
      "Bash Scripting & Variables",
      "Functions, Loops & Conditional Logic",
      "Cron Jobs & Task Automation",
      "Systemd, Logs & Troubleshooting",
    ],
    tools: ["Bash", "CLI", "Cron", "Systemd", "SSH", "Vim"],
  },
  {
    id: "web-dev",
    icon: Monitor,
    title: "Web Development",
    subtitle: "Frontend · 1–3 Months",
    duration: "1–3 Months",
    level: "Beginner",
    students: "25+",
    color: "#ec4899",
    description: "Build real websites from scratch. HTML5, CSS3, JavaScript, responsive design, and deployment. Go from zero knowledge to a live, professional website in just weeks.",
    modules: [
      "HTML5 Structure & Semantics",
      "CSS3 Styling: Flexbox & Grid",
      "JavaScript Fundamentals & DOM",
      "ES6+: Arrow Functions, Promises, Modules",
      "Responsive Design & Media Queries",
      "CSS Frameworks: Tailwind / Bootstrap",
      "Intro to React & Component Thinking",
      "Capstone: Build & Deploy a Website",
    ],
    tools: ["HTML5", "CSS3", "JavaScript", "Tailwind", "React", "Git"],
  },
  {
    id: "ai-ml",
    icon: Brain,
    title: "AI / ML",
    subtitle: "Machine Learning · 2–3 Months",
    duration: "2–3 Months",
    level: "Intermediate",
    students: "35+",
    color: "#8b5cf6",
    description: "Train and deploy real machine learning models. Supervised & unsupervised learning, neural networks, TensorFlow, Scikit-learn — practical AI engineering on real datasets.",
    modules: [
      "Python for Data Science & NumPy/Pandas",
      "Mathematics for ML: Stats & Linear Algebra",
      "Supervised Learning: Regression & Classification",
      "Unsupervised Learning & Clustering",
      "Decision Trees, Random Forests & Ensembles",
      "Neural Networks & Deep Learning",
      "Computer Vision with CNNs",
      "NLP & Text Classification",
      "Model Evaluation, Tuning & Deployment",
      "Capstone: End-to-end ML Project",
    ],
    tools: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Keras", "Jupyter"],
  },
  {
    id: "genai",
    icon: Sparkles,
    title: "Generative AI",
    subtitle: "LLMs & Prompt Eng · 1–2 Months",
    duration: "1–2 Months",
    level: "All Levels",
    students: "30+",
    color: "#a855f7",
    description: "The most in-demand skill of 2025. LLMs, prompt engineering, RAG pipelines, fine-tuning, and building AI-powered applications with LangChain, Claude, and modern APIs.",
    modules: [
      "Introduction to Generative AI & LLMs",
      "Prompt Engineering Techniques",
      "Zero-shot, Few-shot & Chain-of-Thought",
      "RAG: Retrieval-Augmented Generation",
      "Vector Databases & Semantic Search",
      "Fine-tuning & Custom Models",
      "Building AI Apps with LangChain & APIs",
      "Capstone: End-to-end GenAI Application",
    ],
    tools: ["OpenAI", "Claude AI", "LangChain", "Pinecone", "FastAPI", "Python"],
  },
  {
    id: "hr",
    icon: Briefcase,
    title: "Human Resources",
    subtitle: "HR Internship · 1–3 Months",
    duration: "1–3 Months",
    level: "Beginner",
    students: "20+",
    color: "#f59e0b",
    description: "Hands-on HR internship covering real-world talent acquisition, onboarding, payroll, compliance, and performance management. Graduate with practical HR skills companies actively hire for.",
    modules: [
      "HR Fundamentals & Org Structures",
      "Talent Acquisition & Job Portals",
      "Interview Coordination & Screening",
      "Onboarding & Employee Lifecycle",
      "Payroll Basics & Compliance",
      "Labour Law & Statutory Requirements",
      "Performance Management & Appraisals",
      "HR Operations & HRIS Tools",
    ],
    tools: ["Recruitment", "Onboarding", "Payroll", "Labour Law", "HRIS", "HR Ops"],
  },
];

export function Programs() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const program = programs[active];

  return (
    <section id="programs" ref={ref} className="relative py-16 overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(0,188,212,0.04)] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border border-[rgba(0,188,212,0.3)]">
            <span className="text-xs text-[#00bcd4] font-medium uppercase tracking-wider">Training Programmes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-4">
            <span className="text-white">9 Industry-Ready</span>{" "}
            <span style={{
              background: "linear-gradient(100deg, #00e5ff 0%, #1457d6 45%, #a855f7 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>Courses</span>
          </h2>
          <p className="text-[#7a92b4] text-[1.05rem] leading-relaxed">
            Every programme is hands-on and project-based. You graduate with deployable systems and real experience, not just a certificate.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {programs.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setActive(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                active === i
                  ? "text-white shadow-card"
                  : "glass text-[#7a92b4] hover:text-white border border-[rgba(255,255,255,0.06)]"
              }`}
              style={active === i ? {
                background: `linear-gradient(135deg, ${p.color}40, ${p.color}20)`,
                border: `1px solid ${p.color}60`,
              } : {}}
            >
              <p.icon size={14} style={active === i ? { color: p.color } : {}} />
              {p.title}
            </motion.button>
          ))}
        </div>

        {/* Program detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-5 gap-8"
          >
            {/* Left: info */}
            <div className="lg:col-span-2 space-y-6">
              <div
                className="rounded-2xl p-6 border"
                style={{
                  background: `linear-gradient(135deg, ${program.color}10, transparent)`,
                  borderColor: `${program.color}30`,
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${program.color}20`, border: `1px solid ${program.color}40` }}
                >
                  <program.icon size={26} style={{ color: program.color }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{program.title}</h3>
                <p className="text-sm text-[#7a92b4] mb-4">{program.subtitle}</p>
                <p className="text-sm text-[#7a92b4] leading-relaxed mb-6">{program.description}</p>

                {/* Meta */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { icon: Clock,    label: "Duration", value: program.duration },
                    { icon: BarChart3,label: "Level",    value: program.level    },
                    { icon: Users,    label: "Enrolled", value: program.students },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center">
                      <Icon size={16} className="mx-auto mb-1" style={{ color: program.color }} />
                      <div className="text-xs text-[#4a627e]">{label}</div>
                      <div className="text-sm font-semibold text-white">{value}</div>
                    </div>
                  ))}
                </div>

                <GlowButton href="#contact" className="w-full justify-center">
                  Enroll Now <ArrowRight size={14} />
                </GlowButton>
              </div>

              {/* Tools */}
              <div className="glass rounded-2xl p-5 border border-[rgba(255,255,255,0.06)]">
                <div className="text-xs text-[#4a627e] uppercase tracking-wider mb-3">Core Tools & Skills</div>
                <div className="flex flex-wrap gap-2">
                  {program.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-lg border font-medium"
                      style={{ borderColor: `${program.color}40`, color: program.color, background: `${program.color}10` }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: modules */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] h-full">
                <div className="text-sm font-semibold text-white mb-5">Curriculum Modules</div>
                <div className="space-y-3">
                  {program.modules.map((mod, i) => (
                    <motion.div
                      key={mod}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(0,188,212,0.2)] transition-colors group"
                    >
                      <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[#00e676] opacity-70 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm text-[#7a92b4] group-hover:text-white transition-colors">
                        <span className="text-[#4a627e] mr-2 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                        {mod}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
