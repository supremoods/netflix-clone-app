import React from 'react'
import Jumbotron from '../components/jumbotron';
import JumboData from '../fixtures/jumbo';

const JumbotronContainer = () => {
    return (
        <Jumbotron.Container>
        {
          JumboData.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{item.title}</Jumbotron.Title>
                <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
                {item.id === 1 ? 
                  <>
                    <Jumbotron.ImageTv src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt={item.alt} />
                    <Jumbotron.Video alt={item.alt} autoPlay muted loop>
                      <source src={item.video} type="video/mp4" />
                    </Jumbotron.Video>
                  </> 
                  : <Jumbotron.Image src={item.image} alt={item.alt} />}
              </Jumbotron.Pane>
            </Jumbotron>
          ))
        }
      </Jumbotron.Container>
    )
}

export default JumbotronContainer
