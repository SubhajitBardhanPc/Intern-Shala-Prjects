'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

// ShadCN UI Components
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

// Zod Schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(500, { message: 'Message cannot exceed 500 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    console.log("Form values:", values);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert('✅ Message sent successfully!');
    reset(); // Clear form
  };

  return (
  <section
    id="contact"
    className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-zinc-950 to-neutral-950 text-white rounded-3xl shadow-2xl mx-auto container my-20"
  >
    <div className="relative z-20 max-w-3xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-heading text-5xl md:text-6xl font-bold mb-6 leading-tight"
      >
        Let’s Connect ✨
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
      >
        Fill out the form and we’ll reach out soon. No spam. Just real human talk.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="backdrop-blur-md bg-zinc-900/60 border border-zinc-700 rounded-xl p-10 shadow-2xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-sm text-gray-300">Name</Label>
            <Input
              id="name"
              type="text"
              {...register('name')}
              placeholder="John Doe"
              className="mt-2 bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-btn-primary transition-all duration-300"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder="you@example.com"
              className="mt-2 bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-btn-primary transition-all duration-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <Label htmlFor="message" className="text-sm text-gray-300">Message</Label>
          <Textarea
            id="message"
            rows={5}
            {...register('message')}
            placeholder="Hey, I’d like to work with you on..."
            className="mt-2 bg-zinc-800 border border-zinc-700 text-white focus:ring-2 focus:ring-btn-primary transition-all duration-300"
          />
          {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 rounded-lg bg-btn-primary text-white font-bold text-lg hover:scale-105 hover:bg-btn-secondary transition-all duration-300"
        >
          {isSubmitting ? 'Sending...' : '🚀 Send Message'}
        </Button>
      </motion.form>
    </div>
  </section>
);

}
