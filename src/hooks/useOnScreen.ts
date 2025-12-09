import { useState, useEffect } from 'react';

export const useOnScreen = (ref: React.RefObject<HTMLDivElement | null>, rootMargin: string = "0px"): boolean => {
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    observer.unobserve(element);
                }
            },
            { rootMargin }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [ref, rootMargin]);
    return isIntersecting;
};
