import styled from "styled-components";

export const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
    font-size:1.25rem;
    color:white;
    width:500px;
    font-weight:700;
    text-align:left;
    .mainText{
        font-size:2.5rem;
    }
    .buttonDiv{
        display:flex;
        justify-content:start;

        .donateButton {
            color:white;
            background-color: black;
            padding:10px;
            border-radius:50px;
            margin-top:10px;
            &:hover{
                background-color:red;
            }
        }
    }
`

