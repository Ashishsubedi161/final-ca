import React, { useState } from "react";
import './jobs.css';

export default function FreeLanceJobsCategory({ onCategoryChange }) {
  const [selectedRange, setSelectedRange] = useState(null);

  const handleSelection = (event) => {
    const range = event.target.value;
    setSelectedRange(range);
    onCategoryChange(range);
  };

  const jobs = [
    "Designer",
    "Web Developer",
    "Hacker"
  ]

  return (
    <div className="jobFilter">
      <h3>Browse jobs by category</h3>

      {
        jobs.map(e=>{
          return <label htmlFor = {e} key={e}>
                  <input id={e}
                    type="radio"
                    name="category"
                    value={e}
                    checked={selectedRange === e}
                    onChange={handleSelection}
                  />
                  {e}
                </label>
        })
      }


    </div>

    
  );
};
