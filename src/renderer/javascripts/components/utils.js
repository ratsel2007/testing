import React, { useEffect, useRef } from 'react';

export const useInterval = ({ callback, delay, ...args}) => {
    const savedCallback = useRef(...args)

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            if (savedCallback.current) {
                savedCallback.current(...args);
            }
        }
        if (delay !== null && delay !== undefined) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}