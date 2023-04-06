import PropTypes from 'prop-types';

const CounterReset = ({text, onReset, visible}) => {

    return (
        <>  
            {visible && (
                <button onClick={() => onReset()}>{text}</button>
            )}
        </>
    )
}


CounterReset.defaultProps = {
    text: 'Remettre à zéro',
    onReset: () => {},   // NOOP
    visible: true
}

CounterReset.propTypes = {
    text: PropTypes.string,
    onReset: PropTypes.func,
    visible: PropTypes.bool
}

export default CounterReset;