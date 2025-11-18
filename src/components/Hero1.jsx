const Hero1 = () => {
  return (
    <div>
      <section className="relative overflow-hidden h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1680003625905-4f6ddea04926?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        {/* Light Overlay */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-[#F5FBF2]/60 via-[#F5FBF2]/50 to-[#F5FBF2]/60" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Animated Badge */}
          <div className="mb-8 inline-block animate-fade-in">
            <span className="px-4 py-2 bg-[#86CA6B]/20 border border-[#86CA6B]/50 rounded-full text-[#0B2418] text-sm font-semibold backdrop-blur-sm">
              🌿 Discover Our Planet's Green Sanctuary
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-lg">
            <span className="block text-[#0B2418] drop-shadow-md">Explore </span>
            <span className="text-[#86CA6B] drop-shadow-md">
              <span className="text-[#0B2418]">Nature's</span> Green Wealth
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#0B2418] font-semibold leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up-delay text-balance">
            Embark on a journey through Earth's most magnificent forests. Discover the ancient wisdom of trees, their hidden powers, and their vital role in sustaining all life on our world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <button className="px-8 py-4 bg-[#86CA6B] hover:bg-[#76B55B] text-black font-bold rounded-lg transition transform hover:scale-105 shadow-lg">
              Start Exploring
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-black font-bold rounded-lg border border-black/30 transition backdrop-blur-sm">
              Learn More
            </button>
          </div>

      
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.4s both;
        }

        .text-balance {
          text-wrap: balance;
        }
      `}</style>
    </div>
  )
}

export default Hero1