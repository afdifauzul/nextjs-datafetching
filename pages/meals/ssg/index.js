import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css';
import {React,Fragment} from 'react'

export async function getStaticProps() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    const data = await res.json() 
    
    return {
        props: {
            data,
        },
    }
}

const SSG = ({data}) => {
    console.log(data)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className={styles.title}> 
                SSG
            </h1>
            {
                data.meals && data.meals.length > 0 ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                        {
                            data.meals?.map((meal,index) => (
                                    <Link
                                    href={{pathname: `ssg/${meal.idMeal}`}} key={index}>
                                        <div className={custom.meal_card} key={meal.idMeal}>
                                            <center>
                                                <p>{meal.strMeal}</p>
                                                <Image style={{width: '100px', height: '100px'}} src={meal.strMealThumb} alt={meal.strMeal} />
                                                <br/>
                                            </center>
                                        </div>
                                    </Link>
                                
                            ))
                        }
                    </div>
                ) : (
                    <p>Loading ...</p>
                )
            }
            </main>
        </div>
    );
};

export default SSG;