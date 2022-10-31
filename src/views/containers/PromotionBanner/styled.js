import styled from "styled-components";

export const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    position: relative;
    height:380px;
    margin-top:70px;
    .promotionDiv {
        display:flex;
        align-items:center;
        border-radius:25px;
        padding:25px;
        height: 100%;
        width: 75%;
        font-size:2rem;
        color:#fff;
        background-image: url(https://calmessimple.com.ar/wp-content/uploads/2022/08/img_cyber_2022.webp);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        line-height:1;
        .positionDiv {
            position:relative;
            left:50px;
            .dataDiv {
                margin-bottom:30px;
                .promInfo {
                    font-weight: 700;
                    color: #fff;
                    font-size: 4.5rem;
                }
            }
        }
    }
`;