import { Link } from "wouter";
import { ArrowRight, ClipboardList, TrendingUp, BookOpen, Shield, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: ClipboardList,
    title: "PDPM Audit & Review",
    description: "Comprehensive review of your MDS assessments, clinical documentation, and coding practices to identify revenue gaps.",
    features: ["MDS accuracy review", "ICD-10 coding audit", "Case mix analysis", "Gap identification report"],
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Targeted strategies to maximize your PDPM reimbursement while maintaining full CMS compliance.",
    features: ["Coding optimization", "Documentation improvement", "Revenue forecasting", "Performance benchmarking"],
  },
  {
    icon: BookOpen,
    title: "Staff Education & Training",
    description: "Comprehensive training programs to ensure your clinical team captures every dollar of eligible reimbursement.",
    features: ["MDS coordinator training", "Clinical documentation workshops", "PDPM methodology education", "Ongoing competency support"],
  },
  {
    icon: Shield,
    title: "Compliance & Risk Management",
    description: "Proactive compliance monitoring to protect your facility from audits and regulatory penalties.",
    features: ["CMS regulation monitoring", "Audit defense preparation", "Risk assessment reports", "Compliance dashboards"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Real-time dashboards and detailed reports to track your revenue performance and identify trends.",
    features: ["Monthly revenue reports", "Case mix trend analysis", "Peer benchmarking", "Custom KPI dashboards"],
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description: "A dedicated PDPM specialist assigned to your facility for ongoing support and consultation.",
    features: ["Named account specialist", "Priority response SLA", "Monthly strategy calls", "24/7 portal access"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive PDPM optimization services designed to maximize your Medicare revenue and ensure compliance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact us today for a free consultation and discover how much revenue your facility could be recovering.
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
