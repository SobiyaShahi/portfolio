import { motion } from 'framer-motion'
import { HiArrowDown, HiMail } from 'react-icons/hi'
import { heroContent } from '../data/portfolio'
import './Hero.css'

function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="hero__grid" />
      </div>

      <div className="hero__content container">
        <motion.div
          className="hero__text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero__greeting" variants={itemVariants}>
            {heroContent.greeting}
          </motion.span>

          <motion.h1 className="hero__name" variants={itemVariants}>
            {heroContent.headline.split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.12,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p className="hero__subheadline" variants={itemVariants}>
            {heroContent.subheadline}
          </motion.p>

          <motion.p className="hero__description" variants={itemVariants}>
            {heroContent.description}
          </motion.p>

          <motion.div className="hero__actions" variants={itemVariants}>
            <motion.button
              className="btn btn--primary"
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {heroContent.ctaPrimary}
            </motion.button>
            <motion.button
              className="btn btn--outline"
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiMail />
              {heroContent.ctaSecondary}
            </motion.button>
          </motion.div>

          <motion.div className="hero__stats" variants={itemVariants}>
            {[
              { value: '2+', label: 'Years Learning' },
              { value: '5+', label: 'Creative Tools' },
              { value: '2', label: 'Work Experiences' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="hero__stat"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1 }}
              >
                <span className="hero__stat-value">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-dot hero__card-dot--red" />
              <span className="hero__card-dot hero__card-dot--yellow" />
              <span className="hero__card-dot hero__card-dot--green" />
            </div>
            <div className="hero__card-body">
              <div className="hero__avatar">
                <span>SS</span>
              </div>
              <h3>Sobiya Shahi</h3>
              <p>Video Editor & Digital Creator</p>
              <div className="hero__card-tags">
                <span>Premiere Pro</span>
                <span>Photoshop</span>
                <span>Marketing</span>
              </div>
            </div>
            <motion.div
              className="hero__card-float hero__card-float--1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎬 Editing
            </motion.div>
            <motion.div
              className="hero__card-float hero__card-float--2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ✨ Creative
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero__scroll"
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-label="Scroll to about section"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown />
        </motion.span>
        <span>Discover More</span>
      </motion.button>
    </section>
  )
}

export default Hero
