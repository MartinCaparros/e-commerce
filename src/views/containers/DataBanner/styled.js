import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    display:flex;
    justify-content:center;
    font-size: 1rem;
    font-weight:700;
    .imgContainer {
        height:300px;
        width:400px;
        .img {
            height:100%;
            width:100%;
            border-radius:30px;
        }
    }
    .title {
        font-size:1.5rem;
    }
    .description {
        font-weight:400;
    }
`