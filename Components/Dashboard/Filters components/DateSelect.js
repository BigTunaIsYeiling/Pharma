"use client";
import {
  FilterOrderDate,
  Filters,
  changeOrderDateType,
} from "@/Lib/FiltersSlice";
import { DatePicker, Select, Space } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;
export const DateSelect = () => {
  const dispatch = useDispatch();
  const filtersOption = useSelector(Filters);
  const [selectedDate, setSelectedDate] = useState(null); // Use state to track the selected date

  const onChangeSelect = (value) => {
    dispatch(changeOrderDateType(value));
    dispatch(FilterOrderDate(null));
    setSelectedDate(null); // Clear the selected date when the Select value changes
  };

  const onChangeDatePicker = (date, dateString) => {
    dispatch(FilterOrderDate(dateString));
    setSelectedDate(date); // Update the selected date
  };

  return (
    <Space>
      <Select value={filtersOption.orderDateType} onChange={onChangeSelect}>
        <Option value="date">اليوم</Option>
        <Option value="month">الشهر</Option>
      </Select>
      <DatePicker
        picker={filtersOption.orderDateType}
        onChange={onChangeDatePicker}
        value={selectedDate} // Set the DatePicker value to the selectedDate state
      />
    </Space>
  );
};
