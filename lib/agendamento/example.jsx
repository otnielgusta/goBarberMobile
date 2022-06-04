import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
export default function Example() {
    const [value, setValue] = useState(new Date());
  
    return <DatePicker value={value} onChange={setValue} />;
  }