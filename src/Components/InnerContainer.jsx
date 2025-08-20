import './InnerContainer.module.css';
import PropTypes from 'prop-types';

export default function InnerContainer({children}){
    return (
        <div className='innerContainer'>
            {children}
        </div>
    )
}

InnerContainer.propTypes = {
    children: PropTypes.node
};