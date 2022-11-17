import { gql } from "@apollo/client";

const getHeaderBanner = gql`
    query getHeaderBanner($id: ID!) {
        headBanner(where:{id: $id}) {
            id
            text
            backgroundColor {
                hex
            }
            textColor {
                hex
            }
        }
    }
`

export { getHeaderBanner }