import React from 'react';
import {Text} from 'react-native'
import {Button,CardContainer, CardImageBackground, ButtonText, IdeaText, FlexContainer,Label,Span, TextWrapper} from './styles'
import backgroundImg from '../../../assets/cardBackground.png'; 


const Card = () => {
  return (
       <CardContainer>
      <CardImageBackground source={backgroundImg}>
        <Button>
          <ButtonText>Start Campaign</ButtonText>
        </Button>
          <FlexContainer>
            <Text>
              Do you really have
              {'\n'}
            </Text>
            <Text>
              <TextWrapper>a creative </TextWrapper>
              <Span>idea?</Span>
            </Text>
          </FlexContainer>
      </CardImageBackground>
    </CardContainer>

  );
};



export default Card;
