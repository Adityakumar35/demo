import React, { useEffect, useState } from "react";

const Tournament = () => {
  const [tournaments, setTournaments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await fetch("https://lichess.org/api/tournament");
        if (!response.ok) {
          throw new Error("Failed to fetch tournaments");
        }
        const data = await response.json();
        if (data && data.created) {
          setTournaments(data.created); 
        } else {
          setError("No tournaments available.");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTournaments();
  }, []);

  return (
    <div>
      <h1>Ongoing Tournaments</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tournaments.length > 0 ? (
          tournaments.map((tournament) => (
            <li key={tournament.id}>
              <h3>{tournament.fullName}</h3>
              <p>Time Control: {tournament.clock.limit} mins + {tournament.clock.increment} secs</p>
              <p>Starts In: {Math.round(tournament.secondsToStart / 60)} mins</p>
              <p>Rating Range: {tournament.hasMaxRating ? `≤ ${tournament.maxRating.rating}` : "Open"}</p>
              <p>Players: {tournament.nbPlayers}</p>
            </li>
          ))
        ) : (
          <p>No ongoing tournaments found.</p>
        )}
      </ul>
    </div>
  );
};

export default Tournament;
