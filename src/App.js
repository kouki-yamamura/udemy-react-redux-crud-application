import React from 'react';


function App() {
  const log = ()=>{console.log("I am click.")};
  const dom = <input type="button" value="ボタン" onClick={log} />
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <div>{dom}</div>
    </React.Fragment>
    


    
    
    )
}

export default App;
