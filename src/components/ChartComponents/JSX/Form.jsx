import React, { useCallback } from 'react';
import '../../ChartComponents/chartstyles.css';
import { startCase } from 'lodash';
import { useDispatch } from 'react-redux';
import { changeProps } from '../../../features/chart/propsSlice';
import Dropdown from '../../../Dropdown/Dropdown';

// See below explanation on why we don't dynamically use eval() and instead use property accessors to send the correct payload instead
//Option 2: let our reducer handle what gets updated
// pass input name/value to our single props reducer, which updates the props in state.props

const Form = ({ properties, data, currProps }) => {
  console.log(properties);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      e.preventDefault();
      console.log('handling event...', e);
      dispatch(changeProps({ name: e.target.name, value: e.target.value }));
    },
    [dispatch]
  );

  const inputs = properties.map((p, i) => {
    //If Property is xKey or yKey then do a form
    if (p === 'xKey' || p === 'yKey') {
      return (
        <div key={i} class="flex flex-wrap -mx-3 mb-6">
          <div class=" w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              {/* `${type-p}` */}
              {startCase(p)}
            </label>

            <Dropdown 
              data={data}
              value={currProps[p]}
              handleChange={handleChange}
              name={p}
            />
          </div>
        </div>
      );
    } else if (typeof currProps[p] === 'number') {
      return (
        <div key={i} class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              {/* `${type-p}` */}
              {startCase(p)}
              {' - ' + startCase(currProps[p])}
            </label>
            <input
              type="range"
              min="100"
              max="3000"
              class=" block w-full bg-gray-200 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id={`set-${p}`}
              name={`${p}`}
              placeholder={currProps[p]}
              value={p === 'data' ? JSON.stringify(currProps[p]) : currProps[p]}
              onChange={handleChange}
            ></input>
          </div>
        </div>
      );
    } else {
      //Otherwise do a TextArea
      return (
        <div key={i} class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              {/* `${type-p}` */}
              {startCase(p)}
            </label>
            <textarea
              class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id={`set-${p}`}
              name={`${p}`}
              placeholder={currProps[p]}
              value={p === 'data' ? JSON.stringify(currProps[p]) : currProps[p]}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      );
    }
  });

  return (
    <form class="rounded w-full max-w-lg" onSubmit={() => {}}>
      <div class="rounded flex flex-col flex-wrap mx-6">{inputs}</div>
    </form>
  );
};

export default Form;
