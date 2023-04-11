import { useState } from "react";
import CounterEffect from "../../components/counter-effect/counter-effect"
import InfoEffect from "../../components/info-effect/info-effect";


const DemoEffect = () => {

    const [currentComponent, setCurrentComponent] = useState('counter-effect')


    return (
        <>
            <button onClick={() => setCurrentComponent('counter-effect')}>Counter</button>
            <button onClick={() => setCurrentComponent('info-effect')}>Info</button>
            {currentComponent === 'counter-effect' &&  <CounterEffect />}
            {currentComponent === 'info-effect' &&  <InfoEffect />}
           
        </>
    )
}

export default DemoEffect;