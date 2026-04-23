import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { galleryItems } from '../../data/portfolioData';
import { FaExpand, FaExternalLinkAlt } from 'react-icons/fa';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

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

  return (
    <section id="gallery" className="section-padding bg-linear-to-b from-blue-50/50 to-white/50" ref={ref}>
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Design <span className="gradient-text">Gallery</span>
            </motion.h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              A visual showcase of my design work across different categories and styles
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative aspect-square bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer"
                whileHover={{ y: -8 }}
                onClick={() => setSelectedImage(item)}
              >
                {/* Image */}
                {item.image && !item.image.includes('/api/placeholder') ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-linear-to-br from-blue-100 to-purple-100">
                    <div className="h-full flex items-center justify-center text-6xl">
                      🎨
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.category}</p>
                  </div>
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                  >
                    <FaExpand className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Image */}
              {selectedImage.image && !selectedImage.image.includes('/api/placeholder') ? (
                <div className="aspect-video bg-white">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="aspect-video bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center text-9xl">
                  🎨
                </div>
              )}

              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedImage.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setSelectedImage(null)}
                    className="text-slate-600 hover:text-slate-800 transition-colors"
                    whileHover={{ rotate: 90 }}
                  >
                    ✕
                  </motion.button>
                </div>

                <p className="text-slate-600 mb-6">
                  {selectedImage.description || `This design showcases my approach to ${selectedImage.category.toLowerCase()} design, focusing on user experience, visual hierarchy, and modern aesthetics.`}
                </p>

                {selectedImage.liveUrl && (
                  <motion.a
                    href={selectedImage.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaExternalLinkAlt />
                    View Full Project
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;
