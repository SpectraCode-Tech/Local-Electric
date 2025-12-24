import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Contact Us Today
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to get your electrical project started? Reach out for a free estimate or to schedule a service call.
            </p>

            <div className="space-y-6">
              <a
                href="tel:+15198575398"
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    +1 519-857-5398
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="text-lg font-semibold text-foreground">
                    493 Woodman Ave, London, ON
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <p className="text-lg font-semibold text-foreground">
                    24/7 Emergency Available
                  </p>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="mt-10 p-6 bg-card rounded-xl border border-border">
              <h3 className="font-bold text-foreground mb-2">Service Area</h3>
              <p className="text-muted-foreground">
                Proudly serving London, Ontario and surrounding areas including St. Thomas, Strathroy, Woodstock, and more.
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.0456789!2d-81.2293!3d42.9914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef21d57c9d8a5%3A0x1234567890abcdef!2s493%20Woodman%20Ave%2C%20London%2C%20ON%20N5W%204A2%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Local Electric Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Request a Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="(519) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  How Can We Help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Describe your electrical needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-electric flex items-center justify-center gap-2 py-4"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
