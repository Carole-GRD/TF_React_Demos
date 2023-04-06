import PropTypes from 'prop-types';

const CounterButtons = ({step, onAction}) => (

    <div>
        <button onClick={() => onAction(step)}>+ {step}</button>
        <button onClick={() => onAction(-step)}>- {step}</button>
    </div>
)

CounterButtons.defaultProps = {
    step : 1,
    onAction: () => {}   // NOOP (No Operation)
}


CounterButtons.propTypes = {
    step: PropTypes.number,
    onAction: PropTypes.func
}

export default CounterButtons;