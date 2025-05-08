import React, { useState } from "react";
import "../index.css";

const Profile = () => {
  // Hardcoded user data
  const user = {
    name: "KATETE CHARLES WASWA",
    phone: "+256782141376",
    balance: 28000000,
    img: "", // Replace with a valid image URL if needed
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="profile-container">
      <h2 className="profile-heading">{user.name}'s Profile</h2>
      <div className="profile-info">
        <div className="profile-img-container">
          <img
            src={user.img || "https://via.placeholder.com/150"}
            alt={user.name}
            className="profile-pic-large"
          />
        </div>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Balance:</strong> ${user.balance.toLocaleString()}</p>
          <button className="profile-action-btn" onClick={openModal}>
            Withdraw Funds
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p className="modal-message">⚠️ You need to deposit some money to 500k number 254702650205 before you can withdraw.</p>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;

