import { pricingContent } from "@/data/content";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const { title, subtitle, plans } = pricingContent;

  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg">{subtitle}</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              className={cn(
                "relative rounded-xl p-6 border transition-all duration-300 animate-fade-up",
                "bg-gradient-to-b from-card/80 to-card",
                plan.recommended
                  ? "border-primary/50 md:-translate-y-2 shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/30",
                plan.accent === "blue" && "border-l-4 border-l-blue-500/30",
                plan.accent === "orange" && "border-l-4 border-l-orange-500/30"
              )}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Ribbon */}
              {plan.ribbon && (
                <div
                  className={cn(
                    "absolute left-1/2 -translate-x-1/2 -top-3 px-4 py-1.5 rounded-full text-xs font-bold",
                    plan.ribbonAccent
                      ? "bg-orange-500 text-orange-950"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {plan.ribbon}
                </div>
              )}

              <div
                className={cn(
                  "min-h-[280px] flex flex-col",
                  plan.recommended && "items-center text-center"
                )}
              >
                {/* Plan Name */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-1">
                  <span className="text-muted-foreground text-sm">R$ </span>
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-sm">
                      /{plan.period}
                    </span>
                  )}
                </div>

                {/* Note */}
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.note}
                </p>

                {/* Features */}
                <ul className="w-full space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className={cn(
                        "flex items-center gap-2 text-sm",
                        feature.included
                          ? "text-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {feature.included ? (
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* CTA Text */}
                <p className="text-muted-foreground text-sm mt-auto mb-4">
                  {plan.ctaText}
                </p>

                {/* Button */}
                <a
                  href={plan.ctaLink}
                  className={cn(
                    "inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200",
                    plan.recommended
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : plan.ribbonAccent
                      ? "bg-orange-500 text-orange-950 hover:bg-orange-400"
                      : "border-2 border-border text-foreground hover:border-primary hover:text-primary"
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
