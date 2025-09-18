import { LessonCard } from "@/components/LessonCard";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { GraduationCap } from "lucide-react";

const lessons = [
  {
    title: "Introdução ao React",
    videoId: "w7ejDZ8SWv8",
    description: "Aprenda os fundamentos do React, incluindo componentes, JSX e o ecosistema básico da biblioteca mais popular do JavaScript.",
    linkUrl: "https://react.dev",
    materialsUrl: "https://github.com/reactjs"
  },
  {
    title: "Fundamentos do TypeScript",
    videoId: "BwuLxPH8IDs",
    description: "Domine o TypeScript desde o básico até conceitos avançados. Aprenda tipagem, interfaces e como integrar com React.",
    linkUrl: "https://typescriptlang.org",
    materialsUrl: "https://github.com/microsoft/TypeScript"
  },
  {
    title: "Tailwind CSS Essencial",
    videoId: "UBOj6rqRUME",
    description: "Crie interfaces modernas e responsivas com Tailwind CSS. Aprenda utility-first CSS e design systems.",
    linkUrl: "https://tailwindcss.com",
    materialsUrl: "https://github.com/tailwindlabs/tailwindcss"
  },
  {
    title: "Next.js para Iniciantes",
    videoId: "9P8mASSREYM",
    description: "Construa aplicações full-stack com Next.js. Server-side rendering, API routes e otimizações automáticas.",
    linkUrl: "https://nextjs.org",
    materialsUrl: "https://github.com/vercel/next.js"
  },
  {
    title: "Estado com Zustand",
    videoId: "fZPgBnL2OAQ",
    description: "Gerencie estado de forma simples e eficiente com Zustand. Uma alternativa leve ao Redux para React.",
    linkUrl: "https://zustand-demo.pmnd.rs",
    materialsUrl: "https://github.com/pmndrs/zustand"
  },
  {
    title: "Deploy com Vercel",
    videoId: "4CrUxWQgPyQ",
    description: "Aprenda a fazer deploy de suas aplicações React e Next.js na Vercel com integração contínua e domínios customizados.",
    linkUrl: "https://vercel.com",
    materialsUrl: "https://github.com/vercel"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-hero-gradient rounded-xl flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Dev Academy</h1>
              <p className="text-sm text-muted-foreground">Curso Completo de Desenvolvimento Web</p>
            </div>
          </div>
          
          <DarkModeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Aprenda Desenvolvimento
            <br />
            <span className="text-white/90">Web Moderno</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Um curso completo com 6 aulas essenciais para dominar as tecnologias mais demandadas do mercado
          </p>
        </div>
      </section>

      {/* Lessons Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Aulas do Curso</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada aula foi cuidadosamente estruturada para proporcionar uma experiência de aprendizado completa e prática
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {lessons.map((lesson, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <LessonCard
                  title={lesson.title}
                  videoId={lesson.videoId}
                  description={lesson.description}
                  linkUrl={lesson.linkUrl}
                  materialsUrl={lesson.materialsUrl}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Dev Academy. Feito com ❤️ para desenvolvedores.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
