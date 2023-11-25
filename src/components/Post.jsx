import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/AndriuszzZ.png" />
                    <div className={styles.authorInfo}>
                        <strong>André Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
            </header>
        </article>
    )
}