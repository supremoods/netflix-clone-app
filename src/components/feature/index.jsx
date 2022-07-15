import React from 'react';
import {Container, Title, Subtitle} from './styles/feature'

const Index = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Index;

Index.Title = function FeatureTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};

Index.Subtitle = function FeatureSubtitle({children, ...restProps}){
    return <Subtitle {...restProps}>{children}</Subtitle>
};
