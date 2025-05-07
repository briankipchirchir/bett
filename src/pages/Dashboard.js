import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../index.css";

const Dashboard = ({ user }) => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Mock users who won (only images shown here)
  const winners = [
    {
      id: 1,
      name: "Alice Smith",
      img: "https://randomuser.me/api/portraits/women/0.jpg",
    },
    {
      id: 2,
      name: "Bob Johnson",
      img: "https://randomuser.me/api/portraits/men/0.jpg",
    },
    {
      id: 3,
      name: "Charlie Brown",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  // Mock data for events (teams and odds)
  const events = [
    {
      id: 1,
      league: "International Clubs • UEFA Champions League",
      time: "07/05, 22:00",
      team1: "Paris Saint-Germain",
      team2: "Arsenal",
      odds1: 2.40,
      odds2: 3.50,
      oddsDraw: 3.05,
    },
    {
      id: 2,
      league: "USA • US Open Cup",
      time: "08/05, 02:30",
      team1: "Philadelphia Union",
      team2: "Indy Eleven",
      odds1: 1.37,
      odds2: 4.80,
      oddsDraw: 7.00,
    },
    {
      id: 3,
      league: "USA • US Open Cup",
      time: "08/05, 03:00",
      team1: "Saint Louis City",
      team2: "Union Omaha SC",
      odds1: 1.31,
      odds2: 5.00,
      oddsDraw: 8.60,
    },
  ];

  // Handle profile button click
  const goToProfile = () => {
    navigate("/profile"); // Navigate to the Profile page
  };

  return (
    <div className="dashboard-container">
      {/* Profile Button */}
      <div className="profile-button">
        <button onClick={goToProfile}>Profile</button>
      </div>

      <div className="company-info">
        <h1>Welcome to Our Betting Company</h1>
        <p>Here, you can view images of people who won!</p>
      </div>

      <h3>People Who Won</h3>
      <div className="winners">
        {winners.map((winner) => (
          <div key={winner.id} className="winner-card">
            <img src={winner.img} alt={winner.name} className="profile-pic" />
            <p>{winner.name}</p>
          </div>
        ))}
      </div>

      <h3>Upcoming Matches</h3>
      <div className="events">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-info">
              <h4>{event.league}</h4>
              <p>{event.time}</p>
            </div>
            <div className="teams">
              <div className="team">
                <p>{event.team1}</p>
                <p>Odds: {event.odds1}</p>
              </div>
              <div className="team">
                <p>{event.team2}</p>
                <p>Odds: {event.odds2}</p>
              </div>
              <div className="draw">
                <p>Draw: {event.oddsDraw}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
