import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Contact />
      <Footer />
    </main>
  )
}

function Hero() {
  const words = ['Full-Stack', 'React', 'Node', '.NET', 'C#', 'Cloud']
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200)
    return () => clearInterval(id)
  }, [])
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.4em] text-sky-400/70 mb-6">
          Olá, eu sou
        </p>
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent bg-clip-text">
          Enzo <span className="text-sky-400">Sakamoto</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-10 text-neutral-300">
          Estudante de Eng. de Computação & Desenvolvedor{' '}
          <AnimatedWord word={words[index]} /> focado em soluções escaláveis,
          Cloud e qualidade.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#experience"
            className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium shadow-lg shadow-sky-500/30 transition-all"
          >
            Ver Experiência
          </a>
          <a
            href="#tech"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium backdrop-blur border border-white/10 transition-colors"
          >
            Tecnologias
          </a>
        </div>
      </div>
      <ScrollHint />
    </section>
  )
}

function AnimatedWord({ word }: { word: string }) {
  return (
    <span className="relative inline-block min-w-[6ch]">
      <span className="absolute inset-0 animate-fade-out opacity-0" aria-hidden>
        {word}
      </span>
      <span key={word} className="animate-fade-in inline-block text-sky-300">
        {word}
      </span>
    </span>
  )
}

function ScrollHint() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-neutral-400 gap-2">
      <div className="w-[2px] h-10 bg-gradient-to-b from-sky-400/60 to-transparent rounded-full relative overflow-hidden">
        <span className="absolute left-0 right-0 mx-auto w-[2px] h-3 bg-sky-300 rounded-full animate-scroll-down" />
      </div>
    </div>
  )
}

function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-16 items-start">
        <div className="md:col-span-2 space-y-6">
          <h2 className="section-title">Sobre mim</h2>
          <p className="text-neutral-300 leading-relaxed">
            Estudante de <strong>Engenharia de Computação</strong> (IMT)
            apaixonado por desenvolvimento web e computação em nuvem. Busco
            constantemente evolução técnica e aplicação de boas práticas
            modernas para entregar valor de forma consistente.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Características: competente, ágil, bem-humorado, colaborativo e
            comprometido com o crescimento organizacional. Interesse em
            arquitetura, Cloud, automação e excelência de engenharia.
          </p>
        </div>
        <div className="md:col-span-3 grid gap-6">
          <div className="glass rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-sky-300">
              Stack principal
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Foco em <strong>.NET / C#</strong>,{' '}
              <strong>React / TypeScript</strong>, integrações, APIs e
              automações. Experiência com práticas de qualidade (testes
              automatizados, CI/CD) e uso de Cloud (Azure, AWS) para entregar
              soluções escaláveis.
            </p>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-sky-300">Valores</h3>
            <ul className="list-disc pl-5 space-y-1 text-neutral-300 text-sm">
              <li>Arquitetura limpa e modular</li>
              <li>Governança e qualidade de dados</li>
              <li>Automação (infra, auditoria, pipelines)</li>
              <li>Mentoria, colaboração e aprendizado contínuo</li>
            </ul>
          </div>
          <div className="glass rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-2 text-sky-300">
              Idiomas & Certificações
            </h3>
            <ul className="space-y-2 text-neutral-300 text-sm">
              <li>
                <span className="text-sky-300">Idiomas:</span> Inglês
                (Avançado), Espanhol (Básico) e Português (Nativo)
              </li>
              <li>
                <span className="text-sky-300">Certificações:</span> AWS AI
                Practitioner (AIF-C01), Microsoft Azure Fundamentals (AZ-900) e
                Google Cloud Platform – Associate Cloud Engineer (GCP-ACE).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const EXPERIENCES: Array<{
  role: string
  company: string
  period: string
  description: string
  stack: string
}> = [
  {
    role: 'Arquiteto de Software Júnior',
    company: 'XP Inc.',
    period: 'ago/2025 — atual',
    description:
      'Desenvolvimento da plataforma de engenharia com foco em provisionamento de recursos na Azure.',
    stack: 'C#, .NET, React, Azure',
  },
  {
    role: 'Estagiário de Arquitetura de Software',
    company: 'XP Inc.',
    period: 'fev/2025 — ago/2025',
    description:
      'Desenvolvimento e evolução do portal de engenharia com foco em governança de dados, fluxos de usuários e UX de alta qualidade. Apoio em decisões arquiteturais e padronizações.',
    stack: 'C#, .NET, React, Data Governance, UX, Azure',
  },
  {
    role: 'Estagiário de Auditoria Contínua',
    company: 'XP Inc.',
    period: 'fev/2024 — fev/2025',
    description:
      'Criação de testes automatizados de auditoria usando dados e IA para aumentar eficiência e confiabilidade dos processos internos.',
    stack: 'Python, PySpark, Pandas, Scripts, Automação, IA aplicada',
  },
  {
    role: 'Head de Desenvolvimento Front-End',
    company: 'Dev. Community Mauá',
    period: 'ago/2024 — set/2025',
    description:
      'Liderança técnica, mentoria e gestão de projetos front-end, guiando padrões e boas práticas.',
    stack: 'React, Liderança Técnica, Mentoria',
  },
  {
    role: 'Desenvolvedor Front-End',
    company: 'Dev. Community Mauá',
    period: 'mar/2022 — ago/2024',
    description:
      'Construção do portal interno da liga acadêmica, focando em usabilidade e manutenção.',
    stack: 'React, UI, Acessibilidade',
  },
  {
    role: 'Estagiário - Inovação & Qualidade',
    company: 'IMT - Mauá (DIQ-CP)',
    period: 'mar/2023 — fev/2024',
    description:
      'Criação de soluções para organização e controle de dados, planilhas inteligentes e pequenos sistemas internos.',
    stack: 'Automação, Dados, Scripts',
  },
  {
    role: 'Monitor GT Curricularização da Extensão',
    company: 'IMT - Mauá',
    period: 'set/2022 — mar/2023',
    description:
      'Apoio a planejamento acadêmico e criação de sistemas de controle de dados e organização no OpenLMS.',
    stack: 'Organização de Dados, Suporte Técnico',
  },
]

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Experiência</h2>
        <div className="timeline-left">
          <ol className="space-y-14">
            {EXPERIENCES.map((exp, i) => (
              <li key={exp.company + i} className="relative pl-10">
                {/* Marker */}
                <span className="absolute left-0 top-1 w-4 h-4 rounded-full bg-neutral-900 border-2 border-sky-400 shadow shadow-sky-400/40" />
                <div className="flex flex-col gap-2">
                  <p className="text-[11px] tracking-widest text-sky-400/70 font-semibold">
                    {exp.period}
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold text-neutral-100 leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm">
                    {exp.company}
                  </p>
                  <p className="text-neutral-300 leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-sky-300/80 font-medium">
                    {exp.stack}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

const TECH = [
  { name: 'React', level: 'Avançado', cat: 'Frontend' },
  { name: 'TypeScript', level: 'Avançado', cat: 'Frontend' },
  { name: '.NET / C#', level: 'Intermediário', cat: 'Backend' },
  { name: 'Node.js', level: 'Intermediário', cat: 'Backend' },
  { name: 'Google Cloud', level: 'Intermediário', cat: 'Cloud' },
  { name: 'AWS', level: 'Intermediário', cat: 'Cloud' },
  { name: 'Azure', level: 'Intermediário', cat: 'Cloud' },
  { name: 'CI/CD (GitHub Actions)', level: 'Intermediário', cat: 'DevOps' },
  { name: 'Governança de Dados', level: 'Intermediário', cat: 'Dados' },
  { name: 'Auditoria Automatizada', level: 'Intermediário', cat: 'Qualidade' },
  { name: 'Testes Automatizados', level: 'Intermediário', cat: 'Qualidade' },
  { name: 'Arquitetura', level: 'Intermediário', cat: 'Infra' },
  { name: 'Containers', level: 'Intermediário', cat: 'Infra' },
  { name: 'Observabilidade', level: 'Básico', cat: 'Infra' },
]

function Tech() {
  return (
    <section
      id="tech"
      className="relative px-6 py-32 bg-gradient-to-b from-neutral-950 to-neutral-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Tecnologias & Especialidades</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {TECH.map((t) => (
            <div
              key={t.name}
              className="group glass rounded-xl p-5 flex flex-col gap-2 hover:border-sky-400/40 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sky-200 group-hover:text-sky-300 text-sm">
                  {t.name}
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30">
                  {t.cat}
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-wide text-neutral-400 group-hover:text-neutral-300">
                {t.level}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Contato</h2>
        <p className="text-neutral-400 mb-10 text-sm md:text-base max-w-2xl">
          Conecte-se comigo nas redes ou envie uma mensagem. Estou aberto a
          oportunidades, colaborações e boas conversas sobre engenharia de
          software e tecnologia.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/enzosakamoto"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-lg p-5 flex items-center gap-4 hover:border-sky-400/40 hover:bg-white/10 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-sky-500/15 text-sky-300 flex items-center justify-center border border-sky-500/30">
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-100 group-hover:text-sky-300">
                LinkedIn
              </span>
              <span className="text-xs text-neutral-400">/in/enzosakamoto</span>
            </div>
          </a>
          <a
            href="https://github.com/enzosakamoto"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-lg p-5 flex items-center gap-4 hover:border-sky-400/40 hover:bg-white/10 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-sky-500/15 text-sky-300 flex items-center justify-center border border-sky-500/30">
              {/* GitHub Icon */}
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  fillRule="evenodd"
                  d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.79-.25.79-.56l-.01-2.02c-3.26.71-3.95-1.4-3.95-1.4-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.6-.3-5.34-1.3-5.34-5.79 0-1.28.46-2.33 1.18-3.15-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.2a11 11 0 015.8 0c2.2-1.51 3.17-1.2 3.17-1.2.62 1.59.23 2.76.11 3.05.74.82 1.18 1.87 1.18 3.15 0 4.51-2.75 5.48-5.37 5.77.41.36.77 1.07.77 2.17l-.01 3.22c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-100 group-hover:text-sky-300">
                GitHub
              </span>
              <span className="text-xs text-neutral-400">@enzosakamoto</span>
            </div>
          </a>
          <a
            href="https://www.instagram.com/enzo.sakamoto"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-lg p-5 flex items-center gap-4 hover:border-sky-400/40 hover:bg-white/10 transition-colors"
          >
            <span className="w-10 h-10 rounded-md bg-sky-500/15 text-sky-300 flex items-center justify-center border border-sky-500/30">
              {/* Instagram Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-neutral-100 group-hover:text-sky-300">
                Instagram
              </span>
              <span className="text-xs text-neutral-400">@enzo.sakamoto</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-12 text-center text-xs text-neutral-500">
      <p>© {new Date().getFullYear()} Enzo Sakamoto.</p>
    </footer>
  )
}

// Simple animations via CSS keyframes injected here (avoid separate file for brevity)
const style = document.createElement('style')
style.innerHTML = `
@keyframes fade-in { from { opacity: 0; transform: translateY(4px);} to { opacity:1; transform: translateY(0);} }
@keyframes fade-out { from { opacity:1;} to { opacity:0;} }
@keyframes scroll-down { 0% { transform: translateY(0);} 80% { transform: translateY(24px);} 100% { transform: translateY(0); opacity:0;} }
.animate-fade-in { animation: fade-in .6s ease both; }
.animate-fade-out { animation: fade-out .4s ease both; }
.animate-scroll-down { animation: scroll-down 1.8s cubic-bezier(.6,.2,.2,1) infinite; }
`
if (
  typeof document !== 'undefined' &&
  !document.head.querySelector('#portfolio-anim')
) {
  style.id = 'portfolio-anim'
  document.head.appendChild(style)
}
