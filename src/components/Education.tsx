import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { education } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './Education.css'

function Education() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Education"
          title="Academic Journey"
          subtitle="My educational path from secondary school to university"
          inView={inView}
        />

        <div className="education__grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className={`education__card ${edu.status === 'Ongoing' ? 'education__card--active' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="education__card-top">
                <span className="education__period">{edu.period}</span>
                {edu.status === 'Ongoing' && (
                  <span className="education__badge">In Progress</span>
                )}
              </div>
              <h3>{edu.degree}</h3>
              <p className="education__institution">{edu.institution}</p>
              <p className="education__desc">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
