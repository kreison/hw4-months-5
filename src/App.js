import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeTitleAction, postJsonPlaceholder } from "./action/actions";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const dispatch = useDispatch()
    const title = useSelector(state => state.title.title)
    useEffect(() => {
        dispatch(changeTitleAction())
    }, [])


    //hw
    const postResponse = () => {
        dispatch(postJsonPlaceholder({name: 'Oleg', id: Date.now()}))
    }
    return (
        <div className="App">
            { title }
            <MainPage />
            <button onClick={ postResponse }>send object</button>
        </div>
    );
}

export default App;
