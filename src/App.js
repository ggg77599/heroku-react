import React, { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production') ? 'http://localhost:8080/' : 'https://mrgreact.herokuapp.com/'

function App() {
  const [aList, setList] = useState([]);

  useEffect(() => {
    axios.get("/api/getList").then(res => {
      setList(res.data.list);
    });
  }, []);

  const renderList = () => {
    return aList.map(function(list){return <li>{list}</li>});
  };

  return (
    <div>
      {renderList()}
      <img src="https://i1.achangpro.com/img.inmywordz.com/uploads/20171002203252_63.png" />
    </div>
  );
}

export default App;
