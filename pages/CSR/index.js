import Link from "next/link";
import { useRouter } from "next/router";
import {news} from "../../data";
import Image from "next/image";
import styles from '../../styles/Home.module.css'

const News = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className={styles.title}> 
                CSR 
            </h1>
            </main>
        </div>
    );
};

export default News;