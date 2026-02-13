import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home after 10 seconds if user doesn't interact
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-2xl text-center"
      >
        {/* Success Icon */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
          >
            <CheckCircle className="w-12 h-12 text-primary" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Obrigado!
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8">
          Sua mensagem foi recebida com sucesso. Vou analisar seu projeto e entrar em contato em breve pelo WhatsApp.
        </motion.p>

        {/* Description */}
        <motion.div variants={itemVariants} className="bg-card rounded-xl border border-border p-8 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Enquanto isso, você pode me chamar diretamente no WhatsApp para conversarmos sobre os detalhes do seu projeto. Estou sempre disponível para tirar dúvidas e oferecer um orçamento personalizado.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5521981853032?text=Olá! Recebi a confirmação de envio e gostaria de conversar sobre meu projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon group text-center"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </a>
          <button
            onClick={() => navigate("/")}
            className="btn-outline-neon group text-center"
          >
            Voltar ao Início
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>

        {/* Auto-redirect message */}
        <motion.p variants={itemVariants} className="text-sm text-muted-foreground mt-8">
          Você será redirecionado automaticamente em 10 segundos...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYou;
