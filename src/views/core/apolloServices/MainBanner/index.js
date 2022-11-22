import { gql } from "@apollo/client";

const getMainBanner = gql`
    query getMainBanner($id: ID!) {
        mainBanner(where:{id: $id}) {
            id
            backgroundImage
            mainText
            boldMainText
            buttonText
            image
        }
    }
`

export { getMainBanner }