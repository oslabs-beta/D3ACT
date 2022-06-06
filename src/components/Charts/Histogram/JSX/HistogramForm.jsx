import React, { Fragment, useState } from 'react';
import PropTypes from "prop-types"

import { useSelector, useDispatch } from 'react-redux'
import { changeData } from '../../../../features/chart/dataSlice'
import { changeXKey } from '../../../../features/chart/xKeySlice';
import { changeXAxisLabel } from '../../../../features/chart/xAxisLabelSlice';
import { changeYAxisLabel } from '../../../../features/chart/yAxisLabelSlice';
import { changeHeight } from '../../../../features/chart/heightSlice';
import { changeWidth } from '../../../../features/chart/widthSlice';
import { changeThresholds } from '../../../../features/chart/thresholdsSlice';
import { changeBarPadding } from '../../../../features/chart/barPaddingSlice';

const HistogramForm = ({ 
  // data, xKey, yKey, xAxisLabel, yAxisLabel, height, width, 
  // handlers: { handleData, handleXKey, handleYKey, handleXAxisLabel, handleYAxisLabel, handleWidth, handleHeight, handleThresholds, handleBarPadding } 
}) => {

  const dispatch = useDispatch()
  
  return (
    // <Fragment>
    //   <div>Chart Customizer Form</div>
    //   <section className="form">
        <form class="w-full max-w-lg" onSubmit={() => {}}>
          <div class="flex flex-col flex-wrap -mx-3 mb-6">

            <div class="w-full px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Data: object[]
              </label>
              <input class="h-52 appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="set-data"
                type="text"
                placeholder="Data"
                // value={data}
                // onChange={handleData}
                onChange={(e) => dispatch(changeData(e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>


            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                X Key: string
              </label>
              <input
                id="set-XKey"
                type="text"
                placeholder="X Key: Numeric data"
                // value={xKey}
                // onChange={handleXKey}
                onChange={(e) => dispatch(changeXKey(e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>
            
            {/* Y-Key removed since it will always be length for Histograms
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Y Key: string
              </label>
              <input
                id="set-YKey"
                type="text"
                placeholder="Y Key"
                // value={xKey}
                onChange={handleYKey}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div> */}
            
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                X Axis Label: string
              </label>
              <input
                id="set-xAxisLabel"
                type="text"
                placeholder="X Axis Label"
                // value={xAxisLabel}
                // onChange={handleXAxisLabel}
                onChange={(e) => dispatch(changeXAxisLabel(e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Y Axis Label: string
              </label>
              <input
                id="set-yAxisLabel"
                type="text"
                placeholder="Y Axis Label: Data Length"
                // value={yAxisLabel}
                // onChange={handleYAxisLabel}
                onChange={(e) => dispatch(changeYAxisLabel(e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Height: number
              </label>
              <input
                id="set-height"
                type="number"
                placeholder="Height"
                // value={height}
                // onChange={handleHeight}
                onChange={(e) => dispatch(changeHeight(+e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Width: number
              </label>
              <input
                id="set-width"
                type="number"
                placeholder="Width"
                // value={width}
                // onChange={handleWidth}
                onChange={(e) => dispatch(changeWidth(+e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Bins: number
              </label>
              <input
                id="set-thresholds"
                type="number"
                placeholder="Number of Bins"
                // onChange={handleThresholds}
                onChange={(e) => dispatch(changeThresholds(+e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                Bar Padding: number
              </label>
              <input
                id="set-barPadding"
                type="number"
                placeholder="Bar Padding"
                // onChange={handleBarPadding}
                onChange={(e) => dispatch(changeBarPadding(+e.target.value))}
              />
              <p class="text-red-500 text-xs italic">Please fill out this field.</p>
            </div>

          </div>
        </form>
    //   </section>
    // </Fragment>
  );
}

export default HistogramForm;

//PropTypes does not exist;
// HistogramForm.propTypes = {
//   data: PropTypes.array,
//   xKey: PropTypes.string,
//   yKey: PropTypes.string,
//   xAxisLabel: PropTypes.string,
//   yAxisLabel: PropTypes.string,
//   height: PropTypes.number,
//   width: PropTypes.number,
// }


// Event Handlers here to update state dynamically, on change
// Call some fn getData() to import? or pull from whereever we import the data from
// const changeData = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setData(JSON.parse(event.target.value));
// }

// const changeXKey = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setXKey(event.target.value);
// }

// const changeYKey = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setYKey(event.target.value);
// }

// const changexAxisLabel = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setxAxisLabel(event.target.value);
// }

// const changeyAxisLabel = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setyAxisLabel(event.target.value);
// }

// const changeWidth = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setWidth(+event.target.value);
// }

// const changeHeight = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setHeight(+event.target.value);
// }

// const changeKeys = (event: ChangeEvent<HTMLInputElement>) => {
//   event.preventDefault();
//   setKeys(event.target.value);
// }

