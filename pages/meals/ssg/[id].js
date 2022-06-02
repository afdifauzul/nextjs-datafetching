import { useRouter } from "next/router";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'

export async function getStaticProps(ctx) {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ctx.params.id}`)
    const result = await res.json() 
    const meal=result.meals[0];
    // Pass data to the page via props
    return { props: { meal } }
}


export async function getStaticPaths() {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    const result = await res.json() 
    const data=result.meals;

    const paths = data.map((item)=>{
        return{
            params:{id:item.idMeal.toString()},
        };
    })
    return {
        paths,
        fallback: false
    };
}

const Detail = ({meal}) => {
    console.log("meal")
    console.log(meal)
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    {meal.strMeal}
                </h1>
                <Image src={meal.strMealThumb} width={250} height={250}/>
                <div>
                    <p>{meal.strInstructions}</p>
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

export default Detail;