import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker } from 'antd';
dayjs.extend(customParseFormat);

// const range = (start, end) => {
//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// };

// eslint-disable-next-line arrow-body-style
const disabledDate = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};

// const disabledDateTime = () => ({
//   disabledHours: () => range(0, 24).splice(0, 7),
//   disabledMinutes: () => range(30, 60),
//   disabledSeconds: () => [55, 56],
// });

// const disabledRangeTime = (_, type) => {
//   if (type === 'start') {
//     return {
//       disabledHours: () => range(0, 60).splice(4, 20),
//       disabledMinutes: () => range(30, 60),
//       disabledSeconds: () => [55, 56],
//     };
//   }
//   return {
//     disabledHours: () => range(0, 60).splice(20, 4),
//     disabledMinutes: () => range(0, 31),
//     disabledSeconds: () => [55, 56],
//   };
// };

export const DatePickerComponent = ({onChange}) => (
    <DatePicker
      className="form-control datetimepicker" 
      format="YYYY-MM-DD"
      onChange={onChange}
      disabledDate={disabledDate}
      suffixIcon={null}
      // disabledTime={disabledDateTime}
     
    />
);