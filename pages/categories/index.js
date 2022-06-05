import {gql,useQuery} from '@apollo/client'
import Link from 'next/link'
import { GET_CATEGORIES } from "./schema";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css';
import Image from 'next/image';

function index() {
    const {loading,error,data} = useQuery(GET_CATEGORIES)

    if(loading)return 'Loading...';
    if(error) return `Error! ${error}`
    console.log("data")
    console.log(data)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}> 
                    Categories
                </h1>
                <br/>
                <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-between' }}>
                    {data.categories.items.map((item,index)=>(       
                            <div className={custom.item_card} key={index}>
                                <Link href={{pathname:`/categories/${item.id}`}}>
                                    <a>
                                        <p>
                                            {item.name}
                                        </p>
                                        {item.image_path?(
                                            <Image width={100} height={100} src={item.image_path} alt="" />
                                        ):(<></>)}
                                        
                                    </a>   
                                </Link>
                            </div>
                        ))
                    }
                </div>

            </main>
        </div>
    )   
}

export default index