import { useState, useEffect, useCallback, useRef } from "react";
import { X, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNotificationSound } from "@/hooks/useNotificationSound";

interface SocialNotification {
  id: number;
  nome: string;
  acao: string;
  local: string;
  tempo: string;
}

const notifications: SocialNotification[] = [
  { id: 1, nome: "Vitória", acao: "entrou em contato para criação de Logotipo", local: "Caxias do Sul", tempo: "há 2 dia(s)" },
  { id: 2, nome: "Otávio", acao: "pediu informações sobre Sites Institucionais", local: "Macapá", tempo: "há 1 dia(s)" },
  { id: 3, nome: "Sofia", acao: "adquiriu o Site Profissional", local: "Boa Vista", tempo: "há 3 dia(s)" },
  { id: 4, nome: "Camila", acao: "entrou em contato para criação de Logotipo", local: "Fortaleza", tempo: "há 6 hora(s)" },
  { id: 5, nome: "Guilherme", acao: "acabou de contratar o Site Essencial", local: "Salvador", tempo: "há 18 hora(s)" },
  { id: 6, nome: "Rafael", acao: "solicitou um orçamento para Landing Page", local: "Florianópolis", tempo: "há 3 dia(s)" },
  { id: 7, nome: "Vitória", acao: "garantiu o Site Completo", local: "Macapá", tempo: "há 6 dia(s)" },
  { id: 8, nome: "Patrícia", acao: "solicitou um orçamento para Landing Page", local: "Maceió", tempo: "há 3 dia(s)" },
  { id: 9, nome: "Gabriela", acao: "adquiriu o Site Profissional", local: "Recife", tempo: "há 7 dia(s)" },
  { id: 10, nome: "Gabriela", acao: "pediu informações sobre Sites Institucionais", local: "Palmas", tempo: "há 13 hora(s)" },
  { id: 11, nome: "Ana", acao: "garantiu o Site Completo", local: "Goiânia", tempo: "há 1 dia(s)" },
  { id: 12, nome: "Lucas", acao: "adquiriu o Site Profissional", local: "Uberlândia", tempo: "há 5 dia(s)" },
  { id: 13, nome: "Natália", acao: "solicitou um orçamento para Landing Page", local: "Porto Velho", tempo: "há 3 dia(s)" },
  { id: 14, nome: "Natália", acao: "solicitou um orçamento para Landing Page", local: "Belo Horizonte", tempo: "há 1 dia(s)" },
  { id: 15, nome: "Mariana", acao: "iniciou o projeto de Presença Digital", local: "Palmas", tempo: "há 6 dia(s)" },
  { id: 16, nome: "Felipe", acao: "garantiu o Site Completo", local: "João Pessoa", tempo: "há 5 dia(s)" },
  { id: 17, nome: "Gustavo", acao: "iniciou o projeto de Presença Digital", local: "Palmas", tempo: "há 2 dia(s)" },
  { id: 18, nome: "Marcelo", acao: "acabou de contratar o Site Essencial", local: "João Pessoa", tempo: "há 6 dia(s)" },
  { id: 19, nome: "Guilherme", acao: "acabou de contratar o Site Essencial", local: "Natal", tempo: "há 5 dia(s)" },
  { id: 20, nome: "Isabela", acao: "solicitou um orçamento para Landing Page", local: "João Pessoa", tempo: "há 5 dia(s)" },
];

const INITIAL_DELAY = 6000;
const NOTIFICATION_INTERVAL = 5000;
const DISPLAY_DURATION = 5000;
const PAUSE_AFTER = 20;
const PAUSE_DURATION = 2700000;

const SocialProofNotification = () => {
  const [current, setCurrent] = useState<SocialNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const indexRef = useRef(0);
  const countRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { playNotificationSound } = useNotificationSound();

  const scheduleNext = useCallback((delay: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const notification = notifications[indexRef.current % notifications.length];
      indexRef.current += 1;
      setCurrent(notification);
      setIsVisible(true);
      playNotificationSound();

      setTimeout(() => setIsVisible(false), DISPLAY_DURATION);

      countRef.current += 1;
      if (countRef.current >= PAUSE_AFTER) {
        countRef.current = 0;
        scheduleNext(PAUSE_DURATION);
      } else {
        scheduleNext(NOTIFICATION_INTERVAL);
      }
    }, delay);
  }, [playNotificationSound]);

  useEffect(() => {
    scheduleNext(INITIAL_DELAY);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  if (!current || !isVisible) return null;

  const isHighValue = current.acao.includes("Completo") || current.acao.includes("Profissional");

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 max-w-sm",
        "animate-in slide-in-from-left-full duration-500"
      )}
      role="status"
      aria-live="polite"
      aria-label="Notificação de atividade recente"
    >
      <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-lg p-4 shadow-2xl shadow-black/50">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 text-muted-foreground hover:text-foreground transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Fechar notificação"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div className={cn(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
            isHighValue ? "bg-primary/20" : "bg-muted/30"
          )}>
            <UserCheck className={cn(
              "h-5 w-5",
              isHighValue ? "text-primary" : "text-muted-foreground"
            )} aria-hidden="true" />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground">
              <span className="font-semibold">{current.nome}</span>{" "}
              <span className={cn(isHighValue && "text-primary font-medium")}>
                {current.acao}
              </span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {current.local} • {current.tempo}
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted/20 rounded-b-lg overflow-hidden">
          <div className={cn(
            "h-full animate-shrink",
            isHighValue ? "bg-primary" : "bg-muted-foreground/50"
          )} />
        </div>
      </div>
    </div>
  );
};

export default SocialProofNotification;
