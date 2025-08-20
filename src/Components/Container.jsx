import Styles from './Container.module.css';

export default function Container ({children}){
    return (
        <div className={Styles.parentContainer}>{children}</div>
    )
}