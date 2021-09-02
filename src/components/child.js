import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";


function Child() {

    const [data, setData] = useState([]);
    const userData = useSelector((state) => state.userData);

    useEffect(() => {
        setData(userData);
    }, []);

    return (
        <>
            <p>Child</p>
            <ul>
                {
                    data.map((item, i) => {
                        return <li> - {item.name} </li>
                    })
                }
            </ul>

        </>
    );
}

export default Child;