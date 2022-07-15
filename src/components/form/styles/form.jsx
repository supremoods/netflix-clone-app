import styled from "styled-components/macro";
import {Link as ReachRouterLink } from 'react-router-dom';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 660px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    width: 100%;
    margin: auto;
    max-width: 450px;
    padding: 60px 68px 40px;
    margin-bottom: 100px;
    z-index: 3;

`;

export const Error = styled.div`
    background: #e87c03;
    border0radius: 4px;
    font-size: 14px;
    margin: 0 0 16px;
    color: white;
    padding: 15px 20px;

`;

export const Base = styled.form`
    display: flex; 
    flex-direction: column;
    max-width: 450px;
    width: 100%;
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: old;
    margin-bottom: 28px;
`;

export const Text = styled.p`
    color: #737373;
    font-size: 16px;
    font-weight: 500;
`;

export const TextSmall = styled.p`
    margin-top: 10px;
    font-size: 13px;
    line-height: normal;
    color: #8c8c8c;
`;

export const Label = styled.label`
    color: #8c8c8c;
    font-size: 16px;
    left: 20px;
    position: absolute;
    top: 30%;
    transform: translateY(-50%);
    transition: font .1s ease,top .1s ease,transform .1s ease;
    user-select: none;
    -webkit-user-select: none; /*Safari*/
    -moz-user-select: none; /*Firefox*/
    cursor: text;
    ${({emailFilled}) => emailFilled ? `top: 15%;
    font-size: 11px;` : ""}
    ${({passwordFilled}) => passwordFilled ? `top: 15%;
    font-size: 11px;` : ""}
`;

export const ShowPassword = styled.p`
    position: absolute;
    right: 10px;
    font-size:14px;
    top: 4px;
    color: #8c8c8c;
    cursor: pointer;
    z-index: -1;

`;

export const Input = styled.input`
    background: #333;
    font-size: 13px;
    border-radius: 4px;
    border: 0;
    color: white;
    height: 50px;
    line-height: 50px;
    padding: 30px 20px;
    padding-top: 30px;
    padding-bottom: 15px;
    margin-bottom: 20px;
    width: 100%;
    outline: none;

    &:last-of-type{
        margin-bottom: 30px;
    }

    &:focus {
        padding-top: 30px;
        padding-bottom: 15px;
    }

    &:focus + ${Label}{
        top: 15%;
        font-size: 11px;
    }

    &:focus ~ ${ShowPassword}{
        z-index: 3;
    }

`;

export const Submit = styled.button`
    background: #e50914;
    border: 0;
    border-radius: 4px;
    font-size: 16px; 
    font-weight: bold;
    margin: 24px 0 12px;
    padding: 16px;
    border: 0;
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
    }
`;

export const Link = styled(ReachRouterLink)`
    color: white;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const Fieldset = styled.div`
    position: relative;
`;


