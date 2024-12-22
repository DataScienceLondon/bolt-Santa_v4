import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const { error } = await supabase
        .from('letters')
        .insert([data]);

      if (error) throw error;

      toast.success('Your letter has been sent to Santa!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact-form" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 max-w-2xl"
      >
        <h2 className="text-4xl font-bold text-center mb-8">Write to Santa</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full p-3 rounded bg-slate-800 border border-slate-700"
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              id="email"
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full p-3 rounded bg-slate-800 border border-slate-700"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block mb-2">Phone</label>
            <input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Phone is required' })}
              className="w-full p-3 rounded bg-slate-800 border border-slate-700"
              aria-invalid={errors.phone ? "true" : "false"}
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea
              id="message"
              {...register('message', {
                required: 'Message is required',
                maxLength: {
                  value: 1000,
                  message: 'Message cannot exceed 1000 characters'
                }
              })}
              className="w-full p-3 rounded bg-slate-800 border border-slate-700 h-32"
              aria-invalid={errors.message ? "true" : "false"}
            />
            {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-santa-red text-white py-4 rounded-full text-lg"
          >
            Send to Santa
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
