import PageLayout from "../layout/PageLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageLayout>
      <div className="bg-gray-50">
        {/* Hero Section with Video Background */}
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover "
            src={`https://player.vimeo.com/video/969906959?api=1&autoplay=1&controls=0&sidedock=0&loop=1&tit le=0&byline=0&portrait=0&muted=${
              isMuted ? 1 : 0
            }&background=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            data-ready="true"
          ></iframe>

          <div className="absolute inset-0 flex items-end justify-start p-5 sm:p-10 lg:p-20 z-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-2xl bg-white/20 backdrop-blur-lg rounded-xl p-8 border border-white/10 shadow-lg"
            >
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-bold mb-4 text-white"
              >
                Kuriftu Resorts <span className="text-amber-300">|</span> Smart
                Feedback System
              </motion.h1>

              <motion.div variants={itemVariants}>
                <p className="mb-4 text-white/90">
                  Enhancing guest experiences through:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base">
                  {[
                    "User-Friendly Interface",
                    "Real-Time Feedback",
                    "Advanced Analytics",
                    "Customizable Forms",
                    "Multi-Platform Support",
                    "Secure Data Storage",
                    "Automated Notifications",
                    "AI-Powered Insights",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-center text-white/90"
                    >
                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="mt-6">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition-all text-white"
                >
                  {isMuted ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Unmute
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Mute
                    </>
                  )}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Sections */}
        {[
          {
            title: "Lake Tana",
            description:
              "Located in the capital of the Amhara Region, Bahirdar, Kuriftu Resort & Spa Lake Tana represents the Kuriftu brands second resort venture. As we seek to expand across Ethiopia, Lake Tana with its historic and cultural value was the perfect choice for expansion. Paired with scenic views, wildlife excursions and religious routes - this destination offers a new adventure for our Kuriftu family!",
            image: "./src/assets/tana.webp",
            reverse: false,
          },
          {
            title: "Kuriftu Waterpark",
            description:
              "Whether you are looking to spend an afternoon of fun with family or friends, searching the perfect weekend getaway, planning a birthday or group event, or even surprising a loved one, Kuriftu Water Park is your ultimate choice for a premier entertainment destination with guaranteed fun!",
            image: "./src/assets/water-park.webp",
            reverse: true,
          },
          {
            title: "Birthday Celebrations",
            description:
              "Kuriftu Resorts, taking place in a beautifully decorated outdoor area. Children are gathered around a wooden table, surrounded by festive balloons, party decorations, and colorful hats. Adults are capturing the moment and enjoying the cheerful atmosphere. In the background, the vibrant water park and scenic setting add to the fun and lively mood of the occasion.",
            image: "./src/assets/birthday.webp",
            reverse: false,
          },
        ].map((section, index) => (
          <section
            key={index}
            className={`py-16 px-5 sm:px-10 lg:px-20 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            }`}
          >
            <div
              className={`max-w-7xl mx-auto flex flex-col ${
                section.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-1 overflow-hidden rounded-2xl shadow-xl"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="p-5 md:p-8">
                  <h2 className="font-bold text-3xl md:text-4xl mb-4 text-gray-800">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {section.description}
                  </p>
                  <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-medium transition-colors shadow-md hover:shadow-lg">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 px-5 sm:px-10 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Ready to Enhance Your Guest Experience?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 opacity-90"
            >
              Our smart feedback system helps you understand and improve your
              guests' satisfaction in real-time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-white text-amber-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:shadow-2xl mr-4">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors shadow-xl hover:shadow-2xl">
                Request Demo
              </button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
