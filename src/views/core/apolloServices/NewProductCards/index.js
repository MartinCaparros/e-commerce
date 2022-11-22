import { gql } from "@apollo/client";

const getNewProductCards = gql`
    query getNewProductCards {
        newProductCards {
            id
            card {
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
    }
`

export { getNewProductCards }