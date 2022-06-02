import {React,Fragment} from 'react'
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import Image from 'next/image';


function DetailMeal({data}) {
    return (
        <div>
            <main className={styles.main}>
                <div className={custom.meal_detail}>
                    <h1 className={styles.title}>
                        {data.strMeal}
                    </h1>
                    <Image src={data.strMealThumb} alt="" width={250} height={250}/>
                    <div>
                        <p>{data.strInstructions}</p>
                    </div>
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

export default DetailMeal;