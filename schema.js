import {gql} from '@apollo/client'

export const GET_CATEGORIES = gql`
{
    categories(filters:{}){
        items{
            name
            id
            image_path
        }
    }
}`;

export const GET_PRODUCT_BY_CATEGORY = gql`
    query getCategories($categoryId: Int) 
    {
        category(id : $categoryId )
        {
            name
            id   
            products
            {
                items
                {
                    name
                    sku
                    image
                    {
                        url
                    }
                    price_range
                    {
                        maximum_price
                        {
                            regular_price{
                                value
                            }
                        }
                    }
                }
            }
        }
    }   
`;

export const GET_PRODUCT = gql`
    query getProduct($sku: String)
    {
        products(
            filter: {
                sku: {
                    eq:$sku
                }
            }
        ){
            items {
                name
                sku
                price {
                    regularPrice 
                    {
                        amount
                        {
                            currency
                            value
                        }
                    }
                }
                special_price
                image {
                    url
                }
                description {
                    html
                }
            }
        }
    }  
`;

export const POST_SUBSCRIBE = gql`
mutation postSubscribe($email : String)
{
    subscribe
    (
        input: 
        {
            email : $email
        }
    ){
        status 
        {
            code
            message
            response
        }
    }
}
`;