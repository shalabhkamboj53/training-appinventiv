import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [lessThanFive, setlessThanFive] = useState([])
  const [allCount, setallCount] = useState([])

  let alphaCount;

  switch (count) {
    case 0:
      alphaCount = 'Zero';
      break;
    case 1:
      alphaCount = 'One';
      break;
    case 2:
      alphaCount = 'Two';
      break;
    case 3:
      alphaCount = 'Three';
      break;
    case 4:
      alphaCount = 'Four';
      break;
    case 5:
      alphaCount = 'Five';
      break;
    case 6:
      alphaCount = 'Six';
      break;
    case 7:
      alphaCount = 'Seven';
      break;
    case 8:
      alphaCount = 'Eight';
      break;
    case 9:
      alphaCount = 'Nine';
      break;
    case 10:
      alphaCount = 'Ten';
      break
    default:
      alphaCount = 'Greater than Ten';
  }

  const countHandler = () => {
    setCount((count) => count + 1)
    if(count<5){
      setlessThanFive((p)=>{return [...p, alphaCount]})
    } else if(count === 5) {
      setallCount((p)=>{return [...lessThanFive, alphaCount]})
    } else {
      setallCount((p)=>{return [...p, alphaCount]})
    }
  }

  if(count>5){
    return(
      <>
      {console.log("All Count: ", allCount)}
      {console.log("Less than Five: ", lessThanFive)}
        <div className="card" style={{background:`${count<10 && 'orange' || count>10 && 'red' }`, color:'black', borderRadius:'10px'}}>
          {
            count>5?(
              <div>
                Counter Value is greater than 5
              </div>
            ) : (
              <div>
                Counter Value is less than 5
              </div>
            )
          }
          <button style={{marginTop: '20px'}} onClick={countHandler}>
            count is : {count}
          </button>
        </div>
      </>
    )
  }

  else {
    return (
      <>
      {console.log("All Count: ", allCount)}
      {console.log("Less than Five: ", lessThanFive)}
        <div className="card" style={{background: `${count>2 && 'green'}`, borderRadius: '10px'}}>
          {
            count>5?(
              <div>
                Counter Value is greater than 5
              </div>
            ) : (
              <div>
                Counter Value is less than 5
              </div>
            )
          }
          <button style={{marginTop: '20px'}} onClick={countHandler}>
            count is : {alphaCount}
          </button>
        </div>
      </>
    )
  }
}

export default App
