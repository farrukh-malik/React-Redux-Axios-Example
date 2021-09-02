import { useEffect, useState } from "react";
import Service from '../services/user';
import { useSelector, useDispatch } from 'react-redux';
import { user } from '../redux/actions/user'
import history from "../history";

function Parent() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const data = await Service.getUser();
        dispatch(user(data));
        setData(data);
        history.push('/child');
    }

    useEffect(() => {
    }, []);


    return (
        <>
            <h1>Parent</h1>
            <button onClick={() => fetchData()}>Save data to store</button>
        </>
    );
}

export default Parent;