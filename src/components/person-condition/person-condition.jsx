
import PropTypes from 'prop-types';
import style from './person-condition.module.css';
import clsx from 'clsx';

const PersonCondition = ({ firstname, lastname, gender }) => {

    const classManuel = style['main'] + ' ' +
        (
            (gender === 'F') ? style['woman'] :
                (gender === 'M') ? style['man'] :
                    (gender === 'X') ? style['other'] : ''
        );

    const classClsx1 = clsx(
        style['main'],
        (gender === 'F') && style['woman'],
        (gender === 'M') && style['man'],
        (gender === 'X') && style['other']
    );

    const classClsx2 = clsx({
        [style['main']]: true,
        [style['woman']]: gender === 'F',
        [style['man']]: gender === 'M',
        [style['other']]: gender === 'X'

    });


    return (
        <>
            <p className={classClsx2}>
                Bienvenue à {(gender && gender !== 'X') && (
                    <span>{gender === 'F' ? 'Madame' : 'Monsieur'}</span>
                )} {firstname} {lastname}
            </p>
            {/* //////////////////////////////////////////////// */}
            <p>
                Bienvenue à
                {' '}
                {(gender && gender !== 'X') && (
                    <span>{gender === 'F' ? 'Madame' : 'Monsieur'}</span>
                )}
                {' '}
                {firstname} {lastname}
            </p>
        </>
    )
};



PersonCondition.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    gender: PropTypes.oneOf(['F', 'M', 'X'])
};


export default PersonCondition;