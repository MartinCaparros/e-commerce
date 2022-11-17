import { gql } from "@apollo/client";

const getProductCards = gql`
    query getCards {
        productCards {
            id
            title
            boldTitle
            onSale
            onSalePrice
            price
            pill
            productImage
            textColor {
                hex
            }
        }
    }
`

export { getProductCards }