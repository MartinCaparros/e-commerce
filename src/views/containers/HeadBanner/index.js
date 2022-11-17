import { StyledBanner } from "./styled";
import { getHeaderBanner } from "../../core/apolloServices/HeaderBanner";
import { useQuery } from '@apollo/client'

const HeadBanner = ({bannerId}) => {

    const {loading, error, data} = useQuery(getHeaderBanner, { 
        variables: {id: bannerId}
    });
    
    if (error) return console.log(error);

    return  <>
        {
            loading
            ? <p>Cargando...</p>
            : <StyledBanner style={{backgroundColor:data.headBanner.backgroundColor.hex, color:data.headBanner.textColor.hex}}>
                {data.headBanner.text}
            </StyledBanner>
        }
    </>;
}
 
export default HeadBanner;