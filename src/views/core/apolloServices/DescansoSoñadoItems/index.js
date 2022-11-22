import { gql } from "@apollo/client";

const getDescansoSonadoItems = gql`
    query getDescansoSonadoItems {
        descansoSonadoItems {
            id
            text
            pillText
            image
        }
    }
`

export { getDescansoSonadoItems }