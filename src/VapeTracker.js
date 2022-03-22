import React from "react";

function getDate() {
  const now = new Date();
  const current = now.getHours() + ":" + now.getMinutes();
  return current;
}

export default function VapeTracker(props) {
  let totalPerHour = props.totalAllowed / (25 - props.wakeUpTime);
  let hourCount = 60 / totalPerHour;
  return (
    <div className="container">
      <div className="header">
        <h1 className="titles">Puff Tracker App</h1>
        <p className="fontBold">Current Time: {getDate()}</p>
        <p>Wake Up Time: {props.wakeUpTime}PM</p>
        <p>Total Daily Puffs: {props.totalAllowed}</p>

        <p>
          Puffs Per Hour: 
          {Math.round(props.totalAllowed / (25 - props.wakeUpTime))}
        </p>
        <h2 className="titles">Max Puffs @ End Of Hour</h2>
      </div>
      <hr></hr>
      <div className="hours">
        <p>
          <span className="fontBold">{props.wakeUpTime}{props.wakeUpTime >= 12 ? "PM" : "AM"} </span>{" "}
          {Math.round(totalPerHour)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 1}PM: </span>
          {Math.round(totalPerHour * 2)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 2}PM: </span>{" "}
          {Math.round(totalPerHour * 3)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 3}PM: </span>
          {Math.round(totalPerHour * 4)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 4}PM: </span>
          {Math.round(totalPerHour * 5)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 5}PM: </span>
          {Math.round(totalPerHour * 6)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 6}PM: </span>
          {Math.round(totalPerHour * 7)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 7}PM: </span>
          {Math.round(totalPerHour * 8)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 8}PM: </span>
          {Math.round(totalPerHour * 9)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 9}PM: </span>
          {Math.round(totalPerHour * 10)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 10}PM: </span>
          {Math.round(totalPerHour * 11)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 11}PM: </span>
          {Math.round(totalPerHour * 12)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 12} </span>
          {Math.round(totalPerHour * 13)}
        </p>
        <p>
          <span className="fontBold">{props.wakeUpTime + 13} {props.wakeUpTime + 13 > 23 ? "AM" : "PM"} </span>{" "}
          {Math.round(totalPerHour * 14)}
        </p>
      </div>
      <hr></hr>
      <div className="perHour">
        <h3 className="titles">When to puff?</h3>
        <p>{Math.round(hourCount)} Minutes</p>
        <p>{Math.round(hourCount * 2)} Minutes</p>
        <p>{Math.round(hourCount * 3)} Minutes</p>
        <p>{Math.round(hourCount * 4)} Minutes</p>
        <p>{Math.round(hourCount * 5)} Minutes</p>
        <p>{Math.round(hourCount * 6)} Minutes</p>
        <p>{Math.round(hourCount * 7)} Minutes</p>
      </div>
    </div>
  );
}
