import { Link } from "wouter";
import { ArrowRight, TrendingUp, DollarSign, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    facility: "Sunrise Care Center",
    beds: 120,
    state: "Ohio",
    challenge: "Undercoding in nursing and therapy components leading to significant revenue loss.",
    result: "$1.8M additional annual revenue",
    increase: "31%",
    timeframe: "6 months",
  },
  {
    facility: "Valley View SNF",
    beds: 85,
    state: "Texas",
    challenge: "Inconsistent MDS documentation and ICD-10 coding errors across clinical staff.",
    result: "$940K additional annual revenue",
    increase: "24%",
    timeframe: "4 months",
  },
  {
    facility: "Heritage Health Group (3 facilities)",
    beds: 340,
    state: "Florida",
    challenge: "Multi-facility inconsistency in PDPM practices and compliance risk exposure.",
    result: "$3.2M additional annual revenue",
    increase: "28%",
    timeframe: "8 months",
  },
];

const metrics = [
  { value: "23%", label: "Average Revenue Increase", icon: TrendingUp },
  { value: "$2.4M", label: "Average Annual Recovery", icon: DollarSign },
  { value: "500+", label: "SNFs Served", icon: Users },
  { value: "100%", label: "Client Retention Rate", icon: Award },
];

export default function Results() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Proven Results</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Real outcomes from real SNFs. See how we've helped facilities across the country maximize their Medicare revenue.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((metric) => (
              <Card key={metric.label} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <metric.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-1">{metric.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Case Studies</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Detailed results from SNFs that partnered with PDPM Audit Optimization Group.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((cs) => (
              <Card key={cs.facility} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">{cs.beds}</span>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{cs.facility}</div>
                      <div className="text-xs text-slate-500">{cs.state} · {cs.beds} beds</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{cs.challenge}</p>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-green-700">{cs.increase}</div>
                    <div className="text-sm text-green-600 font-semibold">Revenue Increase</div>
                    <div className="text-sm text-slate-600 mt-1">{cs.result}</div>
                    <div className="text-xs text-slate-500 mt-1">in {cs.timeframe}</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to See These Results at Your Facility?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get a free consultation and discover your facility's revenue recovery potential.
          </p>
          <Link href="/contact">
            <Button className="gradient-gold font-bold text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
