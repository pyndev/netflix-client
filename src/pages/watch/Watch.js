import { ArrowBackOutlined } from "@material-ui/icons";
import React from "react";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://stream.mux.com/fbR00NW26LPtWnO01m9w8w2z9CUiFYe8li/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NDY2NzgxMzIsImF1ZCI6InYiLCJzdWIiOiJmYlIwME5XMjZMUHRXbk8wMW05dzh3Mno5Q1VpRlllOGxpIn0.tCYi2okXaSnWe6onUNNg4fbFv5zZd_pSf8M7P6ygD0qLRm3WpxZuz_ZZ-HgPLRVqa-dmuL_LgkQfMEyHYhvZEJkcgsVDj7zABDa7nLQSP949UjiZtVyfddjngHO6OJcOWVx84OeU5HGdZ8khorbrap0EQviIcD9LA2kyBoVewLDHoUjguxujAuhMP90IlGCFY_S8mM9OTmdeX8qcIhGmEcsvwFiHssiaOCt7KMpBbdCTWD0R88ceS6vdzgCJOSjEhTRYexKhKlPjxAZMS_q83VoBmN3KGVbjA0mS7JZf1rvvpzWq5mCRL5w0rxj4lNT0BaJlfYjYq2guJpYGmBQgyQ"
      />
    </div>
  );
}
