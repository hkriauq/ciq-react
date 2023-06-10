import React from 'react';
import'./Farms.css';


const farms = ["--Please Select--","戦略系（MBB等）", "総合系（BIG4等）"];

  const Farms = () => {
    return (
      <div className='select'>
        <select>
          {farms.map((farm) => {
            return <option key={farm}>{farm}</option>;
          })}
        </select>
      </div>
    );
  };



export default Farms