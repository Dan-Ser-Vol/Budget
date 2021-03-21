import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [click, setClick] = useState(0)
    const [step, setStep] = useState(1)
    useEffect(()=>{
        console.log( 'render', click)
    }, [])
    return (
        <div>
            <div>Count:{click}</div>
            <button onClick={() => setClick(click + step)}>Click</button>
            <br/>
            <input type="step" value={step} onChange={(e)=>setStep(+e.target.value)}/>
        </div>
    );
};

export default Counter;