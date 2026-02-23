import { Link } from "wouter";
import { ArrowRight, Heart, Target, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "We believe proper reimbursement enables better patient care. Our work ultimately benefits the residents your facility serves.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We are paid on performance. Our success is directly tied to the revenue we recover for your facility.",
  },
  {
    icon: Award,
    title: "Compliance-First",
    description: "Every recommendation we make is grounded in CMS regulations. We never compromise compliance for revenue.",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team, building long-term relationships rather than one-time engagements.",
  },
];

const team = [
  {
    name: "Mark Davis",
    title: "Lead PDPM Specialist",
    bio: "15+ years of experience in SNF revenue cycle management and PDPM optimization. Former MDS coordinator and DON.",
  },
  {
    name: "Jennifer Torres",
    title: "Director of Clinical Operations",
    bio: "Registered Nurse with deep expertise in MDS assessments, ICD-10 coding, and CMS regulatory compliance.",
  },
  {
    name: "Robert Kim",
    title: "Revenue Analytics Director",
    bio: "Healthcare data analyst specializing in PDPM case mix optimization and Medicare reimbursement modeling.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            We are a team of PDPM specialists dedicated to helping Skilled Nursing Facilities maximize their Medicare revenue.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              PDPM Audit Optimization Group was founded with a single mission: to ensure that Skilled Nursing Facilities receive every dollar of Medicare reimbursement they are entitled to under the Patient-Driven Payment Model.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe that proper reimbursement is not just a financial issue — it directly impacts the quality of care that SNFs can provide to their residents. When facilities are properly reimbursed, they can invest in better staffing, equipment, and programs for the patients who depend on them.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-md text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Experienced PDPM specialists, clinical experts, and data analysts working together for your facility.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-xl">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{member.title}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get a free consultation and let us show you how much revenue your facility could be recovering.
          </p>
          <Link href="/contact">
            <Button className="gradient-gold font-bold text-lg px-8 py-3 shadow-xl hover:shadow-2xl transition-all">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
