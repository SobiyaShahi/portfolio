import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { certificates } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './Certificates.css'

function Certificates() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="certificates" className="section certificates" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Certificates"
          title="Skills & Proficiencies"
          subtitle="Tools and platforms I've mastered through hands-on experience"
          inView={inView}
        />

        <div className="certificates__grid">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="certificate-card"
              initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
              animate={inView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
              transition={{ delay: 0.12 * i, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="certificate-card__icon">
                <span>🏆</span>
              </div>
              <div className="certificate-card__content">
                <div className="certificate-card__top">
                  <h3>{cert.title}</h3>
                  <span className="certificate-card__year">{cert.year}</span>
                </div>
                <p className="certificate-card__issuer">{cert.issuer}</p>
                <p className="certificate-card__desc">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
