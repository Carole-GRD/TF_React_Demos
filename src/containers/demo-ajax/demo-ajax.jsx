import { useState } from "react"
import LiveBoard from "../../components/demo-ajax/liveboard/liveboard";
import SearchBar from "../../components/demo-ajax/search-bar/search-bar";


export default function DemoAjax() {

    const [searchStation, setStation] = useState(null);

    // Méthode envoyer aux enfants pour mettre à jour le parent
    const handleStation = (station) => {
        setStation(station);
    }


    return (
        <>
            <SearchBar onSearch={handleStation}/>
            { searchStation && <LiveBoard station={searchStation} /> }
        </>
    )
}

