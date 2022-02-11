

import {useEffect} from 'react'
import {useNavigate} from "react-router-dom";
const Redirect = () => {

    const navigate = useNavigate();
    /* eslint implicit-arrow-linebreak:  off */
    const getParamValues = (url) =>
        url
            .slice(1)
            .split('&')
            .reduce((prev, curr) => {
                const [title, value] = curr.split('=');
                /* eslint no-param-reassign: "off" */
                prev[title] = value;
                return prev;
            }, {});

    useEffect(() => {
        const params = getParamValues(window.location.hash);
        console.log(params)
        localStorage.setItem('params', JSON.stringify(params));
        navigate('/');
    }, []);
    return (
        <div>
            Redirect page
        </div>
    );
}

export default Redirect
