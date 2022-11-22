import { gql } from "@apollo/client";

const getMainProductBanner = gql`
    query getMainProductBanner($id: ID!) {
        mainProductBanner(where:{id: $id}) {
            id
            backgroundImage
            pillText
            title
            price
            onSalePrice
            paymentsPrice
            buttonText
            onSale
        }
    }
`

export { getMainProductBanner }