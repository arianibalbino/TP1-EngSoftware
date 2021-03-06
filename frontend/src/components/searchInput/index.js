import React from 'react';

import '../../assets/styles/global.scss';
import './searchInput.scss';

import { useSearch } from "../../contexts/Search";
import pesq from '../../assets/svgs/glass.svg';

export function SearchInput() {
  const { changeSearchValue } = useSearch();

  return (
   <div className="search-container">
     <form onSubmit={ (e) => e.preventDefault() } action="" className="search-form">
       <button><img src={ pesq} alt="glass"/></button>
       <input onChange={ (e) => changeSearchValue(e.target.value) } name="searchBar" type="text" placeholder="Procure um produto"/>
     </form>
   </div>
  )
}