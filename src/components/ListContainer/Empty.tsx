import styles from '../ListContainer/Empty.module.css';
import { HeaderItems } from './HeaderItems';

export function Empty(){
    return (
    <>
    <HeaderItems/>
    <div className={styles.container}>
        <ul>
            <h4>You haven't added any tasks yet</h4>
            <p>Create tasks and organise your priorities</p>
        </ul>
    </div>
    </>
    )
}

export default Empty;