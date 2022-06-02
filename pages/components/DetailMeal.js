import {React,Fragment} from 'react'
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import Image from 'next/image';


function DetailMeal({data}) {
    console.log("data");
    console.log(data);
    return (
        <div>
            <h1 className={styles.title}>
                {data.strMeal}
            </h1>
            <Image src={data.strMealThumb} alt="" width={250} height={250}/>
            <div>
                <p>{data.strInstructions}</p>
            </div>
        </div>
        
    )   
}

export default DetailMeal;