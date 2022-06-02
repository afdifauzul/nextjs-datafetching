import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

function DetailMail({data}) {
    return (
        <div>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {data.strMeal}
                </h1>
                <Image src={data.strMealThumb} width={250} height={250}/>
                <div>
                    <p>{data.strInstructions}</p>
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

export default DetailMail;