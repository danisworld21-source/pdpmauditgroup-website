import { useState } from "react";
import { Mail, MessageSquare, Clock, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface FormData {
  name: string;
  facility: string;
  email: string;
  phone: string;
  beds: string;
  message: string;
  consent: boolean;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    facility: "",
    email: "",
    phone: "",
    beds: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const isValid = formData.name && formData.facility && formData.email;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll be in touch within 24 hours.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Ready to maximize your Medicare revenue? Get in touch with our PDPM experts today.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>

                <div className="space-y-6 mb-10">
                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MessageSquare className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-1">Message Us</h3>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              {/* Slack icon */}
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                              </svg>
                              <a
                                href="https://pdpmauditopti-vxu7356.slack.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold hover:text-accent transition-colors"
                              >
                                Message Us on Slack
                              </a>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Mail className="h-5 w-5 text-accent" />
                              <a href="mailto:info@pdpmauditgroup.com" className="text-sm font-semibold hover:text-accent transition-colors">
                                info@pdpmauditgroup.com
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-1">Response Time</h3>
                          <p className="text-slate-600 text-sm">We respond to all inquiries within 24 business hours.</p>
                          <p className="text-slate-600 text-sm mt-1">Monday – Friday: 8am – 6pm EST</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Why Contact Us */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Why SNFs Choose Us</h3>
                  <div className="space-y-3">
                    {[
                      "Average 23% increase in Medicare revenue",
                      "Zero upfront costs — pay only on results",
                      "Dedicated PDPM specialist assigned to your facility",
                      "Full compliance with CMS regulations",
                      "Serving 500+ SNFs nationwide",
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      {submitted ? "Message Received!" : "Request a Free Consultation"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {submitted ? (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
                        <p className="text-slate-600">
                          We've received your message and will contact you within 24 hours to schedule your free PDPM audit consultation.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Jane Smith"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="facility">Facility Name *</Label>
                            <Input
                              id="facility"
                              name="facility"
                              value={formData.facility}
                              onChange={handleChange}
                              placeholder="Sunrise SNF"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@sunrisesnf.com"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(555) 000-0000"
                            />
                          </div>
                          <div>
                            <Label htmlFor="beds">Number of Beds</Label>
                            <Input
                              id="beds"
                              name="beds"
                              value={formData.beds}
                              onChange={handleChange}
                              placeholder="e.g. 120"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your facility and what you're looking to improve..."
                            rows={4}
                          />
                        </div>
                        <Button
                          type="submit"
                          disabled={!isValid || isSubmitting}
                          className="w-full gradient-gold font-bold shadow-lg hover:shadow-xl transition-all"
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              <Send className="h-4 w-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                        <p className="text-xs text-slate-500 text-center">
                          By submitting this form, you agree to be contacted by our team. We respect your privacy.
                        </p>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
