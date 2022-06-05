import { useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCT_BY_CATEGORY } from "./schema";
import Button from '@material-ui/core/Button';
import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import Image from "next/image";
import Link from "next/link";

const Detail = ()=>{
    const router = useRouter();
    const {query} = router;
    const [getCategories, {loading,error,data}]=useLazyQuery(GET_PRODUCT_BY_CATEGORY,{
        variables : {
            categoryId : query.unik
        }
    })

    if(loading) return <p>Loading...</p>
    if(!data || error){
        return <Button variant="contained" color="primary" onClick={()=>getCategories(27)}>Load Category</Button>
    }

    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}> 
                    Products  {data.category.name}
                </h1>
                {
                        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-around' }}>
                            {
                                data.category.products.items?.map((item,index) => (
                                    <Link
                                        href={{pathname: `detail/${item.sku}`}} key={index}>
                                        <a>
                                            <div className={custom.item_card} key={index}>
                                                <center>
                                                    <p>{item.name}</p>
                                                    <Image width={100} height={100} src={item.image.url} alt={item.image.__typename} />
                                                    <br/>
                                                </center>
                                            </div>
                                        </a>
                                    </Link>
                                ))
                            }
                        </div>
                }
            </main>
        </div>
    )
}

export default Detail;