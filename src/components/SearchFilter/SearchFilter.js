import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchQuery,
  //  setFilterCriteria,
  resetFilters
} from '../../redux/dataSlice';
import './SearchFilter.css'
import { useTranslation } from 'react-i18next';

const SearchFilterComponent = () => {

  const { t , i18n } = useTranslation()

  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.data.searchQuery);

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleFilterChange = (value) => {
    dispatch(setSearchQuery(value))
    setIsFilterMenuOpnen(false)
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  const [isfilterMenuOpen, setIsFilterMenuOpnen] = useState(false)
  const toggleFilterMenu = () => {
    setIsFilterMenuOpnen(!isfilterMenuOpen)
  }

  return (
    <div className='container'    >
      <input
        type="text"
        placeholder=" Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className='filter-container'>
        <div className='btn-container'>
          <div className='selectBox'>
            <div className='btn' onClick={() => toggleFilterMenu()}>
             {t('Filters')}
            </div>
            <div className={`filter-drawer ${isfilterMenuOpen ? "show" : ""}`}>
              <div className='item1' onClick={() => handleFilterChange("")}>همه موارد</div>

              <div className='group1'>
                <div className='item' onClick={() => handleFilterChange("react")}>ReactJS</div>
                <div className='item' onClick={() => handleFilterChange("vite")}>Vite</div>
                <div className='item' onClick={() => handleFilterChange("next")}>NextJS</div>
                <div className='item' onClick={() => handleFilterChange("JavaScript")}>JavaScript</div>
                <div className='item' onClick={() => handleFilterChange("TypeScript")}>TypeScript</div>
              </div>

              <div className='group2'>
                <div className='item' onClick={() => handleFilterChange("tailwindcss")}>Tailwindcss</div>
                <div className='item' onClick={() => handleFilterChange("material")}>Material UI</div>
                <div className='item' onClick={() => handleFilterChange("Formik")}>CSS</div>
                <div className='item' onClick={() => handleFilterChange("Styled-components")}>Styled-components</div>
              </div>

              <div className='group3'>
                <div className='item' onClick={() => handleFilterChange("Axios")}>Axios</div>
                <div className='item' onClick={() => handleFilterChange("React Query")}>React Query</div>
                <div className='item' onClick={() => handleFilterChange("Appwrite")}>Appwrite</div>
              </div>

              <div className='group4'>
                <div className='item' onClick={() => handleFilterChange("React Hook Form")}>React Hook Form</div>
                <div className='item' onClick={() => handleFilterChange("Formik")}>Formik</div>
                <div className='item' onClick={() => handleFilterChange("Zod")}>Zod</div>
              </div>

           <div className='group5'>
              <div className='item' onClick={() => handleFilterChange("Redux")}>Redux</div>
              <div className='item' onClick={() => handleFilterChange("Zustand")}>Zustand</div>
              </div>
            </div>

          </div>
          <button onClick={handleReset}>{t('Reset')}</button>

        </div>



        <hr style={{ border: '1px solid rgb(97, 97, 97)', margin: '1.6rem', width: '90%' }} />

      </div>
    </div>
  );
};

export default SearchFilterComponent;
