import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { aboutContent } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './About.css'

function About() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <SectionHeader
          label="About"
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
          inView={inView}
        />

        <div className="about__grid">
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {aboutContent.paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            className="about__highlights"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {aboutContent.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="about__highlight-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <span className="about__highlight-label">{item.label}</span>
                <span className="about__highlight-value">{item.value}</span>
              </motion.div>
            ))}

            <motion.div
              className="about__quote"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <blockquote>
                "Every frame tells a story — I strive to make each one meaningful."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
