import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './Skills.css'

function Skills() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Skills"
          title="What I Bring to the Table"
          subtitle="Technical tools & personal strengths that power my creative work"
          inView={inView}
        />

        <div className="skills__grid">
          <motion.div
            className="skills__technical"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="skills__group-title">Technical Skills</h3>
            <div className="skills__bars">
              {skills.technical.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  className="skills__bar-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div className="skills__bar-header">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skills__bar-track">
                    <motion.div
                      className="skills__bar-fill"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: 0.4 + i * 0.08, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills__soft"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="skills__group-title">Soft Skills</h3>
            <div className="skills__tags">
              {skills.soft.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skills__tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
