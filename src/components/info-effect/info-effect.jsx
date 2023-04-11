import { useEffect } from "react"


const InfoEffect = () => {

    // ON DETROY / CLEAN UP EFFECT / NETTOYAGE + MOUNT
    useEffect(() => {
        console.log('COUCOU');
        return () => {
            console.log('BYE BYE');
        }
    }, [])

    return <h3>Info Effect</h3>
}

export default InfoEffect;