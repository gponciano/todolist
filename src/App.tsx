import styles from './App.module.css';
import './global.css';
import React from 'react';
import { Header } from './components/Header'
import { InputField } from './components/InputField';
import { Button } from './components/Button'

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
   
   </section>
   </main>
  )
}
export default App;
