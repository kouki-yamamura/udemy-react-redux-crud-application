import React from 'react';


//コンポーネントの作り方
//関数コンポーネント

//propsの渡し方
//main:1 sub:2 for create

const App = ()=>{
  const profiles = [
    {name:"taro",age:10},
    {name:"hanako",age:21},
  ]

  return(
    <div>
      {
        profiles.map((profiles,index)=>{
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi , I am {props.name}, and {props.age} years old!</div>
}


export default App;
