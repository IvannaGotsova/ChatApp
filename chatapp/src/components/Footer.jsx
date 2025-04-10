import styles from '../css/Footer.module.css'

function Footer () {
    return (
        <>
          <p className={styles.footerStyle}>&copy; {new Date().getFullYear()}, Chat App</p>
        </>
    )
}

export default Footer