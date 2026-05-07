import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const personalEmail = 'lahraouianas16@gmail.com'
const twitterUrl = 'https://x.com/LahraouiAnas'

const contactInfo = [
  { Icon: Mail, label: 'University Email', value: 'anas.lahraoui@usms.ac.ma', href: 'mailto:anas.lahraoui@usms.ac.ma' },
  { Icon: Mail, label: 'Personal Email', value: personalEmail, href: `mailto:${personalEmail}` },
  { Icon: GithubIcon, label: 'GitHub', value: 'github.com/anabkl', href: 'https://github.com/anabkl' },
  { Icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/anas-lahraoui-a772a5300', href: 'https://www.linkedin.com/in/anas-lahraoui-a772a5300/' },
  { Icon: TwitterIcon, label: 'X/Twitter', value: 'x.com/LahraouiAnas', href: twitterUrl },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = form.subject || 'Portfolio contact'
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n')

    window.location.href = `mailto:${personalEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00f5ff] focus:ring-1 focus:ring-[#00f5ff] transition-all'

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
          <div className="w-24 h-1 mx-auto rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #00f5ff, #bf00ff)' }} />
          <p className="text-gray-400 text-lg">Open to internships, collaboration, and practical AI or software projects.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <CheckCircle className="mx-auto mb-4 text-[#00f5ff]" size={42} />
                <h3 className="text-xl font-bold gradient-text mb-2">Email Draft Opened</h3>
                <p className="text-gray-400" aria-live="polite">Your email app should open with the message ready to send.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 px-6 py-2 rounded-full text-sm border border-[#00f5ff] text-[#00f5ff] hover:bg-[#00f5ff]/10 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
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
                  rows={5}
                  placeholder="Your Message"
                  className={inputClass + ' resize-none'}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl font-semibold text-black flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #00f5ff, #bf00ff)' }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
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
                Whether it is an internship opportunity, an academic collaboration, or a real-world
                AI/software project, I&apos;m always happy to connect and learn from serious work.
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
