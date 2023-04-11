

const ResponseScreen = ( { station, departures } ) => {

    const departuresJSX = departures.map((dep) => <li key={dep.id}>{dep.destination} {dep.delay}</li>)

    return (
        <>
            <h3>{station}</h3>
            <ul>
                {departuresJSX}
            </ul>
        </>
    )
}

export default ResponseScreen;