import { useState } from "react";
import CounterButtons from "../../components/counter/counter-buttons/counter-buttons";
import CounterDisplay from "../../components/counter/counter-display/counter-display";
import CounterReset from "../../components/counter/counter-reset/counter-reset";

const INITIAL_COUNT = 0;


const Counter = () => {

    const [count, setCount] = useState(INITIAL_COUNT);

    const handleModifyCount = (step) => {
        setCount(c => c + step)
    }

    const handleResetCount = () => {
        setCount(0);
    }

    return (
        <>
            <h3>Compteur</h3>

            <CounterDisplay countValue={count} />
            <CounterDisplay countValue={count} message={'Compteur'} />

            <CounterButtons step={1} onAction={handleModifyCount} />
            <CounterButtons step={5} onAction={handleModifyCount} />
            <CounterButtons step={10} onAction={handleModifyCount} />

            <CounterReset visible={count !== INITIAL_COUNT} onReset={handleResetCount} />
        </>
    )
}

export default Counter;