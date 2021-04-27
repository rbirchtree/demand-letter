import React, { useState } from 'react';
import { jsPDF } from "jspdf";

export default function Example() {
    
    const [fName, setfName] = useState('Rob');
    const [selected, setSelected] = React.useState("");
    const [lName, setlName] = useState('Birch');
    const [town,setTown] = useState('Austin, TX');
    const [dateOfAccident,setDate] = useState('4/1/2020');
  
    const [count, setCount] = useState(0);

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };
    
  const handleSubmit = (evt) =>{
      evt.preventDefault();
    const doc = new jsPDF();
    doc.text(fName+" "+lName, 10, 10);
    doc.text(town, 20, 20);
    doc.text(dateOfAccident, 10, 30);
    doc.text(selected, 10, 40);
    doc.save("a4.pdf");
  };
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <form onSubmit={handleSubmit}>
        <select onChange={changeSelectOptionHandler}>
            <option>Rearend</option>
            <option>Headon</option>
            <option>Sideswipe</option>
            <option>T-bone</option>
          </select>
      
        <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
        <hr></hr>
        <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
        <hr></hr>
        <input type="text" placeholder="Where Accident Happen" onChange={e => setTown(e.target.value)} />
        <hr></hr>
        <input type="text" placeholder="Date Accident Happen" onChange={e => setDate(e.target.value)} />
        <button >            
            Generate PDF
        </button>
      </form>
    </div>
  );
}