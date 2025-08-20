import styles from './InnerContainer.module.css';
import PropTypes from 'prop-types';

export default function InnerContainer({children}){
    return (
        <div className={styles.innerContainer}>
            {children}
        </div>
    )
}

InnerContainer.propTypes = {
    children: PropTypes.node
};