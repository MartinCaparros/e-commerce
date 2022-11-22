import styled from "styled-components";

export const StyledHolder = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
    height:400px;
    width:100%;
    background: linear-gradient(45deg, #5700FF -0.22%, #FFB800 82.31%);
    .imgContainer {
        display:flex;
        justify-content:end;
        width:500px;
        .img {
            position:relative;
            left:200px;
            height:270px;
        }
    }
    .container {
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
        margin-top:30px;
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
    }
    @media (max-width:500px) {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        height:500px;
        width:100%;
        background: linear-gradient(45deg, #5700FF -0.22%, #FFB800 82.31%);
        .imgContainer {
            display:flex;
            justify-content:center;
            width:100%;
            .img {
                left:0px;
                height:250px;
            }
        }
        .container {
            margin-top:10px;
            font-size:1.25rem;
            color:white;
            width:70%;
            font-weight:400;
            text-align:center;
            .mainText{
                font-size:1.5rem;
                font-weight:700
            }
            .buttonDiv{
                display:flex;
                justify-content:center;
                margin-top:10px;
            }
        }
    }

` 

