import { Phone, AlertTriangle, Zap } from "lucide-react";

const EmergencyBanner = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: 'var(--gradient-dark)' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(217 91% 50% / 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, hsl(45 93% 47% / 0.2) 0%, transparent 50%)`,
        }} />
      </div>

      <div className="container-custom relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-secondary animate-pulse" />
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                24/7 Emergency Service
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Electrical Emergency?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl">
              Don't wait until morning. Our emergency electricians are available around the clock to handle urgent electrical issues safely.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+15198575398"
              className="group flex items-center gap-3 bg-primary-foreground text-foreground font-bold text-xl px-8 py-5 rounded-xl hover:scale-105 transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="w-6 h-6" />
              <span>519-857-5398</span>
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/60">
              <Zap className="w-5 h-5" />
              <span className="text-sm">Fast Response Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyBanner;
