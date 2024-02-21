import React, { useEffect, useState } from "react";
import "./task4.css";
const Task4 = () => {
  const time = new Date().toLocaleTimeString();
  const hour = time.split(":")[0];
  const minute = time.split(":")[1];
  console.log(hour, minute);
  const [daySlot, setDaySlot] = useState("Night");
  const [bgUrl, setBgUrl] = useState(
    "https://images.unsplash.com/photo-1479267658415-ff274a213280?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5pZ2h0fGVufDB8fDB8fHww"
  );
  //   console.log(`backbround-url is ${bgUrl}`);
  useEffect(() => {
    if (time.includes("AM")) {
      if (hour == 12 || (hour >= 1 && hour < 4)) {
        setDaySlot("Night");
        setBgUrl(
          "https://images.unsplash.com/photo-1479267658415-ff274a213280?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5pZ2h0fGVufDB8fDB8fHww"
        );
      } else {
        setDaySlot("Morning");
        setBgUrl(
          "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9ybmluZ3xlbnwwfHwwfHx8MA%3D%3D"
        );
      }
    } else {
      if (hour == 12 || (hour >= 1 && hour <= 5)) {
        setDaySlot("Afternoon");
        setBgUrl(
          "https://plus.unsplash.com/premium_photo-1678559034015-a487448e473b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWZ0ZXJub29ufGVufDB8fDB8fHww"
        );
      } else {
        setDaySlot("Night");
        setBgUrl(
          "https://images.unsplash.com/photo-1479267658415-ff274a213280?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG5pZ2h0fGVufDB8fDB8fHww"
        );
      }
    }
    // console.log(time);
    // console.log(`backbround-url is ${bgUrl}`);
  }, []);

  return (
    <>
      <div
        className="t4MainContainer"
        style={{
          background: `url(${bgUrl}) no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="t4Container">
          <h1>{`${hour}:${minute}`}</h1>
          <p> Good {daySlot}, World.</p>
          {/* {console.log(hour, minute)} */}
        </div>
      </div>
    </>
  );
};

export default Task4;
