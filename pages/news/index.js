import Link from "next/link";
import { useRouter } from "next/router";
import {news} from "../../data";
import Image from "next/image";
import styles from '@/styles/Home.module.css'

const News = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className={styles.title}> 
                News 
            </h1>
            {
                news.map((item)=>(
                    <Link
                        href={{
                            pathname: `/news/${item.url}`,
                            query: {
                                content: item.content,
                                title:item.title,
                                image:item.image,
                            },
                        }}
                        as={`/news/${item.url}`}
                    >
                        <div className={styles.grid} key={item.id}>
                            <ul>
                                <center>
                                <Image src={item.image} width={100} height={100}/>
                                </center>
                                
                                    <h3>
                                        {item.title}
                                    </h3>
                                
                            </ul>
                        </div>
                    </Link>
                ))
            }
            </main>
        </div>
    );
};

export default News;