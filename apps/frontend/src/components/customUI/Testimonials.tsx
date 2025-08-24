"use client";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "We cut our literature review time in half while increasing coverage of related work. ScholarFlow is a game-changer for research teams.",
    author: "Dr. Lisa Martinez",
    title: "Research Lead",
    company: "BioTech Innovations",
    avatar: "https://i.pravatar.cc/80?img=16",
    companyLogo: "🧬",
  },
  {
    quote:
      "It feels like a multiplayer second brain for papers. The collaboration features are exactly what academic research needed.",
    author: "Alex Thompson",
    title: "PhD Candidate, AI Lab",
    company: "Carnegie Mellon",
    avatar: "https://i.pravatar.cc/80?img=12",
    companyLogo: "🤖",
  },
  {
    quote:
      "Annotation features combined with upcoming semantic search will completely change our workflow. Early access has been incredible.",
    author: "Dr. Rachel Kim",
    title: "Systems Analyst",
    company: "University Libraries",
    avatar: "https://i.pravatar.cc/80?img=20",
    companyLogo: "📚",
  },
  {
    quote:
      "The AI-powered summaries save us countless hours. We can now focus on insights rather than just reading through papers.",
    author: "Prof. David Chen",
    title: "Department Head",
    company: "Research Institute",
    avatar: "https://i.pravatar.cc/80?img=14",
    companyLogo: "🔬",
  },
];

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section
      className="py-36 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
      aria-labelledby="testimonials-heading"
    >
      {/* Enhanced background patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,theme(colors.primary/8),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,theme(colors.chart-1/10),transparent_50%)]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Early adopters love the{" "}
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              focus
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Designed with researchers across academia & industry. Here&apos;s what
            they&apos;re saying about ScholarFlow.
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.author} className="flex-none w-full">
                  <motion.figure
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="mx-auto max-w-4xl"
                  >
                    <div className="relative group">
                      {/* Large quote mark */}
                      <div className="absolute -top-8 -left-4 md:-left-8">
                        <Quote className="h-16 w-16 md:h-20 md:w-20 text-primary/20 fill-current" />
                      </div>

                      {/* Main content card */}
                      <div className="relative rounded-3xl border border-border/30 bg-gradient-to-br from-card/95 via-card/80 to-card/60 backdrop-blur-xl p-8 md:p-12 shadow-2xl group-hover:shadow-3xl transition-all duration-700">
                        {/* Quote text */}
                        <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium mb-12 text-center max-w-3xl mx-auto">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>

                        {/* Author info */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                          <div className="relative">
                            <Image
                              src={testimonial.avatar}
                              alt={`${testimonial.author} avatar`}
                              width={80}
                              height={80}
                              className="rounded-full border-4 border-primary/20 shadow-xl"
                            />
                            <div className="absolute -bottom-2 -right-2 h-8 w-8 bg-gradient-to-br from-primary/90 to-chart-1/90 rounded-full flex items-center justify-center text-white text-xs shadow-lg">
                              {testimonial.companyLogo}
                            </div>
                          </div>

                          <div className="text-center sm:text-left">
                            <div className="font-bold text-lg text-foreground mb-1">
                              {testimonial.author}
                            </div>
                            <div className="text-muted-foreground text-sm mb-2">
                              {testimonial.title}
                            </div>
                            <div className="text-primary font-medium text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 via-transparent to-chart-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-chart-1/20 to-primary/20 blur opacity-0 group-hover:opacity-60 transition-opacity duration-700 -z-10" />
                      </div>
                    </div>
                  </motion.figure>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="h-14 w-14 rounded-full border-2 border-border bg-background/90 backdrop-blur hover:bg-primary/10 hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className="h-2 w-8 rounded-full bg-muted-foreground/30 hover:bg-primary/50 transition-colors duration-300"
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="h-14 w-14 rounded-full border-2 border-border bg-background/90 backdrop-blur hover:bg-primary/10 hover:border-primary/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center group shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
