import styled from "styled-components";

export const StyledContainer = styled.section`
    display:flex;
    position:relative;
    /* background-image: url(${props => props.backgroundImage}); */
    background-image: url('https://calmessimple.com.ar/wp-content/uploads/2022/11/fondo_cumpleañito-1.webp');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    height:750px;
    .dataDiv {
        width:580px;
        display:flex;
        position:relative;
        align-items:flex-start;
        justify-content:center;
        height: 100%;
        flex-direction:column;
        color: #fff;
        line-height:1;
        left:170px;
        bottom:20px;
        .date{
            font-size:2.5rem;
        }
        .mainInfo {
            margin-top:10px;
            margin-bottom:30px;
            font-size: 5rem;
            white-space:nowrap;
        }
    }
    @media (max-width: 500px) {
        height:500px;
        .dataDiv{
            width:100%;
            justify-content:center;
            align-items:center;
            left:0px;
            .date {
                font-size:1.5rem;
            }
            .mainInfo {
                font-size:3rem;
            }
        }
    }
`;
