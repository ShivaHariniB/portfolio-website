import type { ContactPayload } from '@/types'

/**
 * The endpoint that receives contact messages. Set VITE_CONTACT_ENDPOINT in
 * .env (see .env.example). Later this will point at an AWS API Gateway + Lambda
 * + SES route; until then any JSON form service works.
 */
const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined

export class ContactNotConfiguredError extends Error {
  constructor() {
    super('Contact endpoint is not configured')
  }
}

export async function sendMessage(payload: ContactPayload): Promise<void> {
  if (!endpoint) throw new ContactNotConfiguredError()

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!response.ok) throw new Error(`Contact request failed with status ${response.status}`)
}
