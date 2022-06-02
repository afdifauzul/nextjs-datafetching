import { useRouter } from "next/router";
import Image from "next/image";
import styles from '../../styles/Home.module.css'
import custom from '../../styles/custom.module.css'

const Detail = () => {
    const router = useRouter();

    const {query} = router;

    console.log(router);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {query.title}
                </h1>
                <div className={custom.news_card}>
                    <Image src={query.image} alt="Viral Anak Indigo" width={400} height={400}/>
                    <p>{query.content}</p>
                </div>
            </main>
            <style global jsx>{`
                body{
                    background: grey;
                }
            `}
                
            </style>
        </div>
    )
}

export default Detail;