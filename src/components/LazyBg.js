import { useEffect, useRef, useState } from 'react';

export default function LazyBg({ src, style, children }) {
  const ref = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!ref.current || loaded) return;

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setLoaded(true);
        io.disconnect();
      }
    }, { rootMargin: '200px' });

    io.observe(ref.current);
    return () => io.disconnect();
  }, [loaded]);

  return (
    <div
      ref={ref}
      style={{
        backgroundImage: loaded ? `url(${src})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.3s ease-in',
        ...style
      }}
    >
      {children}
    </div>
  );
}
