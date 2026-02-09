import { useState, useEffect, useCallback } from "react";
import { X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNotificationSound } from "@/hooks/useNotificationSound";

// Nomes brasileiros fictícios
const clientNames = [
  "Aline", "Bruna", "Carla", "Daniela", "Eduarda", "Fernanda", "Gabriela", "Helena",
  "Isabela", "Julia", "Larissa", "Mariana", "Natália", "Patrícia", "Rafaela", "Sabrina",
  "Tatiana", "Vanessa", "Amanda", "Bianca", "Camila", "Diana", "Elaine", "Flávia",
  "Gisele", "Heloísa", "Ingrid", "Joana", "Karina", "Letícia", "Mônica", "Nathalia",
  "Priscila", "Renata", "Silvana", "Thais", "Viviane", "Adriana", "Beatriz", "Cláudia",
  "André", "Bruno", "Carlos", "Daniel", "Eduardo", "Fernando", "Gabriel", "Henrique",
  "Igor", "João", "Lucas", "Marcos", "Nicolas", "Paulo", "Rafael", "Samuel",
  "Thiago", "Victor", "William", "Alexandre", "Bernardo", "Caio", "Diego", "Enzo",
  "Felipe", "Gustavo", "Hugo", "Ivan", "José", "Leonardo", "Matheus", "Otávio",
  "Pedro", "Ricardo", "Sérgio", "Tiago", "Vinícius", "Wesley", "Arthur", "Breno"
];

// Formas de pagamento por plano
const paymentMethodsEssencial = [
  "3x sem juros",
];

const paymentMethodsProfissionalCompleto = [
  "PIX",
  "Cartão de Crédito",
];

const getPaymentMethodByPlan = (plan: PlanType): string => {
  if (plan === "essencial") {
    return getRandomItem(paymentMethodsEssencial);
  }
  return getRandomItem(paymentMethodsProfissionalCompleto);
};

// Cidades brasileiras
const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Salvador", "Brasília",
  "Curitiba", "Fortaleza", "Recife", "Porto Alegre", "Manaus",
  "Goiânia", "Belém", "Guarulhos", "Campinas", "São Luís",
  "Maceió", "Duque de Caxias", "Natal", "Campo Grande", "Teresina",
  "São Bernardo", "Nova Iguaçu", "João Pessoa", "Santo André", "Osasco",
  "Ribeirão Preto", "Jaboatão", "Uberlândia", "Contagem", "Sorocaba"
];

type PlanType = "essencial" | "profissional" | "completo";

interface Notification {
  id: number;
  name: string;
  plan: PlanType;
  planName: string;
  paymentMethod: string;
  city: string;
  timeAgo: string;
}

const planConfig: Record<PlanType, { name: string; color: string }> = {
  essencial: { name: "Site Essencial", color: "text-muted-foreground" },
  profissional: { name: "Site Profissional", color: "text-blue-400" },
  completo: { name: "Site Completo", color: "text-orange-400" },
};

// Distribuição: 10 essencial, resto divide entre profissional e completo (completo vence)
const getRandomPlan = (notificationIndex: number): PlanType => {
  // Primeiras 10 notificações reservadas para essencial (distribuídas aleatoriamente)
  const essencialSlots = [5, 23, 47, 72, 98, 125, 148, 167, 182, 195];
  
  if (essencialSlots.includes(notificationIndex)) {
    return "essencial";
  }
  
  // Entre profissional e completo, completo aparece ~65% das vezes
  const random = Math.random();
  return random < 0.35 ? "profissional" : "completo";
};

const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomTimeAgo = (): string => {
  const options = [
    "agora mesmo",
    "há 1 minuto",
    "há 2 minutos",
    "há 3 minutos",
    "há 5 minutos",
    "há poucos minutos",
  ];
  return getRandomItem(options);
};

const generateNotification = (index: number): Notification => {
  const plan = getRandomPlan(index);
  return {
    id: index,
    name: getRandomItem(clientNames),
    plan,
    planName: planConfig[plan].name,
    paymentMethod: getPaymentMethodByPlan(plan),
    city: getRandomItem(cities),
    timeAgo: getRandomTimeAgo(),
  };
};

const NOTIFICATION_DELAY = 180000; // 180 segundos = 3 minutos
const TOTAL_NOTIFICATIONS = 200;
const PAUSE_DURATION = 3600000; // 60 minutos
const DISPLAY_DURATION = 8000; // 8 segundos visível

const SocialProofNotification = () => {
  const [currentNotification, setCurrentNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { playNotificationSound } = useNotificationSound();

  const showNotification = useCallback(() => {
    if (isPaused) return;

    const notification = generateNotification(notificationCount);
    setCurrentNotification(notification);
    setIsVisible(true);
    
    // Tocar o som "plu plu plu"
    playNotificationSound();

    // Esconder após DISPLAY_DURATION
    setTimeout(() => {
      setIsVisible(false);
    }, DISPLAY_DURATION);

    setNotificationCount((prev) => {
      const newCount = prev + 1;
      
      // Após 200 notificações, pausar por 60 minutos
      if (newCount >= TOTAL_NOTIFICATIONS) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setNotificationCount(0);
        }, PAUSE_DURATION);
      }
      
      return newCount;
    });
  }, [notificationCount, isPaused, playNotificationSound]);

  useEffect(() => {
    // Primeira notificação após 10 segundos
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 10000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (isPaused || notificationCount === 0) return;

    const interval = setInterval(() => {
      showNotification();
    }, NOTIFICATION_DELAY);

    return () => clearInterval(interval);
  }, [showNotification, isPaused, notificationCount]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!currentNotification || !isVisible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 max-w-sm",
        "animate-in slide-in-from-left-full duration-500",
        !isVisible && "animate-out slide-out-to-left-full"
      )}
    >
      <div className="relative bg-card/95 backdrop-blur-sm border border-white/10 rounded-lg p-4 shadow-2xl shadow-black/50">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Fechar notificação"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          {/* Icon */}
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
            currentNotification.plan === "completo" && "bg-orange-500/20",
            currentNotification.plan === "profissional" && "bg-blue-500/20",
            currentNotification.plan === "essencial" && "bg-white/10"
          )}>
            <ShoppingBag className={cn(
              "h-5 w-5",
              currentNotification.plan === "completo" && "text-orange-400",
              currentNotification.plan === "profissional" && "text-blue-400",
              currentNotification.plan === "essencial" && "text-muted-foreground"
            )} />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground">
              <span className="font-semibold">{currentNotification.name}</span>
              {" "}acabou de adquirir o{" "}
              <span className={cn("font-bold", planConfig[currentNotification.plan].color)}>
                {currentNotification.planName}
              </span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {currentNotification.city} • {currentNotification.paymentMethod}
            </p>
            <p className="text-xs text-muted-foreground/70 mt-0.5">
              {currentNotification.timeAgo}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/20 rounded-b-lg overflow-hidden">
          <div 
            className={cn(
              "h-full animate-shrink",
              currentNotification.plan === "completo" && "bg-orange-500",
              currentNotification.plan === "profissional" && "bg-blue-500",
              currentNotification.plan === "essencial" && "bg-muted-foreground/50"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
