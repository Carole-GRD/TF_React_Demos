import PropTypes from 'prop-types';
import DateFrench from '../date-french/date-french';


const PeopleTableHeader = () => (
    <thead>
        <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Date de naissance</th>
        </tr>
    </thead>
)

const PeopleTableRow = ( { firstname, lastname, birthdate } ) => (
    <tr>
        <td>{firstname}</td>
        <td>{lastname}</td>
        <td>
            {birthdate && <DateFrench date={birthdate} />}
            {/* {birthdate ? <DateFrench date={birthdate} /> : 'N/A'} */}
        </td>
    </tr>
)

const PeopleTable = ( { people } ) => {

    return (
        <>
            <h3>Table de personnes</h3>
            <table>
                <PeopleTableHeader />
                <tbody>
                    {people.map(person => (
                        <PeopleTableRow key={person.id} {...person} />
                   ))}
                   {/* ↓ si on met des accolades, il faut le mot clé "return" !!! */}
                    {/* {people.map(person => {
                        return <PeopleTableRow key={person.id} {...person} />
                    })} */}
                </tbody>
            </table>
        </>
    )
}


PeopleTable.defaultProps = {
    people: []
}

PeopleTable.propTypes = {
    // shape -> contient au moins les propriétés suivantes
    // exact -> contient exactement ces propriétés
    people: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        // lastname: PropTypes.string,
        birthdate: PropTypes.string
    }))
}

export default PeopleTable;