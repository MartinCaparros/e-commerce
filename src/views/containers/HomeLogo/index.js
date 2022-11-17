import { useMediaQuery } from "react-responsive";
import { StyledContainer } from "./styled";


const HomeLogo = () => {

    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})

    return <>
        { isLG && 
            <StyledContainer to="/">   
                calm.
            </StyledContainer> 
        }
    </>
    ;
}
 
export default HomeLogo;