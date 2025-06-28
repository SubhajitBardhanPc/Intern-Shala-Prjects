// src/components/cta.tsx
'use client';


import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Form imports
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
// REMOVE THIS IMPORT: import { useToast } from '@/components/ui/use-toast';
import { toast } from 'sonner'; // ADD THIS IMPORT FOR SONNER

// Define the Zod schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }).max(50, {
    message: 'Name must not exceed 50 characters.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }).max(500, {
    message: 'Message must not exceed 500 characters.'
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function CTA() {
  // REMOVE THIS LINE: const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.log('Contact Form Submitted:', values);

    // CALL SONNER'S TOAST DIRECTLY
    toast.success('Message Sent! 🚀', { // Use toast.success for a success type toast
      description: 'Thank you for reaching out! We will get back to you shortly.',
      duration: 5000,
      // Sonner styles differently than the old ShadCN toast.
      // Custom styling is usually done via sonner's theme property in the <Toaster />
      // or specific `classNames` on the toast call if needed, but not inline like the old toast.
      // REMOVE THIS LINE: className: "bg-green-600 text-white border-green-700",
    });

    form.reset();
  }

  return (
    <section
      id="cta"
      className="relative z-10 overflow-hidden py-24 px-4 sm:px-6 lg:px-8
                   bg-gradient-to-br from-black via-zinc-950 to-neutral-950 text-white text-center
                   rounded-3xl shadow-2xl mx-auto container my-20"
    >
      {/* Decorative Background Blur Lights */}
      <div className="absolute -top-32 left-1/2 w-[50rem] h-[50rem] -translate-x-1/2
                       bg-gradient-to-br from-btn-primary via-btn-secondary to-purple-800
                       opacity-15 rounded-full blur-3xl z-0" />

      <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
        >
          Ready to Elevate Your Digital Presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-subheading text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join the next-gen development workflow with{' '}
          <span className="text-btn-primary font-semibold">WebbyWolf</span> and transform your ideas into reality.
        </motion.p>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="w-full max-w-xl mt-12 p-8 bg-zinc-900 rounded-xl shadow-xl border border-gray-800"
        >
          <h3 className="font-heading text-3xl font-bold text-white mb-6 text-center">
            Send Us a Message
          </h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-subheading text-gray-200">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-btn-primary"
                        placeholder="Your Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-subheading text-gray-200">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-btn-primary"
                        placeholder="your@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Message Field */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-subheading text-gray-200">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-btn-primary min-h-[120px]"
                        placeholder="Your detailed message..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full px-8 py-3 text-lg rounded-full font-subheading font-semibold
                           bg-btn-primary text-white shadow-lg
                           hover:bg-btn-secondary hover:scale-105
                           transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-4 focus:ring-btn-primary focus:ring-opacity-50"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Submit Message 🚀'}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}