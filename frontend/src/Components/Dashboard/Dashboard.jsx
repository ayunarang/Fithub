import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div class="dashboard-container">
        <div className="grid-container">
            <div className="user">
            <div className="user-info section">
                <div className="user-div">
                    <div className="section-one">
                    <div className="username-info">
                    <div className="profile-photo">
a
                    </div>
                    <div className="username-and-friends">
                        <div className="user-name">ayu</div>
                        <div className="friend-count">Friends: 10</div>
                    </div>
                </div>
                    </div>
                    <div className="section-two">
                        <ul>
                            <li>Groups</li>
                            <li>Fitness</li>
                            <li></li>
                            <li>Settings</li>

                        </ul>
                    </div>
                
                </div>
                <hr></hr>
                
            </div>
            <div className="user-settings section">b</div>
            </div> 
        <div className="section user-feed">b</div>
        <div className="section user-friends">c</div>
        </div>
    
    </div>
  )
}

export default Dashboard
