import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'Sopno'},
  {name: 'Shuvro', job: 'pathor'}
]

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}


function App() {
  const nayoks = ['Rubel', 'BappaRaz', 'Kuber', 'Jashim', 'Manna', 'Salman Shah', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok =><Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name= {nayoks[0]} nayika="moushumi"></Person>
      <Person name= {nayoks[1]} nayika="rekha"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person> */}
      <h5>New Component...</h5>
      <p id="totocompany">Rock mama React Mama</p>
      <Friend movie="Singam" phone="0172877"></Friend>
      <Friend phone="0171198"></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className="person">
      <h1>{props.name}</h1>
      
  </div>
  )
}

function Friend(props){
  // console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
