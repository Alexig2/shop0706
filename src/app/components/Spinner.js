import styles from '../styles/spinner.module.css'
import Image from 'next/image'

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <Image width={50} height={50} alt='' src={'/loading.svg'} />
        </div>
    );
}