import { useState } from "react";
import styles from "./InputField.module.css";
import Button from "./Button";

type InputFieldProps = {
  input: React.ReactElement[]; 
  onAddTask: (task: string) => void; 
};

export function InputField({ input, onAddTask }: InputFieldProps) {
  const [answer, setAnswer] = useState<string>(""); 

  function handleClick() {
    if (answer.trim() !== "") {
      onAddTask(answer); 
      setAnswer(""); 
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAnswer(e.target.value);
  }

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
    </div>
  );
}

export default InputField;
