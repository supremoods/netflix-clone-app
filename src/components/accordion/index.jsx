import React, {useState, useContext, createContext} from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext= createContext();

const Index = ({children, ...restProps}) => {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
}


export default Index

Index.Title =  function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};

Index.Frame =  function AccordionFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
};

Index.Item =  function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>
                {children}
            </Item>
        </ToggleContext.Provider>
    );
};

Index.Header =  function AccordionHeader({children, ...restProps}){
    const { toggleShow, setToggleShow } = useContext(ToggleContext);

    return (
        <Header onClick={()=>setToggleShow((toggleShow) => !toggleShow)}{...restProps}>
            {children}
            {
                toggleShow ? (
                  <img src="images/icons/close-slim.png" alt="Close" />  
                ): (
                <img src="images/icons/add.png" alt="Add" />  
                )
            }
        </Header>
    );

};

Index.Body = function AccordionBody({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext);
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}