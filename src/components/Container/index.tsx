import React, { ReactNode } from 'react';
import { CenteredContainer, Content} from './styles';


interface CenteredContentProps {
  children: ReactNode;
}


const Container = ({children}: CenteredContentProps) => {
  return (
 <CenteredContainer>
      <Content>{children}</Content>
    </CenteredContainer>
  );
};

export default Container;
