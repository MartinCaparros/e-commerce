import Button  from "../Button";
import { theme } from "../../../styled";
import { useQuery } from "@apollo/client";
import { StyledContainer } from "./styled";
import { getMainBanner } from "../../core/apolloServices/MainBanner";
import { useMediaQuery } from "react-responsive";

const MainBanner = ({bannerId}) => {

    const {loading, error, data} = useQuery(getMainBanner, { 
        variables: {id: bannerId}
    });
    const isLG = useMediaQuery({ query: '(min-width: 1224px)'})

    if (error) return console.log(error);

    return <>
        {
            loading
            ? <p>Cargando</p>
            : ( isLG 
                ? <StyledContainer
                backgroundImage = {data.mainBanner.backgroundImage}
            >
                <div className="dataDiv">
                    <p className="date">hasta el 23 de agosto</p>
                    <div className="mainInfo">
                        <b>{data.mainBanner.boldMainText}</b>
                        <p>{data.mainBanner.mainText}</p>
                    </div>
                    <div className="buttonDiv">
                        <Button
                            text={data.mainBanner.buttonText}
                            color={'#fff'}
                            backgroundColor={props => theme.orangeCalm}
                            height = {'65px'}
                            width = {'350px'}
                            maxWidth = {'370px'}
                            maxHeight = {'75px'}
                            colorHover = {props => theme.orangeCalm}
                            backgroundColorHover = {'#fff'}
                            fontSize = {'1.7rem'}
                            fontWeight = {700}
                            borderRadius = {'20px'}
                        />
                    </div>
                </div>
            </StyledContainer>
            :<StyledContainer
                backgroundImage = {data.mainBanner.backgroundImage}
            >
                <div className="dataDiv">
                    <p className="date">hasta el 23 de agosto</p>
                    <div className="mainInfo">
                        <b>{data.mainBanner.boldMainText}</b>
                        <p>{data.mainBanner.mainText}</p>
                    </div>
                    <div>
                        <img src={data.mainBanner && data.mainBanner.image} alt="cumple"></img>
                    </div>
                    <div className="buttonDiv">
                        <Button
                            text={data.mainBanner.buttonText}
                            color={'#fff'}
                            backgroundColor={props => theme.orangeCalm}
                            height = { isLG ? '65px' : '48px'}
                            width = { isLG ? '350px' : '280px'}
                            maxWidth = {'370px'}
                            maxHeight = {'75px'}
                            colorHover = {props => theme.orangeCalm}
                            backgroundColorHover = {'#fff'}
                            fontSize = { isLG ? '1.7rem' : '1.rem'}
                            fontWeight = {700}
                            borderRadius = {'20px'}
                        />
                    </div>
                </div>
            </StyledContainer>
            )
        }
    </>;
}
 
export default MainBanner;