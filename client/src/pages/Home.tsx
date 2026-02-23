import { Link } from "wouter";
import { ArrowRight, TrendingUp, Shield, Users, CheckCircle, Star, DollarSign, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { value: "23%", label: "Average Revenue Increase", icon: TrendingUp },
  { value: "500+", label: "SNFs Served Nationwide", icon: Users },
  { value: "$2.4M", label: "Average Annual Recovery", icon: DollarSign },
  { value: "100%", label: "CMS Compliance Rate", icon: Shield },
];

const features = [
  "Comprehensive PDPM audit and optimization",
  "Expert MDS assessment review",
  "ICD-10 coding accuracy improvement",
  "Staff education and training programs",
  "Real-time revenue monitoring dashboards",
  "Full CMS regulatory compliance support",
];

const testimonials = [
  {
    quote: "PDPM AOG helped us recover $1.8M in the first year. Their team is incredibly knowledgeable and responsive.",
    name: "Sarah Johnson",
    title: "Director of Nursing, Sunrise Care Center",
    rating: 5,
  },
  {
    quote: "We saw a 31% increase in our Medicare revenue within 6 months. The ROI is outstanding.",
    name: "Michael Chen",
    title: "Administrator, Valley View SNF",
    rating: 5,
  },
  {
    quote: "Their audit process identified coding gaps we never knew existed. Highly recommend to any SNF.",
    name: "Patricia Williams",
    title: "CFO, Heritage Health Group",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <Award className="h-4 w-4" />
              Trusted by 500+ Skilled Nursing Facilities
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Maximize Your Medicare Revenue.
              <span className="text-accent block">Minimize Your Risk.</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert PDPM audit optimization for Skilled Nursing Facilities. We identify missed revenue, improve documentation accuracy, and ensure full CMS compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="gradient-gold font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/results">
                <Button variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  See Our Results
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Everything Your SNF Needs</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Comprehensive PDPM optimization services designed specifically for Skilled Nursing Facilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services">
                <Button className="gradient-gold font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">"{t.quote}"</p>
                  <div>
                    <div className="font-bold text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-500">{t.title}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Maximize Your Revenue?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join 500+ SNFs that have already recovered millions in Medicare revenue. Get your free consultation today.
          </p>
          <Link href="/contact">
            <Button className="gradient-gold font-bold text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
