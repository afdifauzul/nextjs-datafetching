import { useRouter } from "next/router";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import dynamic from 'next/dynamic'

export async function getServerSideProps(ctx) {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ctx.params.id}`)
    const result = await res.json() 
    const meal=result.meals[0];
    // Pass data to the page via props
    return { props: { meal } }
}

const DetailMeal = dynamic(
    () => import('@/components/DetailMeal'),
    { loading: () => <p>...</p> }
);

const Detail = ({meal}) => {
    console.log("meal");
    console.log(meal);

    return (
        <div className={styles.container}>
            <DetailMeal data={meal}/>
        </div>
    )
}

export default Detail;