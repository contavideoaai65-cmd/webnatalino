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

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PlanItem {
  id: string;
  name: string;
  price: string;
  period?: string;
  note: string;
  features: PlanFeature[];
  ctaText: string;
  ctaLabel: string;
  ctaLink: string;
  recommended?: boolean;
  ribbon?: string;
  ribbonAccent?: boolean;
  accent?: "blue" | "orange";
}

export interface PricingContent {
  title: string;
  subtitle: string;
  plans: PlanItem[];
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
  lastName: "Barbosa Web X",
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
  { name: "Front-end", level: 99 },
  { name: "Sites institucionais", level: 99 },
  { name: "Landing pages", level: 99 },
  { name: "Criação de logo", level: 80 },
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

export const pricingContent: PricingContent = {
  title: "VENDA OU ALUGUEL DE SITES",
  subtitle: "Escolha o plano ideal para você!",
  plans: [
    {
      id: "essencial",
      name: "Site Essencial",
      price: "197",
      note: "Pagamento Único",
      features: [
        { text: "Entrega do Site", included: true },
        { text: "Sem Hospedagem", included: false },
        { text: "Sem Suporte", included: false },
        { text: "Sem Atualizações", included: false },
      ],
      ctaText: "Você cuida de tudo sozinho!",
      ctaLabel: "Escolher",
      ctaLink: "https://wa.me/5521981853032?text=Olá! Tenho interesse no plano Site Essencial.",
    },
    {
      id: "profissional",
      name: "Site Profissional",
      price: "59",
      period: "mês",
      note: "Não se preocupa com hospedagem nem manutenção",
      features: [
        { text: "Hospedagem Grátis", included: true },
        { text: "Suporte e Manutenção", included: true },
        { text: "Atualizações Limitadas", included: true },
      ],
      ctaText: "Bom custo-benefício, sem limitações",
      ctaLabel: "Assinar",
      ctaLink: "https://wa.me/5521981853032?text=Olá! Tenho interesse no plano Site Profissional.",
      accent: "blue",
    },
    {
      id: "completo",
      name: "Site Completo",
      price: "80",
      period: "mês",
      note: "Controle Total",
      features: [
        { text: "Entrega do Site", included: true },
        { text: "Controle Total", included: true },
        { text: "Atualizações Ilimitadas", included: true },
        { text: "Hospedagem Vitalícia", included: true },
        { text: "Suporte Prioritário", included: true },
        { text: "Domínio Grátis", included: true },
      ],
      ctaText: "Tudo que você precisa!",
      ctaLabel: "Contratar",
      ctaLink: "https://wa.me/5521981853032?text=Olá! Tenho interesse no plano Site Completo.",
      ribbon: "Mais Escolhido",
      ribbonAccent: true,
      recommended: true,
      accent: "orange",
    },
  ],
};

export const contactContent: ContactContent = {
  title: "| Entre em contato comigo:",
  emailLabel: "Email",
  emailValue: "ntlbbarbosa@gmail.com",
  whatsappLabel: "WhatsApp",
  whatsappNumber: "5521981853032",
  whatsappDisplay: "(21) 98185-3032",
};
