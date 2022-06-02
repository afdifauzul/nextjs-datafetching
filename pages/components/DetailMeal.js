import {React,Fragment} from 'react'
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import Image from 'next/image';


function DetailMeal({data}) {
    return (
        <div>
            <Image src={data.strMealThumb} alt="" width={250} height={250}/>
            <div>
                <p>{data.strInstructions}</p>
            </div>
        </div>
        
    )   
}

export default DetailMeal;