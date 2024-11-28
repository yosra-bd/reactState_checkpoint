import logo from './logo.svg';
import './App.css';
import {Component} from 'react'

class App extends Component{
  constructor(props){
    super(props)
    this.state = { 
      person : {
      fullName : 'Yosra Ben Doghmen',
      Bio : 'born in 1992 in the city of Hammam-lif',
      imgSrc:'https://gomycodelearn.blob.core.windows.net/profiles/27165dc3-92df-4ab6-a9c8-00a1a82192a7-133724254552804563.jpg',
      profession:'student'},
    show : false,
    timeSinceMount : 0,
  }
    this.interval = null
    this.btnHandler =() =>{
      this.setState((state) => ({ show: !state.show}))
      this.setState((state) => ({timeSinceMount:0}))
    }}
  componentDidMount(){
        this.interval = setInterval(()=>{
          this.setState((pervState)=>({
            timeSinceMount : pervState.timeSinceMount +1
          }))
        },1000)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
    this.interval=null
    
  }
  render (){
    return (
      <div className = "App">
        <button onClick ={this.btnHandler}>{this.state.show?'hide':'show'}</button>
        {this.state.show?<div className='person'>
          <h1>Name : {this.state.person.fullName}</h1>
          <p>Bio: {this.state.person.Bio}</p>
          <h2>Profession : {this.state.person.profession} </h2>
          <img src={this.state.person.imgSrc} alt={this.state.person.fullName}/>
          <p>time since mount : {this.state.timeSinceMount}</p>
          </div>:<p>person not rendered</p>}
      </div>
    )
  }
}

export default App;
