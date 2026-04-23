import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { projects } from '../../data/portfolioData';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Reset image index when project changes
  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding bg-white/50" ref={ref}>
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Deep dive into my design process and the solutions I've created for real-world challenges
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-linear-to-br from-blue-100 to-purple-100 overflow-hidden">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <motion.div
                        className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl">🎨</span>
                      </div>
                    </>
                  )}
                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {project.problem}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Case Study Button */}
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Case Study
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center z-10">
              <h3 className="text-2xl font-bold text-slate-800">{selectedProject.title}</h3>
              <motion.button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="text-slate-600 hover:text-slate-800 transition-colors"
                whileHover={{ rotate: 90 }}
              >
                <FaTimes size={24} />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Project Images */}
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <div className="relative">
                  <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Image Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all"
                      >
                        →
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                  <div className="h-full flex items-center justify-center text-8xl">
                    🎨
                  </div>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Case Study Sections */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">🎯 Problem</h4>
                  <p className="text-slate-600 whitespace-pre-line">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">🔍 Process</h4>
                  <p className="text-slate-600 whitespace-pre-line">{selectedProject.process}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">💡 Solution</h4>
                  <p className="text-slate-600 whitespace-pre-line">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">🛠️ Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              {selectedProject.liveUrl && (
                <div className="pt-4">
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    View Live Project
                  </motion.a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
