import styles from './InputField.module.css';

type InputFieldProps = {
    button?: React.ReactNode;
  };

export function InputField({button}: InputFieldProps) {
    return (
        <div className={styles.container}>
            <input 
            className={styles.input} 
            type="text" 
            placeholder="Add a new task"
            />

            {button}
            
        </div>
    )
}

export default InputField;