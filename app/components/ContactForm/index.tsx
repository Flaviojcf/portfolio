'use client'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  function onSubmit(data: ContactFormData) {
    return console.log(data)
  }

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="Contato"
          title="Entre em contato"
          className="items-center text-center"
        />
        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg 
            placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('name')}
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg 
            placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className="w-full h-[138px] bg-gray-800 rounded-lg resize-none
            placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"
            maxLength={500}
            {...register('message')}
          />
          <Button className="mt-6 w-max mx-auto shadow-button">
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  )
}
