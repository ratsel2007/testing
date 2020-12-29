import React, { useEffect, useState } from 'react';

export const Timer = () => {
    const [sec, setSec] = useState(59)
    const [min, setMin] = useState(1)

    const changeTime = () => {
        setSec(prev => prev - 1)
        if (sec === 0) {
            setSec(59)
            setMin(prev => prev - 1)
        }
    }

    useEffect(() => {
        let id = setInterval(changeTime, 1000)
        setTimeout(() => clearInterval(id), 120000)
    }, [])

    return (
        <div>
            <span>Оставшееся время: <span className='redtext'>{min} : {sec}</span> </span>
        </div>
    )
}