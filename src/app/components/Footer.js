import Image from "next/image";
import styles from "../styles/footer.module.css";
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <ul>
                    <li><p>Instagram</p></li>
                    <li><p>Facebook</p></li>
                    <li><p>Youtube</p></li>
                    <li><p>Twitter</p></li>
                </ul>
            </div>
            <p className={styles.texto}>Servindo bem desde 1989</p>
            <Image className={styles.logo}
                src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"}
                width={165}
                height={50}
            />
        </footer>
    )
}