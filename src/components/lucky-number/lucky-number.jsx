
// si on a un composant qui n'a pas de logique,
// on peut faire un composant qui retourne directement du jsx
// les parenthèses ne sont pas obligatoires (autour du jsx)

import PropTypes from 'prop-types';

const LuckyNumber = ( {nb} ) => (
    <p>Nombre porte bonheur {nb}</p>
);

LuckyNumber.defaultProps = {
    nb : 42
};

LuckyNumber.propTypes ={
    nb : PropTypes.number
};

export default LuckyNumber;