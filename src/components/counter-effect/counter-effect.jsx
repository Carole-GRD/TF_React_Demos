import { useEffect } from "react";
import { useState } from "react";
import style from './counter-effect.module.css';


const CounterEffect = () => {


    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    

    // ON UPDATE
	// Effet sans dépendance => Il va se lancer à chaque changement de state
	useEffect(() => {
		console.log("RENDER");
	});


    // ON INIT
	useEffect(() => {
		console.log("ON INIT");
	}, []);


    // ON UPDATE
	// Effet avec dépendance => Il va se lancer à chaque changement de count
	useEffect(() => {
        console.log('ON UPDATE');
		if (count === 10) {
			document.title = `Youpi`;
		} else {
			document.title = `Vous avez cliqué ${count} fois`;
		}
		localStorage.setItem('counter', count);
	}, [count]);

	

	// ON INIT
	useEffect(() => {
        console.log('ON INIT');

        // ON DESTROY
		return () => {
			// Logique de nettoyage
			console.log("ON DESTROY");
			setCount(0);
		}
	}, []);


    return (
        <>
            {/* <h3 onClick={() => setIsActive(!isActive)} className={isActive ? 'active' : ''}> */}
            {/* ↑ mettre la classe dans le fichier app.js */}

            {/* ↓ avec la classe dans le fichier counter-effect.module.css */}
            <h3 onClick={() => setIsActive(!isActive)} className={isActive ? style.active : ''}>
                Counter Title
                </h3>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </>
    )
}


export default CounterEffect;