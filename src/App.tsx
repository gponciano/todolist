import { useState } from "react";
import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header";
import { InputField } from "./components/InputField";
import { Tasks } from "./components/ListContainer/Tasks";

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);

  function addTask(newTask: string) {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
    }
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <InputField input={[<input key="1" />]} onAddTask={addTask} />
        </div>

        <div>
          <Tasks tasks={tasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
