import {gql,useQuery} from '@apollo/client'
import Link from 'next/link'
import { GET_CATEGORIES } from "../../schema";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css';
import Image from 'next/image';
import useStyles from '../../styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { ButtonBase,Typography } from '@material-ui/core';
import Skeleton from '@mui/material/Skeleton';


function Index() {
    const styleCategories=useStyles();
    const {loading,error,data} = useQuery(GET_CATEGORIES)

    if(loading)return 'Loading...'
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
                    {data.categories.items?.map((item,index)=>(       
                            <Paper className={styleCategories.paper} key={index}>
                                    <Grid container spacing={2}>
                                        <Grid item >
                                            <ButtonBase className={styleCategories.image} >
                                                {item.image_path?(
                                                    <Image className="img" width={100} height={100} src={item.image_path} alt="" />
                                                ):(<Skeleton variant="rectangular" width={100} height={100} />)}
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column" spacing={10}>
                                                <Grid item xs>
                                                    <Typography gutterBottom variant="subtitle1">
                                                        {item.name}
                                                    </Typography>
                                                    <ButtonBase >
                                                        <Link href={{pathname:`/categories/${item.id}`}}>
                                                            <Typography variant="body2" gutterBottom>
                                                                See All Product
                                                            </Typography>
                                                        </Link>
                                                    </ButtonBase>
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

export default Index