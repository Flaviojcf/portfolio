import axios from 'axios'
import { NextResponse } from 'next/server'
import { z } from 'zod'

const WEBHOOK_URL = process.env.WEBHOOK_URL!

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = bodySchema.parse(body)
    const messageData = {
      embeds: [
        {
          title: 'Mensagem de Contato',
          color: 0x4983f5,
          fields: [
            {
              name: 'Nome',
              value: name,
              inline: true,
            },
            {
              name: 'E-mail',
              value: email,
              inline: true,
            },
            {
              name: 'Mensagem',
              value: message,
            },
          ],
        },
      ],
    }
    await axios.post(WEBHOOK_URL, messageData)

    return NextResponse.json({
      message: 'Mensagem enviada com sucesso!',
    })
  } catch (err) {
    console.error(err)
    return NextResponse.error()
  }
}
