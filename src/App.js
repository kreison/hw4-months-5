import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeTitleAction, postJsonPlaceholder } from "./action/actions";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const dispatch = useDispatch()
    const title = useSelector(state => state.title.title)
   


    //hw
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const postResponse = () => {
        const obj = {
            name: name,
            email: email
        }
        dispatch(postJsonPlaceholder(obj))
    }
    return (
        <div className="App">
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" />
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" />
            <button onClick={ postResponse }>send object</button>
        </div>
    );
}

export default App;
