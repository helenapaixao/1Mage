import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: #cccc;
  border-radius: 10px;
  height: 62px;
  width: 346px;
  border: 1px solid;
  background-color: #ffffff;
`

export const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: #696969;
`

export const SearchIcon = styled(Icon)`
  font-size: 20px;
  color: #999;
  margin-bottom: 10px;
`
