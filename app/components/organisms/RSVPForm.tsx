"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Text, Button, Divider, Icon } from "../atoms";
import { FormField } from "../molecules";
import { weddingConfig } from "@/app/config/wedding.config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  attending: string;
  dietary: string;
  message: string;
}

export function RSVPForm() {
  const { rsvp, couple } = weddingConfig;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    guests: "",
    attending: "",
    dietary: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="rsvp" className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-wedding-blush/30 via-wedding-cream to-wedding-background" />
        
        <motion.div
          className="max-w-2xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-elegant rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-wedding-primary via-wedding-accent to-wedding-primary" />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="mb-4 sm:mb-6"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-wedding-gold-light via-white to-wedding-blush shadow-xl border-2 border-wedding-primary/20">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Icon name="heart" size="xl" className="text-wedding-accent" />
                </motion.div>
              </div>
            </motion.div>
            <Text variant="h2" className="text-wedding-text mb-3 sm:mb-4 text-xl sm:text-3xl md:text-4xl">
              Thank You!
            </Text>
            <Text variant="body" className="text-wedding-text/70 mb-4 sm:mb-6 text-sm sm:text-base">
              We&apos;ve received your RSVP and can&apos;t wait to celebrate with you!
            </Text>
            <div className="flex items-center justify-center gap-3">
              <span className="w-8 sm:w-12 h-px bg-wedding-primary/30" />
              <Icon name="ring" size="md" className="text-wedding-primary" />
              <span className="w-8 sm:w-12 h-px bg-wedding-primary/30" />
            </div>
            <Text variant="script" className="text-wedding-primary text-lg sm:text-xl mt-4">
              {couple.groomShort} & {couple.brideShort}
            </Text>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-cream via-wedding-blush/40 to-wedding-gold-light/30" />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 sm:mb-4"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-wedding-cream to-wedding-blush shadow-lg border border-wedding-primary/20">
              <Icon name="email" size="md" className="text-wedding-primary" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Text variant="h2" className="text-wedding-text mb-1 sm:mb-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl">
              RSVP
            </Text>
            <Text variant="caption" className="text-wedding-primary/70 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-[10px] sm:text-xs">
              We hope you can make it
            </Text>
          </motion.div>
          <Divider variant="flower" className="my-5 sm:my-8" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-wedding-gold-light/50 border border-wedding-primary/15">
              <Icon name="calendar" size="sm" className="text-wedding-primary" />
              <Text variant="caption" className="text-wedding-text/80 text-[10px] sm:text-sm">
                Respond by <span className="text-wedding-primary font-semibold">{rsvp.deadline}</span>
              </Text>
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card-elegant rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-wedding-primary to-transparent rounded-full" />
            
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <FormField
                label="Full Name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange("name")}
                delay={0}
              />
              <FormField
                label="Email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                value={formData.email}
                onChange={handleChange("email")}
                delay={0.1}
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <FormField
                label="Phone"
                type="tel"
                name="phone"
                placeholder="+94 77 123 4567"
                value={formData.phone}
                onChange={handleChange("phone")}
                delay={0.2}
              />
              <FormField
                label="Number of Guests"
                type="select"
                name="guests"
                placeholder="Select number"
                options={[
                  { value: "1", label: "1 Guest" },
                  { value: "2", label: "2 Guests" },
                  { value: "3", label: "3 Guests" },
                  { value: "4", label: "4 Guests" },
                  { value: "5", label: "5+ Guests" },
                ]}
                value={formData.guests}
                onChange={handleChange("guests")}
                delay={0.3}
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <FormField
                label="Will You Attend?"
                type="select"
                name="attending"
                required
                options={[
                  { value: "yes", label: "💕 Joyfully Accept" },
                  { value: "no", label: "Regretfully Decline" },
                ]}
                value={formData.attending}
                onChange={handleChange("attending")}
                delay={0.4}
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <FormField
                label="Dietary Restrictions"
                name="dietary"
                placeholder="Any allergies or dietary requirements"
                value={formData.dietary}
                onChange={handleChange("dietary")}
                delay={0.5}
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <FormField
                label="Message for the Couple"
                type="textarea"
                name="message"
                placeholder="Share your wishes with Dilshan & Sanduni..."
                value={formData.message}
                onChange={handleChange("message")}
                delay={0.6}
              />
            </div>

            {/* Submit button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Button type="submit" variant="primary" size="md" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2 sm:gap-3">
                    <Icon name="heart" size="sm" />
                    Send RSVP
                  </span>
                )}
              </Button>
            </motion.div>
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-8 sm:mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Text variant="caption" className="text-wedding-text/60 mb-4 sm:mb-6 block text-xs sm:text-sm">
            Questions? Contact Dilshan:
          </Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${rsvp.contactEmail}`}
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/80 hover:bg-white border border-wedding-primary/15 hover:border-wedding-primary/30 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-wedding-gold-light flex items-center justify-center">
                <Icon name="email" size="sm" className="text-wedding-primary" />
              </div>
              <Text variant="caption" className="text-wedding-text/80 font-medium text-xs sm:text-sm truncate">
                {rsvp.contactEmail}
              </Text>
            </a>
            <a
              href={`tel:${rsvp.contactPhone.replace(/\s/g, '')}`}
              className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/80 hover:bg-white border border-wedding-accent/15 hover:border-wedding-accent/30 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-wedding-blush flex items-center justify-center">
                <Icon name="phone" size="sm" className="text-wedding-accent" />
              </div>
              <Text variant="caption" className="text-wedding-text/80 font-medium text-xs sm:text-sm">
                {rsvp.contactPhone}
              </Text>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
