import styles from '../css/Header.module.css'

function Header () {
    return (
        <>
          <h1 className={styles.headerStyle}><button className={styles.chatButton} onClick={() => window.open(`${window.location.origin}/index`, '_blank')}>HOME</button>CHAT APP</h1>
        </>
    )
}

export default Header