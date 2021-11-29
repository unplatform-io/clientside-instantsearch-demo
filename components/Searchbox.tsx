import { useState, useEffect } from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';

import { useDebounceCallback } from './useDebounce';

function SearchBox({ currentRefinement, isSearchStalled, refine }: any){
  const [val, setVal] = useState('');
  const [debounceCallback] = useDebounceCallback(250);

  useEffect(() => {
    // Update the value on mount as otherwise the onChange
    // is not detected for the first backspace that leads an empty searchbox
    setVal(currentRefinement);
  }, [currentRefinement]);

  function onChangeDebounced(e: any) {
    const val = e.currentTarget.value;

    debounceCallback(() => {
      refine(val);
    });

    setVal(val);
  }

  return (
    <form noValidate action="" role="search">
    <input
      type="search"
      value={val}
      onChange={onChangeDebounced}
    />
    <button onClick={() => refine('')}>Reset query</button>
    {isSearchStalled ? 'My search is stalled' : ''}
  </form>
  )
};

export default connectSearchBox(SearchBox);
