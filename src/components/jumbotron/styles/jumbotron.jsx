import styled from "styled-components/macro";

export const Item = styled.div`
    display:flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({direction}) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;

    @media (max-width: 1000px){
        flex-direction: column;
    }
`;



export const Pane = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 1000px){
        width: 100%;
        padding: 0 45px;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media(max-width: 600px){
        font-size: 35px;
    }
`;

export const Subtitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px){
        font-size: 18px;
    }
`;

export const Image = styled.img`
    max-width: 100%;
    height: auto;
`;

export const ImageTv = styled.img`
    width: 100%;
    height: auto;
    position: relative;
    z-index:3;
`;


export const Video = styled.video`
    width: 100%;
    height: auto;
    position: absolute;
    top: 30px;
    left: 0;
    z-index: 1;
    margin-left: auto; 
    margin-right: auto; 
    transform: scale(0.8);
    
    @media (max-width: 1000px){
        transform: scale(0.65);
    }
    @media (max-width: 600px){
        top: 0px;
    }
    @media (max-width: 428px){
        top: 0px;
        transform: scale(0.6);
    }
`;


export const Container = styled.div`
    @media (max-width: 1000px){
    ${Item}:last-of-type h2{
        margin-bottom:50px;
    }
}    
`;