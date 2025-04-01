import styles from './App.module.css';
import './global.css';

import { Header } from './components/Header'
import { InputField } from './components/InputField';
import { Empty } from './components/ListContainer/Tasks';

export function App() {
  return (
    <main>
    
   <Header/>
   
   <section className={styles.content}>
    <div className={styles.taskInfoContainer}>
   <InputField input={[<input key="1" />]} />
  
   
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
