function Greeting(props){
    return(
        <div style={{textAlign:"center"}}>
      <h3> Hello {props.name}</h3>
      <p> You are learing {props.Topic} today</p>
      </div>
    );
}
 export default Greeting;