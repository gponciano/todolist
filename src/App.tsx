import styles from './App.module.css';
import './global.css';

import { Header } from './components/Header'
import { InputField } from './components/InputField';
import { Button } from './components/Button'
import { Empty } from './components/ListContainer/Empty';

export function App() {
  return (
    <main>
    
   <Header/>
   
   <section className={styles.content}>
    <div className={styles.taskInfoContainer}>
   <InputField/>
   <Button > 
    Add task
   </Button>
   
    </div>
    <div>
      <Empty/>
    <div>

      </div>
    </div>
   
   </section>
   </main>
  )
}
export default App;
