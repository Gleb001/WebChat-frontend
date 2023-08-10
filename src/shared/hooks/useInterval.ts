import { useEffect } from "react";

export const useInterval = (callback: () => void, delay: number) => {

    useEffect(() => {
        let intervalId = setInterval(callback, delay);
        () => clearInterval(intervalId);
    }, []);

};