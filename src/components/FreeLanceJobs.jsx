import React, { useState } from "react";
import './jobs.css';

export default function FreeLanceJobs({ onJobChange }) {
  const [selectedRange, setSelectedRange] = useState(null);

  const handlePriceSelection = (event) => {
    const range = event.target.value;
    setSelectedRange(range);
    onJobChange(range);
  };

  const price = [
    "Under $50",
    "$50-$100",
    "Over $100",
    "Over $500"
  ]

  return (
    <div className="priceFilter">
      <h3>Browse jobs by Price</h3>

      {
        price.map(e=>{
          return <label htmlFor={e} key={e}>
                  <input id={e}
                    type="radio"
                    name="price"
                    value={e}
                    checked={selectedRange === e}
                    onChange={handlePriceSelection}
                  />
                  {e}
                </label>
        })
      }


    </div>

    
  );
};