import React from 'react';
import JumbotronContainer from '../container/jumbotron';
import FooterContainer from '../container/footer';
import FaqsContainer from '../container/faqs';
import HeaderContainer from '../container/header';
import OptForm from '../components/opt-form'
import Feature from '../components/feature'
import Header from '../components/header';

const Home = () => {
  return (
    <>
          <HeaderContainer>
            <Feature>
              <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
              <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
              <OptForm>
                <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                <OptForm.Break/>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Get Started</OptForm.Button>
              </OptForm>
            </Feature>
            <Header.Gradient/>
          </HeaderContainer>
          <JumbotronContainer />
          <FaqsContainer />
          <FooterContainer />
    </>
  );
}

export default Home;
