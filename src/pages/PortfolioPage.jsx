import React from 'react'
import SearchFilterComponent from '../components/SearchFilter/SearchFilter'
import { useSelector } from 'react-redux';
import Card from '../components/MyWork/Card';

const PortfolioPage = () => {
        const filteredData = useSelector((state) => state.data.filteredData);
    
  return (
    <div 
    style={{
        padding:'6rem 2rem', display:'flex', flexDirection:'column', gap:'5rem',
        alignItems:'center'
        }}>
      <SearchFilterComponent />

      <div>
      {filteredData?.length > 0 ? (
     
        <Card data={filteredData} />
      ) : (
        <p>هیج نتیجه ای یافت نشد.</p>
      )}
    </div>
    </div>
  )
}

export default PortfolioPage
