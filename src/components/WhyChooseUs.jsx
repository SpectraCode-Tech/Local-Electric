import { Clock, Award, DollarSign, ThumbsUp, Zap, Users } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency services when you need them most.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Quick arrival times to address your electrical needs promptly.",
  },
  {
    icon: Award,
    title: "Licensed & Experienced",
    description: "Fully licensed electricians with years of hands-on experience.",
  },
  {
    icon: ThumbsUp,
    title: "4.8★ Google Rating",
    description: "Consistently praised for quality work and professionalism.",
  },
  {
    icon: DollarSign,
    title: "Honest Pricing",
    description: "Transparent quotes with no hidden fees or surprises.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "We treat your home like our own with respect and care.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              London's Most Trusted Electrician
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Local Electric, we've built our reputation on reliability, quality workmanship, and genuine care for our customers. When you choose us, you're choosing a team that treats every job—big or small—with the same level of professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+15198575398" className="btn-electric inline-flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Call 519-857-5398
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-1 text-sm md:text-base">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
