import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons'

const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Contact']

const socials = [
  { Icon: GithubIcon, href: 'https://github.com/anabkl', label: 'GitHub' },
  { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/anas-lahraoui-a772a5300/', label: 'LinkedIn' },
  { Icon: TwitterIcon, href: 'https://x.com/LahraouiAnas', label: 'X/Twitter' },
]

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#111] border-t border-white/10 pt-12 pb-6 px-4" aria-label="Footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Logo + Bio */}
          <div>
            <div className="text-2xl font-bold font-mono gradient-text mb-3">A. Lahraoui</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI student and developer passionate about intelligent systems, modern web development,
              and real-world digital products.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer links">
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link.toLowerCase())}
                    className="text-sm text-gray-400 hover:text-[#00f5ff] transition-colors"
                    aria-label={`Go to ${link}`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-[#00f5ff] hover:border-[#00f5ff]/40 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Anas Lahraoui. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Built with <span className="text-[#00f5ff]">React</span> &amp;{' '}
            <span className="text-[#bf00ff]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
