import React from 'react';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, ExpandMore, Language } from '@mui/icons-material';


function Header() {
  return (
    <div className='header'>

        <img 
        className='header__icon'
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=" Airbnb logo" />

<div className='header__center'> 
<input type="text" />
<SearchIcon />
</div>

<div className='header__right'> 
<p>Become a Host</p>
<Language />
<ExpandMore />
<AccountCircle />

</div>

        </div>

  )
}

export default Header;