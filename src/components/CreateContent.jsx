import { ThreeDotsVertical, ArrowRightShort } from 'react-bootstrap-icons';
import profileImageOne from "../assets/image/profileImage-one.webp"
import facebook from "../assets/image/Logo.png"
import medium from "../assets/image/Medium.png"
import google from "../assets/image/Google.png"
import youtube from "../assets/image/Youtube.png"
import bing from "../assets/image/Bing.png"

function CreateContent() {
  return (
    <>
      <div className="w-100 container-fluid bg-light pt-4">
        <div className="d-sm-flex justify-content-between mb-4">
          <h1 className="h2 mb-0 dashboard">Dashboard</h1>
          <div className="d-flex flex-column flex-sm-row">
            <div style={{ marginTop: 10 + 'px' }} className="create-content order-sm-1">
              <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal">Create Content <span><i class="bi bi-plus"></i></span></button>
            </div>
            <div style={{ marginTop: 10 + 'px', paddingLeft: 20 + "px" }} className="broadcast-btn order-sm-2">
              <button className="dropdown-item" data-toggle="modal" data-target="#Broadcast">Broadcast Messages to All</button>
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card  h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-1">
                    <div className="text-xs text-secondary mb-1">
                      Played audio files</div>
                    <div className="h5 mb-0 font-weight-bold text-dark">37,543</div>
                    <div className="text-xs">12.54</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card  h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-1">
                    <div className="text-xs text-secondary mb-1">
                      Users</div>
                    <div className="h5 mb-0 font-weight-bold text-dark">6,443</div>
                    <div className="text-xs">-10.45</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-1">
                    <div className="text-xs text-secondary mb-1">
                      Host request</div>
                    <div className="h5 mb-0 font-weight-bold text-dark">5</div>
                    <div className="text-xs">2.7%</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-1">
                    <div className="text-xs text-secondary mb-1">
                      Avg. time on app</div>
                    <div className="h5 mb-0 font-weight-bold text-dark">04:20</div>
                    <div className="text-xs">-0.04%</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="row">


          <div className="col-xl-8 col-lg-7">
            <div className="card mb-4">

              <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold col-black">User Overview</h6>
                <div className="">
                  <select name="" id="" className="select">
                    <option value="">Today</option>
                  </select>
                </div>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <canvas id="myAreaChart"></canvas>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="card mb-4">
              <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold col-black">Generate coupon</h6>
                <button className="reload-btn">Reload</button>
              </div>
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <canvas id="myPieChart"></canvas>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                  <div className="coupon-code text-center ">
                    <p className="pt-3">32u1002311 |<span className="pl-2 text-warning"> Copy</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="card mb-4">
              <div className="card-header py-3 flex-row">
                <h6 className="m-0 font-weight-bold text-dark">All Users (654)</h6>
              </div>
              <div className="all-users-scroll">
                <div className="p-4 search-users">
                  <input type="text" placeholder="Search friends..." />
                </div>

                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                    <img src={profileImageOne} alt="" className="profileImage" />
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
                <div className="container Profile-image d-flex justify-content-between">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
                    <li className="nav-item dropdown no-arrow">
                      <a className="nav-link dropdown-toggle" href="#" id="userDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="bi bi-three-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-left animated--grow-in"
                        aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                          Make an host
                        </a>
                        <a className="dropdown-item" href="#">
                          Edit profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Send message
                        </a>
                        <a className="dropdown-item" href="#" data-toggle="modal"
                          data-target="#logoutModal" style={{ color: "red" }}>
                          Delete profile
                        </a>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="card mb-4">
              <div className="card-header py-3 flex-row align-items-center">
                <h6 className="m-0 font-weight-bold text-dark">Become a host requests</h6>
              </div>
              <div className="card-body">
                <div className="Profile-image d-flex justify-content-between border-bottom">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
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
                        <a className="dropdown-item text-danger" href="#" data-toggle="modal"
                          data-target="">
                          Decline
                        </a>

                      </div>
                    </li>
                  </div>
                </div>
                <div className="Profile-image d-flex justify-content-between border-bottom">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
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
                        <a className="dropdown-item text-danger" href="#" data-toggle="modal"
                          data-target="">
                          Decline
                        </a>

                      </div>
                    </li>
                  </div>
                </div>
                <div className="Profile-image d-flex justify-content-between border-bottom">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
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
                        <a className="dropdown-item text-danger" href="#" data-toggle="modal"
                          data-target="">
                          Decline
                        </a>

                      </div>
                    </li>
                  </div>
                </div>
                <div className="Profile-image d-flex justify-content-between border-bottom">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
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
                        <a className="dropdown-item text-danger" href="#" data-toggle="modal"
                          data-target="">
                          Decline
                        </a>

                      </div>
                    </li>
                  </div>
                </div>
                <div className="Profile-image d-flex justify-content-between border-bottom">
                  <div className="d-flex">
                  <img src={profileImageOne} alt="" className='profileImage'/>
                    <div className="Profile-details">
                      <li>Laquita Elliott</li>
                      <li>141 mutual friends</li>
                    </div>
                  </div>
                  <div>
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
                        <a className="dropdown-item text-danger" href="#" data-toggle="modal"
                          data-target="">
                          Decline
                        </a>

                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container card pb-4">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">SOURCE</th>
                  <th scope="col">PAGE VIEWS</th>
                  <th scope="col">CHANGE</th>
                  <th scope="col">DURATION</th>
                  <th scope="col">BOUNCE</th>
                  <th scope="col">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"><span><img src={facebook} alt="" className="socialImage"/></span> Facebook</th>
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
                <tr>
                  <th scope="row"><span><img src={medium} alt="" className="socialImage"/></span>Medium</th>
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
                  <th scope="row"><span><img src={google} alt="" className="socialImage"/></span>Google</th>
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
                  <th scope="row"><span><img src={youtube} alt="" className="socialImage"/></span>Youtube</th>
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
                  <th scope="row"><span><img src={bing} alt="" className="socialImage"/></span>Bing</th>
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


      </div>

      <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="container modal-body">
              <div>
                <div>
                  <h4 class="text-dark">create content</h4>
                </div>
                <div>
                  <p>cover image</p>
                  <div>
                    <img src="" />
                    <div>
                      <label for="input-file" class="img-cover">
                        <div><span class="text-primary">click to upload</span> or drag and drop</div>
                      </label>
                    </div>
                    <input type="file" id="input-file" class="hidden" />
                  </div>
                  <div class="pt-4">
                    <p>Title</p>
                    <div class="title">
                      <input type="text" name="" id="" />
                    </div>
                  </div>
                  <div class="pt-4">
                    <p>Description</p>
                    <div class="description">
                      <textarea name="" id=""></textarea>
                    </div>
                  </div>
                  <div class="pt-4 modal-select">
                    <select name="" id="" class="select-modal">
                      <option value="">Select category</option>
                    </select>
                  </div>
                  <div class="pt-4">
                    <p>Upload file (audio mp3 format)</p>
                    <div>
                      <img src="" />
                      <div>
                        <label for="input-file" class="audio-cover"><span class="text-primary">click to upload</span> or drag and drop</label>
                      </div>
                      <input type="file" id="input-file" class="hidden" />
                    </div>
                  </div>
                  <div class="modal-create-content">
                    <button>Create content</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="Broadcast" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="container modal-body">
              <div class="all-users">
                <p>All users <span class="total-users">49</span></p>
              </div>
              <div class="modal-img-row">
                <img src={profileImageOne} alt="" />
                <img src={profileImageOne} alt="" />
                <img src={profileImageOne} alt="" />
                <img src={profileImageOne} alt="" />
                <img src={profileImageOne} alt="" />
                <img src={profileImageOne} alt="" />
              </div>
              <div class="modal-broadcast">
                <p>Send message</p>
                <textarea name="" id=""
                  placeholder="Write description, this will show in users push notifications"></textarea>
                <p>0/1000</p>
                <button class="modal-broadcast-btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateContent;


