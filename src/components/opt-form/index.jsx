import React from 'react';
import { Container, Input, Button, Text, Break} from './styles/opt-form';
const Index = ({children, ...restProps}) =>{
    return (
        <Container {...restProps}>
            {children}
        </Container>
    );
};


export default Index;


Index.Input = function OptFormInput({ ...restProps }){
    return <Input {...restProps}/>;
}

Index.Button = function OptFormButton({ children, ...restProps }){
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
}

Index.Text = function OptFormText({children, ...restProps}){
    return (
        <Text {...restProps}>
            {children} 
        </Text>
    );
}


Index.Break = function OptFormBreak({ children, ...restProps }){
    return <Break {...restProps}>{children}</Break>;
}