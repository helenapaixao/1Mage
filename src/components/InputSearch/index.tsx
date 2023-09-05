import React,{useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { SearchContainer, SearchIcon, SearchInput } from './styles';

interface SearchInputProps {
  onSearch: (text: string) => void;
}

const SearchInputComponent: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <SearchContainer>
      <TouchableOpacity onPress={handleSearch}>
        <SearchIcon name="search" />
      </TouchableOpacity>
      <SearchInput
        placeholder="Search here"
        onChangeText={(text) => setSearchText(text)}
      />
      <TouchableOpacity>
        <SearchIcon name="microphone" />
      </TouchableOpacity>
      <TouchableOpacity>
        <SearchIcon name="filter" />
      </TouchableOpacity>
    </SearchContainer>
  );
};

export default SearchInputComponent;