import { motion } from "framer-motion";
import { Leaf, Sprout, TreePine, Droplets } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Leaf,
      title: "Extensive Database",
      description: "Access detailed information about 55+ tree species with comprehensive botanical data and characteristics.",
    },
    {
      icon: Sprout,
      title: "Learn & Grow",
      description: "Discover fascinating facts about tree ecology and their Uses & Benefits in our ecosystem.",
    },
    {
      icon: TreePine,
      title: "QR Code Integration",
      description: "Scan QR codes to instantly access tree information and connect with conservation initiatives.",
    },
    {
      icon: Droplets,
      title: "Environmental Impact",
      description: "Learn about the positive impact trees have on the environment.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-16 sm:py-24 lg:py-32 bg-white">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#86CA6B]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#86CA6B]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B2418] mb-4 sm:mb-6">
            Why Choose Treepedia?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#86CA6B] to-[#70B85A] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-[#355D43] max-w-2xl mx-auto leading-relaxed">
            Comprehensive tools and resources to understand, explore, and preserve the natural world
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative p-6 sm:p-8 bg-gradient-to-br from-[#F5FBF2] to-white rounded-2xl border border-[#86CA6B]/20 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-[#86CA6B] to-[#70B85A] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0B2418] mb-3 group-hover:text-[#86CA6B] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4F7F65] leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#86CA6B] to-transparent w-0 group-hover:w-full transition-all duration-300 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;