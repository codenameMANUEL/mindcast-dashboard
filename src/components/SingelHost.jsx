import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { BASE_URL, USER_DOMAIN } from '../utils/config';

export default function singleHost() {
    const [host, setHost] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${BASE_URL}${USER_DOMAIN}/single/${props.user_id}`);
                setHost(res.data.data);
                console.log(res.data.data)
            } catch (error) {
                setError(error);
            } 
        };

        fetchData();
    }, []);

    const singleUserID = data._id;

    return(
        <table>
            <tbody>
                {data.map(host =>(
                    <tr key={host}>
                    <th scope="row">
                    <span><img src={host.image} alt="" className="userImage"/></span>
                    {host.firstName} <span>{host.lastName}</span>
                  </th>
                  <td className='pt-4'>{host.email}</td>
                  <td>
                    <button className="change-btn-green mt-3">Mood</button>
                  </td>
                  <td>{}</td>
                  <td>{host.percentage}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
    
}