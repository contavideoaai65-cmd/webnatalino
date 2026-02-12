// CMS Content - All editable content for the portfolio
// This simulates content that would come from a backend CMS

import projectClinic from "@/assets/project-clinic.jpg";
import projectLanding from "@/assets/project-landing.jpg";
import projectInstitutional from "@/assets/project-institutional.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import mockupDesktop from "@/assets/mockup-desktop.jpg";
import mockupMobile from "@/assets/mockup-mobile.jpg";
import mockupPowerchess from "@/assets/mockup-powerchess.png";
import mockupMaquiagem from "@/assets/mockup-maquiagem.png";
import mockupCopywriting from "@/assets/mockup-copywriting.png";

export interface HeroContent {
  firstName: string;
  lastName: string;
  subtitle: string;
  specialties: string[];
  ctaLabel: string;
  ctaAnchor: string;
  ctaSecondaryLabel: string;
  ctaSecondaryLink: string;
  avatarImage: string;
}

export interface AboutContent {
  title: string;
  text: string;
  highlightNumber: string;
  highlightLabel: string;
  nicheLabel: string;
  differentials: string[];
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
  benefit: string;
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
  idealFor: string;
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
  subtitle: string;
  emailLabel: string;
  emailValue: string;
  whatsappLabel: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  whatsappCtaText: string;
}

// Default content (placeholders)
export const heroContent: HeroContent = {
  firstName: "Natalino",
  lastName: "Barbosa",
  subtitle: "Crio sites profissionais para pequenas empresas que querem atrair mais clientes pela internet — sem complicação, sem mensalidade surpresa.",
  specialties: ["Sites institucionais", "Landing pages", "Presença digital", "Criação de logotipo"],
  ctaLabel: "Solicitar orçamento grátis",
  ctaAnchor: "https://wa.me/5521981853032?text=Olá! Gostaria de solicitar um orçamento para criação de site.",
  ctaSecondaryLabel: "Ver projetos",
  ctaSecondaryLink: "#projetos",
  avatarImage: "/placeholder.svg",
};

export const aboutContent: AboutContent = {
  title: "| Por que me escolher:",
  text: "Sou desenvolvedor web especializado em criar sites para pequenos negócios há mais de 10 anos. Meu trabalho é simples: transformar a essência do seu negócio em um site que seus clientes entendam, confiem e entrem em contato.",
  highlightNumber: "10+",
  highlightLabel: "anos criando sites para pequenas empresas",
  nicheLabel: "ajudando pequenas empresas a conquistarem mais clientes através de um site profissional",
  differentials: [
    "Atendimento direto com o desenvolvedor — sem intermediários",
    "Comunicação simples, sem termos técnicos desnecessários",
    "Sem mensalidades escondidas ou surpresas no valor",
    "Sites rápidos, modernos e focados em trazer clientes",
    "Ideal para pequenos negócios que querem crescer online",
  ],
};

export const skillsContent: SkillItem[] = [
  { name: "Front-end", level: 99 },
  { name: "Sites institucionais", level: 99 },
  { name: "Landing pages", level: 99 },
  { name: "Criação de logo", level: 80 },
];

export const projectsContent = {
  title: "| Projetos que geram resultados:",
  items: [
    {
      id: "1",
      title: "Landing Page — Programa de Emagrecimento",
      description: "Landing page de alta conversão para nutricionista, com seções de benefícios, prova social, depoimentos e CTA direto para compra do programa.",
      highlight: "Foco total em conversão e vendas",
      benefit: "Resultado: aumento significativo nas vendas do programa de emagrecimento online.",
      coverImage: mockupDesktop,
      galleryImages: [mockupDesktop, mockupMobile],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
    {
      id: "5",
      title: "Landing Page — PowerChess: Liderança Feminina",
      description: "Landing page premium para curso de liderança feminina com temática de xadrez. Design dark e sofisticado com seções de benefícios, prova social, pricing e CTA direto para inscrição.",
      highlight: "Design premium de alto impacto",
      benefit: "Resultado: página com visual marcante que transmite autoridade e gera inscrições para o programa de R$2.497.",
      coverImage: mockupPowerchess,
      galleryImages: [mockupPowerchess],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
    {
      id: "6",
      title: "Landing Page — Curso de Maquiagem Profissional",
      description: "Landing page de alto impacto para curso de maquiagem profissional, com design roxo vibrante, seções de módulos, prova social e CTA direto para inscrição. Layout premium com vídeo de apresentação.",
      highlight: "Design vibrante e envolvente",
      benefit: "Resultado: página com visual marcante que gera inscrições e transmite profissionalismo no nicho de beleza.",
      coverImage: mockupMaquiagem,
      galleryImages: [mockupMaquiagem],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
    {
      id: "7",
      title: "Landing Page — Curso de Copywriting",
      description: "Landing page premium para curso de copywriting e persuasão, com design dark sofisticado, seções de módulos, prova social e CTA direto para inscrição. Layout envolvente com foco em conversão.",
      highlight: "Copy persuasiva de alto impacto",
      benefit: "Resultado: página com visual premium que transmite autoridade e gera inscrições para o curso de copywriting.",
      coverImage: mockupCopywriting,
      galleryImages: [mockupCopywriting],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
    {
      id: "2",
      title: "Landing Page para Prestador de Serviço",
      description: "Página focada em conversão para profissional autônomo, com depoimentos e chamada para ação direta.",
      highlight: "Foco em conversão",
      benefit: "Resultado: o profissional passou a receber contatos diários pelo WhatsApp.",
      coverImage: mockupMobile,
      galleryImages: [mockupMobile, mockupDesktop, projectLanding],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
    {
      id: "3",
      title: "Site Institucional para Empresa Local",
      description: "Presença digital completa com seções de serviços, história da empresa e contato integrado.",
      highlight: "Presença digital profissional",
      benefit: "Resultado: a empresa passou a ser encontrada no Google e ganhou credibilidade.",
      coverImage: mockupDesktop,
      galleryImages: [mockupDesktop, mockupMobile, projectInstitutional],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
    {
      id: "4",
      title: "Portfólio para Profissional Liberal",
      description: "Portfólio online mostrando trabalhos anteriores e facilitando o contato com novos clientes.",
      highlight: "Portfólio que converte",
      benefit: "Resultado: mais visibilidade e novos clientes encontrando o profissional online.",
      coverImage: mockupMobile,
      galleryImages: [mockupMobile, mockupDesktop, projectPortfolio],
      externalUrl: "#",
      buttonLabel: "Quero um site assim",
    },
  ] as ProjectItem[],
};

export const servicesContent = {
  title: "| Como posso ajudar sua empresa:",
  items: [
    {
      icon: "globe",
      title: "Criação de Sites Institucionais",
      description: "Sites completos que apresentam sua empresa de forma profissional. Seus clientes encontram tudo que precisam em um só lugar.",
    },
    {
      icon: "target",
      title: "Landing Pages que Convertem",
      description: "Páginas focadas em gerar contatos e novos clientes. Perfeitas para divulgar serviços e captar leads pelo WhatsApp.",
    },
    {
      icon: "settings",
      title: "Manutenção sem Dor de Cabeça",
      description: "Cuido de tudo: atualizações, ajustes e melhorias. Você foca no seu negócio enquanto eu cuido do seu site.",
    },
  ] as ServiceItem[],
};

export const pricingContent: PricingContent = {
  title: "VENDA OU ALUGUEL DE SITES",
  subtitle: "Escolha o plano ideal para o momento do seu negócio!",
  plans: [
    {
      id: "essencial",
      name: "Site Essencial",
      price: "197",
      note: "Pagamento Único",
      idealFor: "Para quem quer um site simples e cuida da própria hospedagem.",
      features: [
        { text: "Entrega do Site Completo", included: true },
        { text: "Sem Hospedagem Incluída", included: false },
        { text: "Sem Suporte Técnico", included: false },
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
      note: "Sem preocupação com hospedagem nem manutenção",
      idealFor: "Para quem quer um site profissional sem se preocupar com nada técnico.",
      features: [
        { text: "Hospedagem Incluída", included: true },
        { text: "Suporte e Manutenção", included: true },
        { text: "Atualizações de Conteúdo", included: true },
      ],
      ctaText: "Bom custo-benefício — eu cuido de tudo pra você",
      ctaLabel: "Assinar",
      ctaLink: "https://wa.me/5521981853032?text=Olá! Tenho interesse no plano Site Profissional.",
      accent: "blue",
    },
    {
      id: "completo",
      name: "Site Completo",
      price: "80",
      period: "mês",
      note: "Tudo incluso — zero dor de cabeça",
      idealFor: "Para quem quer o melhor: site completo, domínio, hospedagem e suporte prioritário.",
      features: [
        { text: "Entrega do Site Completo", included: true },
        { text: "Controle Total do Projeto", included: true },
        { text: "Atualizações Ilimitadas", included: true },
        { text: "Hospedagem Vitalícia", included: true },
        { text: "Suporte Prioritário", included: true },
        { text: "Domínio Grátis (.com.br)", included: true },
      ],
      ctaText: "Tudo que você precisa, sem surpresas! 🚀",
      ctaLabel: "Contratar agora",
      ctaLink: "https://wa.me/5521981853032?text=Olá! Tenho interesse no plano Site Completo.",
      ribbon: "Mais Escolhido",
      ribbonAccent: true,
      recommended: true,
      accent: "orange",
    },
  ],
};

export const contactContent: ContactContent = {
  title: "| Vamos criar o site que seu negócio precisa",
  subtitle: "Fale direto comigo — sem robôs, sem espera. Respondo rápido pelo WhatsApp.",
  emailLabel: "Email",
  emailValue: "ntlbbarbosa@gmail.com",
  whatsappLabel: "WhatsApp",
  whatsappNumber: "5521981853032",
  whatsappDisplay: "(21) 98185-3032",
  whatsappCtaText: "Falar direto comigo no WhatsApp →",
};
