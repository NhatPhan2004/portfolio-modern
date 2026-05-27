import { useEffect, useRef, useState } from "react";

const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);

          // Dừng theo dõi sau khi đã chạy animation lần đầu
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      },
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, inView };
};

export default useScrollAnimation;
