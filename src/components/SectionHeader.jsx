import { motion } from 'framer-motion'

function SectionHeader({ label, title, subtitle, inView }) {
  return (
    <div className="section-header">
      <motion.span
        className="section-header__label"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {label}
      </motion.span>
      <motion.h2
        className="section-header__title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="section-header__subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {subtitle}
      </motion.p>
      <motion.div
        className="section-header__line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
    </div>
  )
}

export default SectionHeader
