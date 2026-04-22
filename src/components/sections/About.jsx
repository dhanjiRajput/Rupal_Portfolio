import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaUsers, FaPencilRuler, FaHeart } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const values = [
    {
      icon: FaUsers,
      title: 'User-Centered',
      description: 'Every design decision starts with understanding the people who will use the product.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Balancing creativity with practicality to deliver solutions that stand out.',
    },
    {
      icon: FaPencilRuler,
      title: 'Precision',
      description: 'Paying attention to every pixel and interaction to ensure polished experiences.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Genuine love for creating meaningful digital experiences that make a difference.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white/50" ref={ref}>
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image/Visual Side */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-100 to-purple-100 p-8 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    👩‍💻
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Rupal Kidecha</h3>
                  <p className="text-slate-600">UI/UX Designer</p>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      Based in India
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full" />
                      5+ Years Experience
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-700">
                      <span className="w-2 h-2 bg-pink-600 rounded-full" />
                      Open to Opportunities
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Designing with Purpose & Passion
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  I'm a passionate UI/UX designer dedicated to creating digital experiences that not only look beautiful but also solve real problems. With a strong foundation in both design principles and user research, I bridge the gap between user needs and business goals.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  My Approach
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  I believe that great design is invisible — it just works. My process combines deep user research, iterative prototyping, and data-driven decisions to create interfaces that users love. Every project starts with listening and ends with delightful experiences.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  What I Do
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Design Systems', 'Usability Testing'].map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-2 text-slate-700"
                      whileHover={{ x: 5 }}
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-10">
              My Core Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-lg card-hover"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="text-white text-xl" />
                  </motion.div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
