import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
    initialTime?: number; // in seconds
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime = 10 }) => {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    // Format time as MM:SS
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <span>
            {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </span>
    );
};

export default CountdownTimer;