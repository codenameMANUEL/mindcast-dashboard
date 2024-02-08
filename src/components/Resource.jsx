import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThreeDotsVertical, ArrowRightShort } from 'react-bootstrap-icons';
//import facebook from "../assets/image/Logo.png"
//import medium from "../assets/image/Medium.png"
//import google from "../assets/image/Google.png"
//import youtube from "../assets/image/Youtube.png"
//import bing from "../assets/image/Bing.png"
import { BASE_URL, USER_DOMAIN } from '../utils/config';


function Resource() {

    const [resources, setResources] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchResources = async () =>{
            try {
                const res = await axios.get(`${BASE_URL}${USER_DOMAIN}/resources`);
                console.log( 'entered:',res.data.data)
                setResources(res.data.data)
                // console.log("hey")
            } catch (error){
                setError(error);
            }
        };
        fetchResources();
    }, []);

    
    const formatTimestampToDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    return (
        <div className="container card pb-4">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">IMAGE</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">MOOD TYPE</th>
                  <th scope="col">DURATION</th>
                  <th scope="col">TIME CREATED</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                 
                {resources.map(resource=>{
                    return <tr key={resource._id}>
                    <th scope="row"><span><img src={resource.image} alt="" className="socialImage" /></span> </th>
                    <td>{resource.title}</td>
                    <td>
                      <button className="change-btn-green">{resource.moodType}</button>
                    </td>
                    <td>{resource.duration}</td>
                    <td>{formatTimestampToDate(resource.time_created)}</td>
                    <td>
                      <li className="nav-item dropdown no-arrow">
                        <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                          role="button" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <i className="bi bi-three-dots-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                          aria-labelledby="userDropdown">
                          <a className="dropdown-item" href="#">
                            Approve
                          </a>
                          <a className="dropdown-item" href="#">
                            Send feedback
                          </a>
                          <a className="dropdown-item text-danger" href="#" data-toggle="modal"
                            data-target="">
                            Decline
                          </a>
                        </div>
                      </li>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
          <div>
            <p className="text-center view-more-social-track text-primary">See all data <ArrowRightShort /></p>
          </div>
        </div>
    )
}

export default Resource;