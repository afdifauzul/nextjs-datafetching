import { useLazyQuery } from "@apollo/client";
import { GET_CATEGORIES, GET_PRODUCT_BY_CATEGORY } from "../../schema";
import Button from '@material-ui/core/Button';
import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import Image from "next/image";
import Link from "next/link";
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ButtonBase,Typography } from '@material-ui/core';


const Detail = ()=>{
    const styleCategories=useStyles();
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
                
                <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'space-around' }}>
                    {
                        data.category.products.items.map((item,index) => (
                                    <Paper className={styleCategories.product} key={index}>
                                        <Grid container 
                                        display="flex"
                                        direction="row"
                                        justifyContent="space-between"
                                        spacing={2}>
                                            <Grid item>
                                                <ButtonBase className={styleCategories.image} >
                                                    <Image width={100} height={100} src={item.image.url} alt={item.image.__typename} />
                                                </ButtonBase>
                                            </Grid>
                                            <Grid item xs={12} sm container>
                                                <Grid item xs container direction="column" spacing={10}>
                                                    <Grid item xs>
                                                        <Typography variant="subtitle1">
                                                            {item.name}
                                                        </Typography> 
                                                        <Link
                                                            href={{pathname: `detail/${item.sku}`}} key={index}>
                                                            <Button variant="contained" color="primary" >
                                                                Detail
                                                            </Button>
                                                        </Link>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Detail;