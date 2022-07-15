import React from 'react'
import {Container, Row, Column, Link, Title, Text, Break} from './styles/footer';

const Index = ({children, ...restProps }) => {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

export default Index

Index.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>;
}

Index.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>;
}

Index.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
}

Index.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Index.Title = function FooterTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Index.Text = function FooterText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
}

Index.Break = function FooterBreak({children, ...restProps}){
    return <Break {...restProps}>{children}</Break>;
}