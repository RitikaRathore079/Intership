import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
 import Greeting from "./components/Greeting";
 import  ProfileCard from "./components/ProfileCard";
import CounterApp from './components/CounterApp';
import UserForm from "./components/UserForm";
import UserList from './components/UserList';
import Posts from "./components/Posts";
import LoginForm from './components/LoginForm';


function App() {
  return (
    <>
      <Header />
      <main>
        <h2>Welcome to React App!</h2>
        <p>This is my first modular React layout.</p>
      </main>
      <Footer /> 

       <Greeting name="Priya" Topic="React Components"/>
    <Greeting name="Rohan" Topic ="JSX & Props"/>
    

    <div style={{display:"flex", justifyContent:"center"}}>
    <ProfileCard name ="Jyoti Serma" role ="Fontend" image ="https://randomuser.me/api/portraits/women/32.jpg"/>
    <ProfileCard name ="Sneha Verma" role ="UI/UX Designer" image ="https://randomuser.me/api/portraits/women/44.jpg"/>
    </div>
  
  <div>
    <CounterApp />
  </div>

<div>
  <UserForm />
  </div>

  <div>
    <UserList />
  </div>

   <div>
    <Posts />
  </div>  

  <div>
    <LoginForm />
  </div>
  </>
  );
 }

 export default App;

