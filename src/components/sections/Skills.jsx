import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../../data/portfolioData';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'UI Design': '🎨',
      'UX Research': '🔍',
      'Prototyping & Wireframing': '📱',
      'Interaction Design': '⚡',
    };
    return icons[category] || '💡';
  };

  const getCategoryColor = (index) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="section-padding bg-linear-to-b from-white/50 to-blue-50/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive toolkit of design skills that help me create exceptional user experiences
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={skillCategory.category}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`w-14 h-14 bg-linear-to-br ${getCategoryColor(categoryIndex)} rounded-xl flex items-center justify-center text-2xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {getCategoryIcon(skillCategory.category)}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    {skillCategory.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-linear-to-r from-blue-50 to-purple-50 text-slate-700 rounded-full text-sm font-medium border border-blue-100"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4"
              >
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4"
              >
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-slate-600">Years Experience</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4"
              >
                <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                <div className="text-slate-600">Happy Clients</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
