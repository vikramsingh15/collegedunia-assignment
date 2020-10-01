import React from 'react';
import Card from '../components/Card';

import '../utils/styles/index.css';

import COLLEGES from '../utils/data/colleges.json';
const { colleges } = COLLEGES;

function collegesScreen() {
  const renderColleges = () => {
    return colleges.map(college => {
      return <Card college={college} />;
    });
  };

  return (
    <main>
      <h4 className='heading'>Colleges in North India</h4>

      <div className='row'>{renderColleges()}</div>
    </main>
  );
}

export default collegesScreen;
