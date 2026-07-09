import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useInView } from '../hooks/useInView'
import { personalInfo } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './Contact.css'

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you"
          inView={inView}
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="contact__intro">
              I'm always open to discussing new opportunities, creative collaborations,
              or simply connecting with like-minded people in the digital media space.
              Drop me a message and I'll get back to you as soon as I can.
            </p>

            <div className="contact__details">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="contact__detail"
                whileHover={{ x: 6 }}
              >
                <HiMail />
                <div>
                  <span>Email</span>
                  <p>{personalInfo.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="contact__detail"
                whileHover={{ x: 6 }}
              >
                <HiPhone />
                <div>
                  <span>Phone</span>
                  <p>{personalInfo.phone}</p>
                </div>
              </motion.a>

              <div className="contact__detail">
                <HiLocationMarker />
                <div>
                  <span>Location</span>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="contact__social">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiMail />
              </motion.a>
              <motion.a
                href="#"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram />
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" placeholder="Project Collaboration" required />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or idea..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn--primary contact__submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? (
                'Message Sent! ✓'
              ) : (
                <>
                  <HiPaperAirplane />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
