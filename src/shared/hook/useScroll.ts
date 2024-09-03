// useScrollPosition.js
import { useEffect } from 'react';

export const useScrollPosition = () => {
  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem('scrollPosition', String(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 처음 렌더링될 때 스크롤 위치 복원
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};
