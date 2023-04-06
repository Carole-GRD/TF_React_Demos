import { useState } from "react";


const Multi3 = () => {

    const [multiplier, setMultiplier] = useState(1);

    const handleUp = () => {
        // console.log('Avant le set : ', multiplier);

        // ↓ ne pas utiliser pour faire évoluer une valeur
        // setMultiplier(multiplier + 1);
        // setMultiplier(multiplier + 1);

        // pour faire évoluer une valeur dans le temps
        // il faut toujours utiliser une fonction fléchée
        // par exemple, si on décommente la seconde ligne
        // la valeur sera incrémentée deux fois de 1
        setMultiplier(multiplier => multiplier + 1);
        // setMultiplier(multiplier => multiplier + 1); 

        // pour donner une valeur définie
        // setMultiplier(42);

        // console.log('Après le set : ', multiplier);
    }

    const handleDown = () => {
        setMultiplier(m => m - 1);
    }

    return (
        <div>
            {/* {console.log('Render : ', multiplier)} */}
            {/* <h3>1 x 3 = 3</h3> */}
            <h3>{multiplier} x 3 = {multiplier * 3}</h3>
            <div>
                <button onClick={handleUp}>Next</button>
                <button onClick={handleDown}>Previous</button>
            </div>
        </div>
    )
}

export default Multi3;