import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 8px solid #222;
    text-align: center;
    padding: 110px 45px;
    z-index: 3;

    @media (max-width: 600px){
        padding: 60px 10px;
    }

`;

export const Title = styled.h1`
    color: white;
    max-width: 644.75px;
    font-size: 50px;
    font-weight: 700;
    margin: auto;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

export const Subtitle = styled.h2`
    color: white;
    font-size: 26px;
    font-weight: normal;
    margin: 16px auto;
     
    @media (max-width: 600px){
        font-size: 18px;
    }
`;