import { Wrench, Lightbulb, Zap, Home, AlertTriangle, Settings } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Fast troubleshooting and repairs for all electrical issues. We fix outlets, switches, and wiring problems.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "Indoor and outdoor lighting solutions. From chandeliers to landscape lighting, we do it all.",
  },
  {
    icon: Zap,
    title: "Panel Upgrades",
    description: "Modernize your electrical panel for safety and capacity. Essential for older homes and renovations.",
  },
  {
    icon: Home,
    title: "Hot Tub & Spa Wiring",
    description: "Professional wiring for hot tubs and spas. Safe installation that meets all electrical codes.",
  },
  {
    icon: Settings,
    title: "Renovation Electrical",
    description: "Complete electrical work for home renovations. New circuits, outlets, and modern upgrades.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Services",
    description: "24/7 emergency electrical repairs. We respond fast when you need us most.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Professional Electrical Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From simple repairs to complete installations, we provide comprehensive electrical solutions for your home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
