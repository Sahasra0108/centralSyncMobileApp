import { Appbar, BottomNavigation } from 'react-native-paper';
import SearchBar from './SearchBar';

function TopNav(){
return(
<Appbar.Header>
      
      <SearchBar/>
      <Appbar.Action icon="bell" onPress={() => {}} />

</Appbar.Header>
)
}

export default TopNav