import React, { useEffect, useState } from "react";

const OurTeam = () => {
  const [teams, setTeams] = useState();
  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <section className="section">
      <div>
        <p className="text-skydeep text-sm font-semibold">ANGELS</p>
        <h3 className="text-5xl font-medium mt-2 mb-12">Meet with our Team</h3>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {teams?.map((team) => (
          <div key={team._id}>
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <img src={team.image} alt="Shoes" />
              </figure>
              <div className="card-body items-center justify-center">
                <p>{team.title}</p>
                <h2 className="card-title">{team.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
