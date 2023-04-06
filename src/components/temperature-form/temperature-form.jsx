
import { useState } from 'react';
import { useId } from 'react';
import style from './temperature-form.module.css';

const TemperatureForm = () => {

    // Génération d'un id pour définir l'id des elements HTML
    const id = useId();

    // Création de variable de state pour les valeurs du formulaire
    const [tempSource, setTempSource] = useState('');
    const [choice, setChoice] = useState('C-to-F');
    const [tempResult, setTempResult] = useState('');

    // Gestion du submit du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        let result;
        const source = parseFloat(tempSource);
        if (choice === 'C-to-F') {
            // result = ((tempSource * 1.8) + 32).toFixed(2);
            result = ((source * 1.8) + 32).toFixed(2);
        }
        else if (choice === 'F-to-C') {
            // result = ((tempSource - 32) / 1.8).toFixed(2);
            result = ((source - 32) / 1.8).toFixed(2);
        }
        else {
            result = 'Conversion invalide'
        }

        setTempResult(result);
    }

    
    return (
        <>
            <form className={style['temp-convert']} onSubmit={handleSubmit} >
                <div className="">
                    <label htmlFor={id + 'temp'}>Température</label>
                    <input id={id + 'temp'} type="text" 
                        value={tempSource}
                        onChange={e => setTempSource(e.target.value)}
                    />
                </div>

                <div className="">
                    <label htmlFor={id + 'conversion'}>Type de conversion</label>
                    <select id={id + 'conversion'}
                        value={choice}
                        onChange={e => setChoice(e.target.value)}
                    >
                        <option value="C-to-F">Celcius vers Farhenheit</option>
                        <option value="F-to-C">Farenheit vers Celcius</option>
                    </select>
                </div>

                <div className="">
                    <button type="submit">Convertir</button>
                    <input type="text" value={tempResult} readOnly />   
                </div>

            </form>
        </>
    )

}

export default TemperatureForm;