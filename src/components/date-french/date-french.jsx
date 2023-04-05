
import PropTypes from 'prop-types';

const DateFrench = ( {date} ) => {

    const dateFormatted = (new Date(date)).toLocaleDateString('fr', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }
    )

    return (
        <span>{dateFormatted}</span>
    )
}

DateFrench.propTypes = {
    date: PropTypes.string.isRequired
}

export default DateFrench;