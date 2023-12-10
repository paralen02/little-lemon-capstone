import React from "react";
import food from "../images/main.jpg";
import { Link } from "react-router-dom";
import { Button } from "antd";



const Header = () => {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/Booking">
            <Button
                type="primary"
                aria-label="On Click"
                style={{
                    backgroundColor: "#f4ce14",
                    borderColor: "#495e57",
                    color: "#495e57",
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    padding: '10px 15px'
                }}
            >
                Reserve a Table
            </Button>
          </Link>{" "}
        </div>
        <div>
          <img src={food} />
        </div>
      </section>
    </header>
  );
};

export default Header;
