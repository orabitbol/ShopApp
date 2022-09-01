import React, { useState, useEffect } from 'react'
import SearchField from 'react-search-field';

import './headerSearch.css'

const HeaderSearch = () => {

  const [search, setSearch] = useState('');



  return (
    <div className="header-search">
      <SearchField
        style={{ width: '50px' }}
        placeholder='מה תרצו לקנות '
        // onEnter={(e) => setSearch(e.target.value)}
        // onSearchClick={() => { geyKeyCity() }}
        value={search}

        onChange={(e) => console.log(e)}
      />
    </div>
  )
}

export default HeaderSearch