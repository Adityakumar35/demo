
import React, { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("https://lichess.org/api/player");
        if (!response.ok) {
          throw new Error("Failed to fetch leaderboard");
        }
        const data = await response.json();
        setLeaderboard(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <h2>Bullet</h2>
        <ul>
          {leaderboard.bullet ? (
            leaderboard.bullet.map((player) => (
              <li key={player.id}>
                <strong>{player.title ? player.title + " " : ""}{player.username}</strong>
                <p>Rating: {player.perfs.bullet.rating}</p>
                <p>Progress: {player.perfs.bullet.progress}</p>
              </li>
            ))
          ) : (
            <p>No bullet players found.</p>
          )}
        </ul>
      </div>
      <div>
        <h2>Blitz</h2>
        <ul>
          {leaderboard.blitz ? (
            leaderboard.blitz.map((player) => (
              <li key={player.id}>
                <strong>{player.title ? player.title + " " : ""}{player.username}</strong>
                <p>Rating: {player.perfs.blitz.rating}</p>
                <p>Progress: {player.perfs.blitz.progress}</p>
              </li>
            ))
          ) : (
            <p>No blitz players found.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;

