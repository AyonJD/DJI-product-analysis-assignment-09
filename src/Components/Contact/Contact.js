import React from 'react';
import CountdownTimer from '../ComingSoon/CountdownTimer';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import './Contact.css'

const Contact = () => {
    return (
        <>

            <div className='contact-bg pt-24 px-5 md:px-0'>
                <div className="text-center auto-type-box w-full md:w-1/2 mx-auto py-5 mb-16">
                    <AutoTyping className="text-2xl md:text-5xl font-bold"
                        active={true} // <boolean>
                        textRef={`Under Construction!...`} // <string>
                        writeSpeed={1000} // <number>
                        deleteSpeed={2000} // <number>
                        delayToWrite={1000} // <number>
                        delayToDelete={2000} // <number>
                    />
                    <BlinkCursor className="text-2xl md:text-5xl font-medium text-color"
                        active // <boolean>
                        blinkSpeed={500} // <number>
                    />
                <h1 className='text-color text-center text-xl md:text-3xl font-bold pt-4'>Will be back within-</h1>
                </div>
                <div className=' flex justify-center'>
                    <CountdownTimer countdownTimestampMs={1672509600000}></CountdownTimer>
                </div>
            </div>
        </>
    );
};

export default Contact;