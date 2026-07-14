import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Loader2, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const personalEmail = 'lahraouianas16@gmail.com'
const twitterUrl = 'https://x.com/LahraouiAnas'
const initialForm = { name: '', email: '', subject: '', message: '', website: '' }

const contactInfo = [
  { Icon: Mail, label: 'University Email', value: 'anas.lahraoui@usms.ac.ma', href: 'mailto:anas.lahraoui@usms.ac.ma' },
  { Icon: Mail, label: 'Personal Email', value: personalEmail, href: `mailto:${personalEmail}` },
  { Icon: GithubIcon, label: 'GitHub', value: 'github.com/anabkl', href: 'https://github.com/anabkl' },
  { Icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/anas-lahraoui-a772a5300', href: 'https://www.linkedin.com/in/anas-lahraoui-a772a5300/' },
  { Icon: TwitterIcon, label: 'X/Twitter', value: 'x.com/LahraouiAnas', href: twitterUrl },
]

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const isSending = status === 'sending'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status !== 'idle') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setStatusMessage('Sending your message...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.error || 'Message could not be sent.')
      }

      setStatus('success')
      setStatusMessage('Message sent successfully. I will reply by email.')
      setForm(initialForm)
    } catch (error) {
      setStatus('error')
      setStatusMessage(error.message || 'Failed to send message. Please try again later.')
    }
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all disabled:cursor-not-allowed disabled:opacity-60'

  return (
    <section id="contact" className="py-24 px-4" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mb-4"
            style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }}
          />
          <p className="text-gray-400 text-lg">
            Open to internships, collaboration, and practical AI or software projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                disabled={isSending}
                placeholder="Your Name"
                className={inputClass}
                autoComplete="name"
              />

              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                disabled={isSending}
                placeholder="Your Email"
                className={inputClass}
                autoComplete="email"
              />

              <label htmlFor="subject" className="sr-only">Subject</label>
              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                disabled={isSending}
                placeholder="Subject"
                className={inputClass}
              />

              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                disabled={isSending}
                rows={5}
                placeholder="Your Message"
                className={inputClass + ' resize-none'}
              />

              <label htmlFor="website" className="sr-only">Website</label>
              <input
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {statusMessage && (
                <div
                  className={`flex items-start gap-3 rounded-xl border px-4 py-3 text-sm ${
                    status === 'success'
                      ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-100'
                      : status === 'error'
                        ? 'border-red-400/30 bg-red-400/10 text-red-100'
                        : 'border-[#00f5ff]/30 bg-[#00f5ff]/10 text-cyan-100'
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status === 'success' ? (
                    <CheckCircle size={18} />
                  ) : status === 'error' ? (
                    <AlertCircle size={18} />
                  ) : (
                    <Loader2 size={18} className="animate-spin" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={isSending ? undefined : { scale: 1.02 }}
                whileTap={isSending ? undefined : { scale: 0.98 }}
                className="w-full py-3 rounded-xl font-semibold text-black flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                style={{ background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' }}
              >
                {isSending ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {isSending ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Let&apos;s connect</h3>
              <p className="text-gray-400 leading-relaxed">
                Use the form for internships, AI product collaborations, dashboards, automation, or
                full-stack projects. Your message is sent directly without opening an email app.
              </p>
            </div>

            {contactInfo.map(({ Icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:border-[#00f5ff]/40 transition-all"
                aria-label={`${label}: ${value}`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#00f5ff]/10 border border-[#00f5ff]/20">
                  <Icon size={20} className="text-[#00f5ff]" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
                  <p className="text-sm text-white font-medium">{value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
