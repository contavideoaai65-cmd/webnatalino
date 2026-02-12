import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Informe seu nome (mínimo 2 caracteres)";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Nome muito longo (máximo 100 caracteres)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Informe um e-mail válido";
    } else if (formData.email.trim().length > 255) {
      newErrors.email = "E-mail muito longo";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Informe o assunto (mínimo 3 caracteres)";
    } else if (formData.subject.trim().length > 150) {
      newErrors.subject = "Assunto muito longo (máximo 150 caracteres)";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Escreva sua mensagem (mínimo 10 caracteres)";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Mensagem muito longa (máximo 1000 caracteres)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build mailto link as fallback (no backend)
    const subject = encodeURIComponent(formData.subject.trim());
    const body = encodeURIComponent(
      `Nome: ${formData.name.trim()}\nE-mail: ${formData.email.trim()}\n\n${formData.message.trim()}`
    );
    window.open(`mailto:ntlbbarbosa@gmail.com?subject=${subject}&body=${body}`, "_self");

    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses = (field: keyof FormErrors) =>
    cn(
      "w-full px-4 py-3 rounded-lg bg-muted/30 border text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200",
      "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
      errors[field] ? "border-destructive" : "border-border focus:border-primary"
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="card-dark p-6 md:p-8 animate-fade-up space-y-4"
      style={{ animationDelay: "0.3s" }}
      noValidate
      aria-label="Formulário de contato"
    >
      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
        Ou envie uma mensagem
      </h3>

      {isSubmitted && (
        <div
          role="alert"
          className="p-3 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm"
        >
          Mensagem preparada! Verifique seu app de e-mail para enviar.
        </div>
      )}

      <div>
        <label htmlFor="contact-name" className="block text-sm text-muted-foreground mb-1">
          Nome *
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={inputClasses("name")}
          placeholder="Seu nome"
          maxLength={100}
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-destructive mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm text-muted-foreground mb-1">
          E-mail *
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClasses("email")}
          placeholder="seu@email.com"
          maxLength={255}
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-destructive mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm text-muted-foreground mb-1">
          Assunto *
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses("subject")}
          placeholder="Ex: Orçamento para site"
          maxLength={150}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="text-xs text-destructive mt-1" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm text-muted-foreground mb-1">
          Mensagem *
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={cn(inputClasses("message"), "min-h-[120px] resize-y")}
          placeholder="Conte um pouco sobre o que precisa..."
          maxLength={1000}
          rows={4}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="btn-neon w-full text-center"
      >
        <Send className="mr-2 h-4 w-4" />
        Enviar mensagem
      </button>
    </form>
  );
};

export default ContactForm;
