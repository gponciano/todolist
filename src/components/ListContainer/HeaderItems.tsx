import styles from '../ListContainer/HeaderItems.module.css'


export function HeaderItems() {
    return (
        <header className={styles.container}>
        <aside>
          <p>Created</p>
          <span></span>
        </aside>
  
        <aside>
          <p>Completed</p>
          <span>
            
          </span>
        </aside>
      </header>
)
}

