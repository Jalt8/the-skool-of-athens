export function initScrollProgress() {
  if (typeof window === 'undefined') return;

  const updateScrollProgress = () => {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (winScroll / height) * 100;
    
    document.documentElement.style.setProperty('--scroll-percent', `${scrolled / 100}`);
  };

  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress(); // Initial call

  return () => window.removeEventListener('scroll', updateScrollProgress);
} 