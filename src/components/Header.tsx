import styles from './Header.module.css';
import logo from '../assets/rocket.svg'
import todo from '../assets/todo.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.rocket}><img src={logo} alt="website-logo"></img></div>
            <div className={styles.todo}><img src={todo} alt="writing"></img></div>
        </header>
    )
}

export default Header;