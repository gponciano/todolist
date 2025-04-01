import styles from "../ListContainer/Tasks.module.css";
import { HeaderItems } from "./HeaderItems";

type TasksProps = {
  tasks: string[]; 
};

export function Tasks({ tasks }: TasksProps) {
  return (
    <>
      <HeaderItems />

      <div className={styles.container}>
        {tasks.length === 0 ? (
          <li className={styles.todoItem}>
            <h4>You haven't added any tasks yet</h4>
            <p>Create tasks and organise your priorities</p>
          </li>
        ) : (
          <ul className={styles.taskList}>
            {tasks.map((task, index) => (
              <li key={index} className={styles.todoItem}>
                {task}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Tasks;
