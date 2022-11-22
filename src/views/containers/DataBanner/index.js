import Button  from '../Button'
import { useQuery } from "@apollo/client";
import { StyledContainer } from "./styled";
import { getDataBanner } from "../../core/apolloServices/DataBanner";

const DataBanner = () => {

    const {loading, error, data} = useQuery(getDataBanner);
    if (error) return console.log(error);

    return (
        <StyledContainer>
            {loading
            ? <p>Cargando</p>
            :<div className="cardHolder"> {
                data.informationCards.map(({image, title, buttonText, description}) => {
                    return <div className="card">
                        <div className="imgContainer">
                            <img className="img" src={image} alt='imageb'></img>
                        </div>
                        <p className="title">{title}</p>
                        <p className="description">{description}</p>
                        <Button 
                            text={buttonText}
                            backgroundColor={'#FFF'}
                            color={'#E98A05'}
                            fontSize={'1rem'}
                            height ={'40px'}
                            width={'100%'}
                            backgroundColorHover={'#FFF'}
                            colorHover={'#5700F'}
                            maxHeight={'40px'}
                            maxWidth={'100%'}
                            fontWeight={'700'}
                            borderRadius={'10px'}
                            border = {'1px solid #E98A06'}
                        />
                    </div>
                })
            }
            </div>
            
            }
        </StyledContainer>
    );
}
 
export default DataBanner;