import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import ResponseScreen from "./response-screen/response-screen";

const URL_IRAIL = 'https://api.irail.be/liveboard/?station=__station__&format=json';


const LiveBoard = ( { station } ) => {

    // Trsi état dans mon  composant
    // Loading => en attente du résultat
    // Error => Erreur rencontrée
    // Data => Quand tout va bien
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [timeRequest, setTimeRequest] = useState(new Date());


    useEffect(() => {
        
        const url = URL_IRAIL.replace('__station__', station)

        setLoading(true);
        setError(null);
        setData(null);

        // DIRECTEMENT DANS LE GET DE AXIOS
        // axios.get(`https://api.irail.be/liveboard/?station=${station}&format=json`)

        axios.get(url)
            .then(({data}) => {
                console.log(data);
                setData({
                    station: data.station,
                    departures: data.departures.departure.map(dep => ({
                        id: dep.vehicle,
                        destination: dep.station,
                        delay: dep.delay
                    }))
                });
            })
            .catch((error) => {
                console.log(error);
                setError('Station non trouvée');
            })
            .finally(() => {
                console.log('Fin de la requête');
                setLoading(false);
            })
    }, [station, timeRequest]);


    return (
        <div>
            { 
                isLoading ?
                    (<LoadingScreen />)
                    : error ? (<ErrorScreen message={error} />) 
                    : data && <>
                        <button onClick={() => setTimeRequest(new Date())}>Reload</button>

                        <p>{timeRequest.toLocaleDateString()} à {timeRequest.getHours()}h {timeRequest.getMinutes()}m {timeRequest.getSeconds()}s</p>
                        
                        <ResponseScreen station={data.station} departures={data.departures} />
                    </>
            }
        </div>

    )
}

const LoadingScreen = () => <p>Chargement en cours ...</p>;

const ErrorScreen = ({message}) => <p>Erreur : {message}</p>;

export default LiveBoard;