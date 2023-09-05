import React  from "react";
import {  Image } from 'react-native';

const Avatar = ({ source }: { source: any }) => {
  return (
    <Image
  source={{ uri: 'https://avatars.githubusercontent.com/u/11083288?v=4' }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20, 
      }}
    />
  );
};

export default Avatar;
