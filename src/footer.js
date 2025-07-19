import React from "react";
import Order from "./order";

function Footer() {
  const hour = new Date().getHours();
  const date = new Date().toString();
  //   console.log(hour);
  //   console.log(date);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  //   console.log(isOpen);
  return (
    <footer className="footer">
      <Order openHour={openHour} closeHour={closeHour} />

      {/* conditional rendering: ternary operator */}
      {/* {isOpen ? (
        <div className="order">
          <p>We're Open until {closeHour}:00. Come visit us or order online </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are happy to welcome you between {openHour} and {closeHour}
        </p>
      )}
      {new Date().toDateString()}: We're Currently open */}
    </footer>
  );
}

export default Footer;
