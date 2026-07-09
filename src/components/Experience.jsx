import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './Experience.css'

function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          subtitle="Hands-on roles that shaped my skills in video production and marketing"
          inView={inView}
        />

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="experience__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
            >
              <div className="experience__marker">
                <span className="experience__dot" />
              </div>

              <motion.div
                className="experience__card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="experience__card-top">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__type">{exp.type}</span>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                </div>

                <ul>
                  {exp.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
