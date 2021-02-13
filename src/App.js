import React from 'react';
import './App.css';
import ColumnChart from './ColumnChart';
const onSubmits =()=>{

  alert("INVALID JSON DATA");

}

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"/>
        
      </header>
      <body>
      <div class ="row no-gutters">
      <div class="col-md-6 no-gutters">
      <div class ="leftside d-flex justify-content-center align-items-center">
        <div class="centered">
        <p>
          <label>JSON DATA</label>
          <textarea> </textarea>
                  
        </p>

        
        <button class="btn" onClick={onSubmits}><span>Submit</span></button>
        
        </div>
        



        </div>

      </div>
      <div class="col-md-6 no-gutters">
      <div class ="rightside d-flex justify-content-center align-items-center">
      <div class="centered">
      <ColumnChart/>






      </div>

      </div>

      </div>


      </div>

      </body>
       
    </div>
  );
}

export default App;