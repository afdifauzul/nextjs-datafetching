import { useRouter } from "next/router";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'

const Detail = () => {
    const router = useRouter();

    const {query} = router;

    console.log(router);
    return (
        <div className={custom.container}>
            <main className={styles.main}>
                <div className={custom.news_detail}>
                    <h1 className={styles.title}>
                        {query.title}
                    </h1>
                    <div className={custom.image} >
                        <Image alt="" src={query.image} width={300} height={300}/>
                    </div>
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