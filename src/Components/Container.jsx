import Styles from './Container.module.css';
import PropTypes from 'prop-types';

export default function Container ({children}){
    return (
        <div className={Styles.parentContainer}>{children}</div>
    )
}

Container.propTypes = {
    children: PropTypes.node
};