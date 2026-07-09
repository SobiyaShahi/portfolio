import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import SectionHeader from './SectionHeader'
import './Projects.css'

function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <SectionHeader
          label="Projects"
          title="Featured Work"
          subtitle="Creative projects where I've applied my skills in video editing, design & marketing"
          inView={inView}
        />

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="project-card__header">
                <span className="project-card__category">{project.category}</span>
                <span className="project-card__org">{project.organization}</span>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="project-card__tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
