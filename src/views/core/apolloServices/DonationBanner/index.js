import { gql } from "@apollo/client";

const getDonationBanner = gql`
    query getDonationBanner {
        donationBanners {
            id
            css
            button
            image
            mainText
            secondaryText
            buttonColor {
                hex
            }
            buttonColorHover {
                hex
            }
        }
    }
`

export { getDonationBanner }