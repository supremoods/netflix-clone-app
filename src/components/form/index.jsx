import React from 'react';
import { Container, 
        Base, 
        Error, 
        Title, 
        Text, 
        TextSmall, 
        Input, 
        Submit, 
        Link, 
        Fieldset, 
        Label,
        ShowPassword
    } from './styles/form';

const Index = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

export default Index;

Index.Base  = function FormBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>
} 
Index.Error  = function FormError({children, ...restProps}){
    return <Error {...restProps}>{children}</Error>
} 

Index.Title  = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
} 
Index.Text  = function FormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
} 

Index.TextSmall  = function FormTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
} 

Index.Input  = function FormInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>
} 

Index.Submit  = function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
} 

Index.Link  = function FormLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
} 

Index.Fieldset  = function FormFieldset({children, ...restProps}){
    return <Fieldset {...restProps}>{children}</Fieldset>
} 

Index.Label  = function FormLabel({children, ...restProps}){
    return <Label {...restProps}>{children}</Label>
}

Index.ShowPassword  = function FormShowPassword({children, ...restProps}){
    return <ShowPassword {...restProps}>{children}</ShowPassword>
} 