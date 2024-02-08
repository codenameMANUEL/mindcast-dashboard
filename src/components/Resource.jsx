import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ThreeDotsVertical, ArrowRightShort } from 'react-bootstrap-icons';
import facebook from "../assets/image/Logo.png"
import medium from "../assets/image/Medium.png"
import google from "../assets/image/Google.png"
import youtube from "../assets/image/Youtube.png"
import bing from "../assets/image/Bing.png"
import { BASE_URL, USER_DOMAIN } from '../utils/config';


function Resource() {

    const [resources, setresources] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchResources = async () =>{
            try {
                const res = await axios.get(`${BASE_URL}${USER_DOMAIN}/resources`);
                setresources(res.resources.data)
                console.log("hey")
            } catch (error){
                setError(error);
            }
        };
        fetchResources();
    }, []);

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
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>

                {resources.map(resource=>{
                    <tr key={resource.id}>
                    <th scope="row"><span><img src={resource.image} alt="" className="socialImage" /></span> Facebook</th>
                    <td>12,5564</td>
                    <td>
                      <button className="change-btn-green">+65.31%</button>
                    </td>
                    <td>00:08:10</td>
                    <td>21.32%</td>
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

                <tr>
                  <th scope="row"><span><img src={medium} alt="" className="socialImage" /></span>Medium</th>
                  <td>9,567</td>
                  <td>
                    <button className="change-btn-green">+65.31%</button>
                  </td>
                  <td>00:08:10</td>
                  <td>21.32%</td>
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
                <tr>
                  <th scope="row"><span><img src={google} alt="" className="socialImage" /></span>Google</th>
                  <td>5,440</td>
                  <td>
                    <button className="change-btn-red">+65.31%</button>
                  </td>
                  <td>00:08:10</td>
                  <td>21.32%</td>
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
                <tr>
                  <th scope="row"><span><img src={youtube} alt="" className="socialImage" /></span>Youtube</th>
                  <td>2,767</td>
                  <td>
                    <button className="change-btn-green">+65.31%</button>
                  </td>
                  <td>00:08:10</td>
                  <td>21.32%</td>
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
                <tr>
                  <th scope="row"><span><img src={bing} alt="" className="socialImage" /></span>Bing</th>
                  <td>1,443</td>
                  <td>
                    <button className="change-btn-red">+65.31%</button>
                  </td>
                  <td>00:08:10</td>
                  <td>21.32%</td>
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