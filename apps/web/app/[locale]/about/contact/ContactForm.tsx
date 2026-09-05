'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  organization: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold text-emerald-900 mb-6">Send us a message</h3>
      <div><label className="block text-sm font-medium text-slate-700">Name</label><input {...register('name')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" />{errors.name && <span className="text-red-500 text-sm">{String(errors.name.message)}</span>}</div>
      <div><label className="block text-sm font-medium text-slate-700">Email</label><input type="email" {...register('email')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" />{errors.email && <span className="text-red-500 text-sm">{String(errors.email.message)}</span>}</div>
      <div><label className="block text-sm font-medium text-slate-700">Organization</label><input {...register('organization')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" /></div>
      <div><label className="block text-sm font-medium text-slate-700">Subject</label><select {...register('subject')} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500"><option value="">Select a subject</option><option value="general">General Inquiry</option><option value="partnership">Partnership</option><option value="media">Media</option></select>{errors.subject && <span className="text-red-500 text-sm">{String(errors.subject.message)}</span>}</div>
      <div><label className="block text-sm font-medium text-slate-700">Message</label><textarea {...register('message')} rows={5} className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm p-3 border focus:ring-emerald-500 focus:border-emerald-500" />{errors.message && <span className="text-red-500 text-sm">{String(errors.message.message)}</span>}</div>
      <button type="submit" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 w-full font-bold transition-colors mt-4">Send Message</button>
    </form>
  );
}
