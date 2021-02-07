import React from "react";
import { useCompetitionContext } from "../../CompetitionContext";

const RoleSelection = () => {
  const { changeCompRoute, joinComp, officialName } = useCompetitionContext();
  const joinCompetition = (role) => {
    joinComp(officialName, role);
    changeCompRoute("home");
  };

  return (
    <div className="tc">
      <button
        className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
        onClick={() => joinCompetition("coach")}
      >
        Coach
      </button>
      <button
        className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
        onClick={() => joinCompetition("judge")}
      >
        Judge
      </button>
      <button
        className="f2 link dim br-pill ba ph3 pv2 ma2 dib mid-gray pointer"
        onClick={() => joinCompetition("changetable")}
      >
        Change Table
      </button>
    </div>
  );
};

export default RoleSelection;
