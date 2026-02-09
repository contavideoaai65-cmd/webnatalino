// CMS Content - All editable content for the portfolio
// This simulates content that would come from a backend CMS

import projectClinic from "@/assets/project-clinic.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectInstitutional from "@/assets/project-institutional.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";

export interface HeroContent {
  firstName: string;
  lastName: string;
  subtitle: string;
  specialties: string[];
  ctaLabel: string;
  ctaAnchor: string;
  avatarImage: string;
}

export interface AboutContent {
  title: string;
  text: string;
  highlightNumber: string;
  highlightLabel: string;
  nicheLabel: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
  coverImage: string;
  galleryImages: string[];
  externalUrl: string;
  buttonLabel: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactContent {
  title: string;
  emailLabel: string;
  emailValue: string;
  whatsappLabel: string;
  whatsappNumber: string;
  whatsappDisplay: string;
}

// Default content (placeholders)
export const heroContent: HeroContent = {
  firstName: "Natalino",
  lastName: "Barbosa",
  subtitle: "Desenvolvo sites que ajudam pequenas empresas a se comunicarem melhor com seus clientes, transmitindo informações de forma clara e objetiva.",
  specialties: ["Front-end", "Sites institucionais", "Landing pages", "Criação de logotipo"],
  ctaLabel: "Sobre mim",
  ctaAnchor: "#sobre-mim",
  avatarImage: "/placeholder.svg",
};

export const aboutContent: AboutContent = {
  title: "| Sobre mim:",
  text: "Sou desenvolvedor web focado em criar soluções digitais que realmente funcionam para pequenos negócios. Acredito que um bom site não precisa ser complicado — ele precisa ser claro, organizado e fácil de usar. Meu trabalho é traduzir a essência do seu negócio em uma presença online que seus clientes entendam e confiem.",
  highlightNumber: "10+",
  highlightLabel: "anos de experiência",
  nicheLabel: "ajudando pequenas empresas a se comunicarem melhor com seus clientes através do site",
};

export const skillsContent: SkillItem[] = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "SEO", level: 75 },
];

export const projectsContent = {
  title: "| Projetos desenvolvidos:",
  items: [
    {
      id: "1",
      title: "Site para Clínica",
      description: "Site institucional completo para clínica de saúde, com agendamento online e informações claras sobre serviços e especialidades.",
      highlight: "Informação clara para pacientes",
      coverImage: projectClinic,
      galleryImages: [projectClinic, projectClinic, projectClinic],
      externalUrl: "#",
      buttonLabel: "Ver projeto",
    },
    {
      id: "2",
      title: "Landing Page para Prestador de Serviço",
      description: "Página de apresentação focada em conversão para profissional autônomo, destacando serviços e depoimentos de clientes.",
      highlight: "Foco em conversão",
      coverImage: projectLanding,
      galleryImages: [projectLanding, projectLanding],
      externalUrl: "#",
      buttonLabel: "Ver projeto",
    },
    {
      id: "3",
      title: "Site Institucional para Empresa Local",
      description: "Presença digital completa para empresa local, com seções de serviços, sobre nós e contato integrado.",
      highlight: "Presença digital profissional",
      coverImage: projectInstitutional,
      galleryImages: [projectInstitutional, projectInstitutional, projectInstitutional],
      externalUrl: "#",
      buttonLabel: "Ver projeto",
    },
    {
      id: "4",
      title: "Página de Apresentação Profissional",
      description: "Portfólio online para profissional liberal, mostrando trabalhos anteriores e facilitando o contato com novos clientes.",
      highlight: "Portfólio que converte",
      coverImage: projectPortfolio,
      galleryImages: [projectPortfolio, projectPortfolio],
      externalUrl: "#",
      buttonLabel: "Ver projeto",
    },
  ] as ProjectItem[],
};

export const servicesContent = {
  title: "| Como posso ajudar sua empresa:",
  items: [
    {
      icon: "globe",
      title: "Criação de Sites Institucionais",
      description: "Sites completos que apresentam sua empresa de forma profissional, com todas as informações que seus clientes precisam.",
    },
    {
      icon: "target",
      title: "Landing Pages para Pequenas Empresas",
      description: "Páginas focadas em conversão, perfeitas para divulgar um serviço específico ou captar novos clientes.",
    },
    {
      icon: "settings",
      title: "Manutenção e Organização de Conteúdo",
      description: "Atualização e reorganização do seu site atual para melhorar a comunicação com seus clientes.",
    },
  ] as ServiceItem[],
};

export const contactContent: ContactContent = {
  title: "| Entre em contato comigo:",
  emailLabel: "Email",
  emailValue: "ntlbbarbosa@gmail.com",
  whatsappLabel: "WhatsApp",
  whatsappNumber: "5521981853032",
  whatsappDisplay: "(21) 98185-3032",
};
