import { motion } from 'framer-motion'
import { personalInfo, navLinks } from '../data/portfolio'
import './Footer.css'

function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <motion.div
          className="footer__brand"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="footer__logo">Sobiya Shahi</span>
          <p>{personalInfo.tagline}</p>
        </motion.div>

        <nav className="footer__nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {year} {personalInfo.name}. Crafted with passion.
        </p>
      </div>
    </footer>
  )
}

export default Footer
