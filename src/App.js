import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {changeTitleAction} from "./action/actions";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const dispatch = useDispatch()
    const title = useSelector(state => state.title.title)
    useEffect(() => {
        dispatch(changeTitleAction())
    }, [])
    return (
        <div className="App">
            {title}
            <MainPage/>
        </div>
    );
}

export default App;
