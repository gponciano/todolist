import { useEffect, useState } from 'react';
import styles from './InputField.module.css';
import Button from './Button';

type InputFieldProps = {
    button?: React.ReactNode;
    input: React.ReactElement[];
  };


export function InputField({button, input}: InputFieldProps) {

    const [ state, setState ] = useState<string[]>([]);
    const [answer, setAnswer ] = useState<string>('')

    function handleClick(){
        if (answer.trim() !== ""){
        setState([...state, answer ]);
        setAnswer('');
    }}

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
       setAnswer(e.target.value)
    }

    useEffect(() => 
        {console.log(state);
        },  [state]);

    return (
        <div className={styles.container}>
        {input.map((_, index) => (
            <input 
            key={index}
            className={styles.input} 
            type="text" 
            placeholder="Add a new task"
            value={answer}
            onChange={handleChange}
            />
        ))}
            <Button onClick={handleClick}>Add Task</Button>
            {button}
        
        </div>
        );
    }

export default InputField;