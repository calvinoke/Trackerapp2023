import {useState} from 'react';

function App() {

//storing our variables in the state
  const [form, setForm] = useState({
    amount:0,
    description: "",
    date: "",
  });

  async function handleSubmit(e){
  //prevents the form from submitting data contineously
    e.preventDefault();
    //console.log(form);
    //creating an object to fetch data from the backend API called the transaction
    const res = await fetch("http://localhost:4000/transaction",{
      method: "POST",
      body: form,

    });
    console.log(res);
  }

  //creating the function for handling the input of the target and the value..
  function handleInput(e) {
    console.log(e.target.value);
    setForm({ ...form,[e.target.name]:e.target.value});
  }

  return (
    <div>
     <form onSubmit = {handleSubmit} >
      <input type="number" name="amount" value={form.amount} onChange={handleInput} placeholder = "Enter transaction amount" /><br />
      <input type="text" name="description" value={form.description} onChange={handleInput} placeholder = "Enter transaction details" /><br />
      <input type="date" name="date" value={form.date} onChange={handleInput} /><br /> <br />
      <button type="submit">Submit</button>

      </form>
      
    </div>
  );
}

export default App;
