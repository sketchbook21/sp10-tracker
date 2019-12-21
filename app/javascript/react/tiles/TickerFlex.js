import React from "react";

export const TickerFlex = ({ title, sp10, sp500, delta }) => {
  let sp10PercentChange = "No Data";
  let sp500PercentChange = "No Data";
  let displayDeltaPercentage = "No Data";
  if (sp10 && sp10["change_percent"]) {
    sp10PercentChange =
      sp10["change_percent"] >= 0 ? (
        <span className="green">+{sp10["change_percent"].toFixed(2)}%</span>
      ) : (
        <span className="red">{sp10["change_percent"].toFixed(2)}%</span>
      );

    sp500PercentChange =
      sp500["change_percent"] >= 0 ? (
        <span className="green">+{sp500["change_percent"].toFixed(2)}%</span>
      ) : (
        <span className="red">{sp500["change_percent"].toFixed(2)}%</span>
      );

    displayDeltaPercentage =
      delta >= 0 ? (
        <span className="green">+{delta.toFixed(2)}%</span>
      ) : (
        <span className="red">{delta.toFixed(2)}%</span>
      );
  }

  return (
    <div className="container">
      <div className="section-title">{title}</div>
      <div className="data-equal">
        <div className="text-center">
          <span className="ticker-number">{sp10PercentChange}</span>
          <br />
          <span className="ticker-name">SP10</span>
        </div>
        <div className="text-center">
          <span className="ticker-number">{sp500PercentChange}</span>
          <br />
          <span className="ticker-name">S&P 500</span>
        </div>
        <div className="text-center">
          <span className="ticker-number">{displayDeltaPercentage}</span>
          <br />
          <span className="ticker-name">Delta</span>
        </div>
      </div>
    </div>
  );
};
