import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { socialLinks } from '../../data/portfolioData';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPaperPlane, FaCheck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'rupalirajput1727@gmail.com',
        },
        publicKey
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSocialIcon = (iconName) => {
    const icons = {
      linkedin: FaLinkedin,
      whatsapp: FaWhatsapp,
      mail: FaEnvelope,
    };
    return icons[iconName] || FaEnvelope;
  };

  return (
    <section id="contact" className="section-padding bg-white/50" ref={ref}>
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
              Get In <span className="gradient-text">Touch</span>
            </motion.h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-slate-600 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : submitStatus === 'success' ? (
                      <>
                        <FaCheck />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
                    >
                      Thank you for your message! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center"
                    >
                      Oops! Something went wrong. Please try again or contact me directly via email.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Let's Connect</h3>
                <p className="text-slate-600 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Email</div>
                      <a href="mailto:rupalirajput1727@gmail.com" className="text-slate-800 font-medium hover:text-blue-600 transition-colors">
                        rupalirajput1727@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      📍
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Location</div>
                      <a
                        href="https://www.google.com/maps/place/Surat,+Gujarat/@21.1591802,72.7398843,12z/data=!3m1!4b1!4m6!3m5!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607!16zL20vMDFoMWhu?authuser=0&entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 font-medium hover:text-blue-600 transition-colors"
                      >
                        Surat, Gujarat, India
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      💼
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Status</div>
                      <div className="text-slate-800 font-medium">Open to Opportunities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = getSocialIcon(social.icon);
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={24} />
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">⏰</div>
                  <div>
                    <div className="text-sm text-slate-600">Response Time</div>
                    <div className="text-slate-800 font-medium">Usually within 24-48 hours</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
