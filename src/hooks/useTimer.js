import { useState, useEffect, useRef } from "react";

export const useTimer = () => {

    const [index, setIndex] = useState(0);
    const _endIndex = useRef(null);
    const _intervalID = useRef(null);

    const hasTimerEnded = false
    const isTimerRunning = _intervalID.current != null

    const update = () => {
        setIndex(index => index + 1 <= _endIndex.current ? index + 1 : 0)
    }

    const startTimer = () => {

        if (!hasTimerEnded && !isTimerRunning) {
            _intervalID.current = setInterval(update, 1000);
        }

    }

    const setLength = (val) => {
        _endIndex.current = val - 1;
    }

    const stopTimer = () => {
        clearInterval(_intervalID.current);
        _intervalID.current = null;
    }


    // clear interval when component unmounts
    useEffect(() => () => {
        clearInterval(_intervalID.current)
    }, [])

    return {
        index,
        setLength,
        startTimer,
        stopTimer,
    }
}