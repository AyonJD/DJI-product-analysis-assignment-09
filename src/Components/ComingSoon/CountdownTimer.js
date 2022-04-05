import { useState, useEffect } from 'react';
import './CountdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({ countdownTimestampMs }) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="countdown-timer grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="box-parent flex items-center justify-center h-16 w-24 md:h-28 md:w-52">
                <p className='md:text-3xl font-bold single-timer-box'>{remainingTime.days} Days</p>
            </div>
            <div className="box-parent flex items-center justify-center h-16 w-24 md:h-28 md:w-52">
                <p className='md:text-3xl font-bold single-timer-box'>{remainingTime.hours} Hours</p>
            </div>
            <div className="box-parent flex items-center justify-center h-16 w-24 md:h-28 md:w-52">
                <p className='md:text-3xl font-bold single-timer-box'>{remainingTime.minutes} Minutes</p>
            </div>
            <div className="box-parent flex items-center justify-center h-16 w-24 md:h-28 md:w-52">
                <p className='md:text-3xl font-bold single-timer-box'>{remainingTime.seconds} Seconds</p>
            </div>
        </div>
    );
}

export default CountdownTimer;