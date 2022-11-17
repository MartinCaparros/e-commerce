import { gql } from "@apollo/client";

const getDataBanner = gql`
    query getDataBanner {
        informationCards {
            image,
            title,
            buttonText,
            description
        }
    }
`

export { getDataBanner }