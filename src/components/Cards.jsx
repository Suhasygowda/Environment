import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import ReactLenis from "lenis/react";
import { useEffect, useRef, useState } from "react";

// UNSPLASH IMAGES (clean nature aesthetic)
const images = [
  "https://images.unsplash.com/photo-1534195003206-c8e1957f0d7c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1607347167442-6c6b6350c21b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583074961890-f8a441ad4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1666353532730-4745e7a67065?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1666542862201-0cfa27f923ea?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709730102303-2384ec2fa5c1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
];

// ✨ Unique short sentences for each card
const captions = [
  "Where the light meets the leaves.",
  "A peaceful moment crafted by nature.",
  "Silence speaks louder in the forest.",
  "Every tree hides a thousand stories.",
  "Nature paints better than humans ever will.",
  "Stillness, beauty, and pure green calm.",
  "A reminder that Earth is alive and breathing.",
];

const Cards = () => {
  return (
    <ReactLenis root>
      <section className="relative flex w-screen flex-col items-center gap-[10vh] px-4 pt-[10vh] pb-[10vh]">

        {/* CLEAN HEADING */}
       <h1 className="text-4xl md:text-6xl font-bold text-[#0B2418] text-center mb-12 drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
  Nature’s Visual{" "}
  <span className="text-[#86CA6B] drop-shadow-[0_4px_12px_rgba(134,202,107,0.35)]">
    Story
  </span>
</h1>



        {images.map((img, idx) => (
          <StickyCard 
            key={idx} 
            imgUrl={img} 
            caption={captions[idx]} 
          />
        ))}

      </section>
    </ReactLenis>
  );
};

const StickyCard = ({ imgUrl, caption }) => {
  const vertMargin = 10;
  const container = useRef(null);
  const [maxScrollY, setMaxScrollY] = useState(Infinity);

  const filter = useMotionValue(0);
  const negateFilter = useTransform(filter, (v) => -v);

  const { scrollY } = useScroll({ target: container });

  const scale = useTransform(scrollY, [maxScrollY, maxScrollY + 10000], [1, 0]);

  const isInView = useInView(container, {
    margin: `0px 0px -${100 - vertMargin}% 0px`,
    once: true,
  });

  scrollY.on("change", (y) => {
    let value = 1;
    if (y > maxScrollY) {
      value = Math.max(0, 1 - (y - maxScrollY) / 10000);
    }

    scale.set(value);
    filter.set((1 - value) * 100);
  });

  useEffect(() => {
    if (isInView) {
      setMaxScrollY(scrollY.get());
    }
  }, [isInView]);

  return (
    <motion.div
      ref={container}
      className="rounded-4xl sticky h-[200px] w-full max-w-4xl overflow-hidden bg-neutral-200"
      style={{
        scale: scale,
        rotate: filter,
        height: `${100 - 2 * vertMargin}vh`,
        top: `${vertMargin}vh`,
      }}
    >
      {/* IMAGE */}
      <motion.img
        src={imgUrl}
        alt={imgUrl}
        style={{ rotate: negateFilter }}
        className="h-full w-full scale-125 object-cover"
        sizes="90vw"
      />

      {/* ✨ TEXT OVERLAY (Clean + Minimal + Proper Contrast) */}
      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm md:text-base max-w-[80%] shadow-lg">
        {caption}
      </div>
    </motion.div>
  );
};

export { Cards };
