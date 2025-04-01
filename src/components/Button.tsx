import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

export function Button({children, onClick }: ButtonProps){
    return (
        <button type='submit' className={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;