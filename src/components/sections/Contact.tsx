import { useState, type FormEvent } from 'react'
import { FiMapPin } from 'react-icons/fi'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SocialLinks } from '@/components/ui/SocialLinks'
import { site } from '@/data/site'
import { ContactNotConfiguredError, sendMessage } from '@/services/contact'
import './Contact.css'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'unconfigured'

const STATUS_TEXT: Record<Exclude<Status, 'idle' | 'sending'>, string> = {
  sent: "Thanks! Your message is on its way. I'll reply within 2-3 business days.",
  error: `Something went wrong sending that. Please try again, or email ${site.email}.`,
  unconfigured: `The form isn't connected yet. Please email ${site.email} directly.`,
}

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus('sending')
    try {
      await sendMessage({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        message: String(data.get('message') ?? ''),
      })
      form.reset()
      setStatus('sent')
    } catch (err) {
      setStatus(err instanceof ContactNotConfiguredError ? 'unconfigured' : 'error')
    }
  }

  return (
    <Section id="contact" labelledBy="contact-title" containerClassName="contact__grid">
      <Reveal>
        <SectionHeading
          id="contact-title"
          title="Let's Connect!"
          lead="Open to full-time roles in the Greater Seattle area."
          align="start"
          reveal={false}
        />

        <form className="contact__form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            className="surface surface--flat"
            name="name"
            autoComplete="name"
            required
          />

          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            className="surface surface--flat"
            name="email"
            type="email"
            autoComplete="email"
            required
          />

          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" className="surface surface--flat" name="message" rows={5} required />

          <Button type="submit" disabled={status === 'sending'} arrow>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </Button>
          <p className="contact__status text-muted" role="status">
            {status !== 'idle' && status !== 'sending' ? STATUS_TEXT[status] : ''}
          </p>
        </form>
      </Reveal>

      <Reveal delay={120} className="contact__side">
        <h3 className="name-heading">{site.name}</h3>
        <SocialLinks variant="list" className="contact__list">
          <li>
            <FiMapPin aria-hidden="true" />
            <span>{site.location}</span>
          </li>
        </SocialLinks>
        <p className="contact__note text-muted">I'll reply within 2-3 business days.</p>
      </Reveal>
    </Section>
  )
}
