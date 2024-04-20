  import './App.css'
  import NumberInput from "./components/NumberInput";
  import NumberTable from "./components/NumberTable";
  import React, { useState } from 'react';

  function App() {

    const [data, setData] = useState([]);

    const onUpdateData = (newData) => {
      setData([...data, newData]);
      console.log(data)
    };

    return (
      <div className="app"> 
        <NumberInput onUpdateData={onUpdateData} />
        <NumberTable reload={data} />
      </div>
    );
  }

  export default App;
