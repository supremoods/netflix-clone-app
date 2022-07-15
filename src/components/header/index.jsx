import React from 'react';
import {  Link as ReactRouterLink } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo, Gradient } from './styles/header';

const Index = ({bg=true, children, ...restProps}) => {
    return bg ? <Background {...restProps}>{children}</Background> : children ;
}

export default Index;

Index.Frame = function HeaderFrame({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Index.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}


Index.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps}/>
        </ReactRouterLink>
    );
};

Index.Gradient = function HeaderGradient({children, ...restProps}){
    return <Gradient {...restProps}>{children}</Gradient>
}
