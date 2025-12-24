import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Excellent service! They came out the same day and fixed our electrical issue quickly. Very professional and knowledgeable.",
    rating: 5,
  },
  {
    name: "Mike T.",
    text: "Best electrician in London! They installed our hot tub wiring perfectly. Fair pricing and great communication throughout.",
    rating: 5,
  },
  {
    name: "Jennifer K.",
    text: "Called them for an emergency at 10pm and they were here within the hour. Can't recommend them enough!",
    rating: 5,
  },
  {
    name: "David R.",
    text: "Very impressed with their work on our panel upgrade. Clean, professional, and explained everything clearly.",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-semibold">4.8</span>
            <span>from 19 Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border card-hover relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-foreground">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
