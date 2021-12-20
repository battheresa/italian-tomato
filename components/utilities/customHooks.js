import { useState, useEffect } from 'react';

export function useWindowDimensions() {
    const [ dimension, setDimension ] = useState({ width: undefined, height: undefined });
    const windowExist = typeof window !== 'undefined';

    useEffect(() => {
        if (windowExist) {
            function handleResize() {
                setDimension({ width: window.innerWidth, height: window.innerHeight });
            }
        
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [windowExist]);
    
    return dimension;
}

export function useWindowOffset() {
    const [ offset, setOffset ] = useState({ offsetX: 0, offsetY: 0 });
    const windowExist = typeof window !== 'undefined';

    useEffect(() => {
        if (windowExist) {
            function handleScroll() {
                setOffset({ offsetX: window.pageXOffset, offsetY: window.pageYOffset });
            }
        
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [windowExist]);
    
    return offset;
}

export function useMousedownTarget(attribute) {
    const [ target, setTarget ] = useState('');
    const windowExist = typeof window !== 'undefined';

    useEffect(() => {
        if (windowExist) {
            function handleMousedown(event) {
                switch (attribute) {
                    case 'grandparent':
                        setTarget(event.target.parentNode.parentNode);
                        break;
                    case 'parent':
                        setTarget(event.target.parentNode);
                        break;
                    case 'class':
                        setTarget(event.target.className);
                        break;
                    default:
                        setTarget(event.target.id);
                        break;
                }
            }
        
            window.addEventListener('mousedown', handleMousedown);
            return () => window.removeEventListener('mousedown', handleMousedown);
        }
    }, [windowExist]);
    
    return target;
}
