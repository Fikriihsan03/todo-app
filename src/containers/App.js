import React ,{useState}from 'react';
import InputField from '../component/InputField';
import InfoBar from '../component/InfoBar';
import TasksList from './TasksList'
import './App.css'



const App = ()=>{
  const data = []
  const [currentData,setData] = useState(data)
    return (
      <>
      <div className = "container ">
      <h1 className = "text-center text-uppercase">my tasks</h1>
      <InfoBar totalTasks = {currentData.length}  />
      <InputField add={setData} total={currentData} />
      <TasksList tasks={currentData}  setTask={setData} />
    </div>
    </>
  );
}

export default App;
