

// import React, { useState } from "react";

// const Profile = () => {
//   const [username, setUsername] = useState("");
//   const [playerData, setPlayerData] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchPlayerData = async () => {
//     if (!username) {
//       setError("Please enter a username.");
//       return;
//     }

//     try {
//       const response = await fetch(`https://lichess.org/api/user/${username}`);
//       if (!response.ok) {
//         throw new Error("Invalid user!!!");
//       }
//       const data = await response.json();
//       setPlayerData(data);
//       setError(null); 
//     } catch (err) {
//       setError(err.message);
//       setPlayerData(null); 
//     }
//   };

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <input
//         type="text"
//         placeholder="Enter Lichess username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={fetchPlayerData}>Fetch Profile</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {playerData && (
//         <div>
//           <img
//             src={playerData.profile?.imageUrl || "/default-avatar.png"}
//             alt="Profile"
//             width="100"
//           />
//           <h2>{playerData.username}</h2>
//           <p>{playerData.bio || "No bio available"}</p>
//           <p><strong>Games Played:</strong> {playerData.count?.all || "N/A"}</p>
//           <p><strong>Bullet Rating:</strong> {playerData.perfs?.bullet?.rating || "N/A"}</p>
//           <p><strong>Blitz Rating:</strong> {playerData.perfs?.blitz?.rating || "N/A"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;

import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const [username, setUsername] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchPlayerData = async () => {
    if (!username) {
      setError("Please enter a username.");
      return;
    }

    try {
      const response = await fetch(`https://lichess.org/api/user/${username}`);
      if (!response.ok) {
        throw new Error("Invalid user!!!");
      }
      const data = await response.json();
      setPlayerData(data);
      setError(null); 
    } catch (err) {
      setError(err.message);
      setPlayerData(null);
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-header">Lichess Profile</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter Lichess username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <button onClick={fetchPlayerData} className="fetch-button">
          Fetch Profile
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {playerData && (
        <div className="profile-card">
          <img
            src={playerData.profile?.imageUrl || "/default-avatar.png"}
            alt="Profile"
            className="profile-image"
          />
          <h2 className="username">{playerData.username}</h2>
          <p className="bio">{playerData.bio || "No bio available"}</p>
          <p className="games-played"><strong>Games Played:</strong> {playerData.count?.all || "N/A"}</p>
          <p className="rating"><strong>Bullet Rating:</strong> {playerData.perfs?.bullet?.rating || "N/A"}</p>
          <p className="rating"><strong>Blitz Rating:</strong> {playerData.perfs?.blitz?.rating || "N/A"}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;

