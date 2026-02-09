import { pricingContent } from "@/data/content";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const { title, subtitle, plans } = pricingContent;

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-wide mb-2">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={cn(
                "relative rounded-xl p-5 md:p-7 transition-all duration-300 animate-fade-up",
                "bg-gradient-to-b from-white/[0.02] to-transparent",
                "border shadow-lg shadow-black/20",
                plan.recommended && plan.ribbonAccent
                  ? "md:-translate-y-2 animate-neon-pulse-coral border-orange-500"
                  : plan.recommended
                  ? "md:-translate-y-2 animate-neon-pulse border-primary"
                  : "border-white/[0.03]",
                !plan.recommended && plan.accent === "blue" && "border-l-4 border-l-blue-500/30"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Ribbon */}
              {plan.ribbon && (
                <div
                  className={cn(
                    "absolute right-4 top-4 md:right-5 md:top-5 px-4 py-1.5 rounded-full text-xs font-bold",
                    plan.ribbonAccent
                      ? "bg-orange-500 text-orange-950"
                      : "bg-primary text-primary-foreground",
                    plan.recommended && plan.ribbonAccent && "animate-neon-text-pulse-coral",
                    plan.recommended && !plan.ribbonAccent && "animate-neon-text-pulse"
                  )}
                >
                  {plan.ribbon}
                </div>
              )}

              <div className="min-h-[280px] flex flex-col items-start">
                {/* Plan Name */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-foreground text-sm">R$ </span>
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-foreground text-sm">
                      /{plan.period}
                    </span>
                  )}
                </div>

                {/* Note */}
                <p className="text-muted-foreground text-sm mb-5">
                  {plan.note}
                </p>

                {/* Features */}
                <ul className="w-full space-y-2 mb-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={cn(
                        "flex items-center gap-2 text-sm py-1",
                        feature.included
                          ? "text-foreground/90"
                          : "text-muted-foreground"
                      )}
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <span className="w-4" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA Text */}
                <p className="text-muted-foreground text-sm font-medium mt-auto mb-3">
                  {plan.ctaText}
                </p>

                {/* Button */}
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center justify-center px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-200",
                    plan.recommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : plan.ribbonAccent
                      ? "bg-orange-500 text-orange-950 hover:bg-orange-400"
                      : "border-2 border-white/10 text-foreground hover:border-primary hover:text-primary bg-transparent"
                  )}
                >
                  {plan.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;