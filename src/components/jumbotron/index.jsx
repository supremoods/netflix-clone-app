import React from 'react'
import {Container, Inner, Item, Pane, Title, Subtitle, Image, Video, ImageTv} from './styles/jumbotron';
const Index = ({children, direction = 'row', ...restProps }) => {
    return (
        <Item {...restProps}>
            <Inner direction = {direction} Item = {Item}>
             {children}
            </Inner>
        </Item>
    )
}

export default Index
Index.Container = function IndexContainer({children, ...restProps}){
    return <Container{...restProps}>{children}</Container>
}

Index.Pane = function IndexPane({children, ...restProps}){
    return <Pane{...restProps}>{children}</Pane>
}

Index.Title = function IndexTitle({children, ...restProps}){
    return <Title{...restProps}>{children}</Title>
}

Index.Subtitle = function IndexSubtitle({children, ...restProps}){
    return <Subtitle{...restProps}>{children}</Subtitle>
}

Index.Image = function IndexImage({...restProps}){
    return <Image{...restProps}/>
}

Index.Video = function IndexVideo({...restProps}){
    return <Video{...restProps}/>
}

Index.ImageTv = function IndexImageTv({...restProps}){
    return <ImageTv{...restProps}/>
}



