import { Link } from "wouter";
import { ClipboardList, Search, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Initial Assessment",
    description: "We conduct a comprehensive review of your current PDPM coding practices, MDS assessments, and revenue cycle to identify gaps and opportunities.",
    details: ["Review last 90 days of MDS assessments", "Analyze current case mix index", "Identify undercoding patterns", "Benchmark against peer facilities"],
  },
  {
    number: "02",
    icon: Search,
    title: "Deep Audit & Analysis",
    description: "Our PDPM specialists perform a thorough audit of your clinical documentation, therapy minutes, and nursing assessments to uncover missed revenue.",
    details: ["Clinical documentation review", "Therapy utilization analysis", "Nursing assessment validation", "ICD-10 coding accuracy check"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "We implement targeted strategies to optimize your PDPM scores, improve documentation accuracy, and maximize your Medicare reimbursement.",
    details: ["Customized coding recommendations", "Staff education and training", "Process improvement protocols", "Real-time monitoring dashboards"],
  },
  {
    number: "04",
    icon: Shield,
    title: "Ongoing Compliance",
    description: "We provide continuous monitoring and support to ensure sustained revenue gains while maintaining full CMS compliance.",
    details: ["Monthly performance reviews", "Regulatory update alerts", "Audit defense preparation", "Dedicated support team"],
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Our proven 4-step process delivers measurable results for SNFs across the country.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl font-black text-primary/20">{step.number}</span>
                    <h2 className="text-2xl font-bold text-slate-900">{step.title}</h2>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-slate-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join 500+ SNFs that have already maximized their Medicare revenue with our proven process.
          </p>
          <Link href="/contact">
            <Button className="gradient-gold font-bold text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
