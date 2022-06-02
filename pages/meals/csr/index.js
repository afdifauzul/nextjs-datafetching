import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from '@/styles/Home.module.css';
import custom from '@/styles/custom.module.css';
import { useState,useEffect } from "react";

const CSR = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
    const fetchData=async ()=>{
        const response = await fetch ('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const result = await response.json();
        setData(result.meals);
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true)
        fetchData();
    }, [])
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No data</p>
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className={styles.title}> 
                CSR 
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    data.map(meal => (
                        <div className={custom.meal_card} key={meal.idMeal}>
                            <center>
                                <p>{meal.strMeal}</p>
                                <Image width={100} height={100} src={meal.strMealThumb} alt={meal.strMeal} />
                                <br/>
                            </center>
                        </div>
                    ))
                }
            </div>
            </main>
        </div>
    );
};

export default CSR;