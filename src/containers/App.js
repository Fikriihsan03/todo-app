import React ,{useState,useEffect}from 'react';
import InputField from '../component/InputField';
import InfoBar from '../component/InfoBar';
import TasksList from './TasksList'
import './App.css'



const App = ()=>{
  const data = []
  const [currentData,setData] = useState(data)
  const [darkMode,setDarkMode] = useState(getInitialMode())
  //store the todo list in the local storage
  useEffect(()=>{
    if(localStorage.getItem("todos")){
      setData(JSON.parse(localStorage.getItem("todos")))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(currentData))
  },[currentData])
    //store the darkmode boolean in the local storage
  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(darkMode))
  },[darkMode])
   
  function getInitialMode (){
    var isReturningUsers = "mode" in localStorage;
    var savedMode =JSON.parse(localStorage.getItem("mode"));
    var userPrefersDark = getPrefersColorScheme();
    if(isReturningUsers){
      return savedMode
    }else if(userPrefersDark){
      return true
    }else{
      return false
    }
  }
  function getPrefersColorScheme(){
    if(window.matchMedia)return;
    
    return window.matchMedia("(prefers-color-scheme:mode)").matches;
  }
  return (
      <>
      <div className={darkMode ? "card-body dark-mode":"card-body light-mode"}>
        <div className="dark-mode">
          <div className = "container">
            <h1 className = "text-center text-uppercase">my tasks</h1>
              <div className="row">
              <p>Darkmode</p>
              <label className="switch">
                  <input defaultChecked={darkMode}type="checkbox" onClick={()=>setDarkMode(prevMode => !prevMode)} />
                  <span className="slider round"></span>
                </label>
              </div>
            <InfoBar totalTasks = {currentData.length}  />
            <InputField add={setData} total={currentData} />
            <TasksList tasks={currentData}  setTask={setData} />
          </div>
        </div>
      </div>
    </>
      );
    }
export default App;



              






