// import useMutation from "@apollo/client";
import { POST_SUBSCRIBE,GET_PRODUCT } from "../../../schema";
import Button from '@material-ui/core/Button';
import { useRouter } from "next/router";
import styles from '@/styles/Home.module.css'
import custom from '@/styles/custom.module.css'
import Image from "next/image";
import Link from "next/link";
import useState from "react";
import { subscribe } from "graphql";

const ProductDetail = ()=>{
    const Router = useRouter();
    console.log("Router");
    console.log(Router.query);
    const {product}  = Router.query;
    console.log("sku");
    console.log(product);
    const {loading,error,data}=useQuery(GET_PRODUCT,{
        variables: {
            sku: product,
        }
    });
    
    let input;
    const [postSubscribe] = useMutation(POST_SUBSCRIBE);
    const [email,setEmail] = useState("");
    const [responseStatus, setResponseStatus] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);
    const subscribe = async () => {
        const responseSubscribe=await postSubscribe({
            variables:{
                email:email
            }
        });
        console.log("responseSubscribe");
        console.log(responseSubscribe.data.subscribe.status.response);
        console.log(responseSubscribe.data.subscribe.status.message);
        setResponseStatus(responseSubscribe.data.subscribe.status.response)
        setResponseMessage(responseSubscribe.data.subscribe.status.message)
    }
    if(loading) return 'Loading...'
    if(error) return `Error! ${error.message}`
    // if(resSub.error) return `Error! ${resSub.error.message}`

    const item=data.products.items[0];
    // console.log(resSub.data.subscribe);
    // if(resSub.called) console.log(resSub.data) 
    // const {subscribe} = resSub.data;
    // console.log(subscribe);
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <div  key={item.sku} className={custom.item_detail}>
                    <h1 className={styles.title}>
                        {item.name}
                    </h1>
                    <br/>
                    <Image alt="" src={item.image.url} width={250} height={250}/>
                    <h2>
                        {item.price.regularPrice.amount.currency} {item.price.regularPrice.amount.value}
                    </h2>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: item.description.html }} />
                    </p>
                </div>
                <div className={custom.item_detail}> 
                    <h1 className={styles.title}>
                        Subscribe Now!
                    </h1>
                    <form onSubmit={e => {
                        e.preventDefault();
                        subscribe();
                        }}
                    >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required                            
                            placeholder="Your Email..."
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                        />
                        <button type="submit">Submit</button>
                        {responseStatus != null ? (
                            <>{    
                                responseStatus == "Failed" ?(
                                    <p>{responseMessage}</p>
                                ):(<p>{responseMessage}</p>)
                            }</>
                            ):(<></>)
                        }
                    </form>
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

export default ProductDetail;