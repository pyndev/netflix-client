import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" 
      src="https://stream.mux.com/clE2psjNAWuyR8GM9k9cd3ilgFKzieJF/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE2NDY3NTM2NjgsImF1ZCI6InYiLCJzdWIiOiJjbEUycHNqTkFXdXlSOEdNOWs5Y2QzaWxnRkt6aWVKRiJ9.iDkRNrxHapEBXZST8KOOYA8LH2UOvK5kyBWoncvBWKLKGYbWKJcEWqT_OEYGbbd6qek-JAsYE_oXQErMVXFTzSu_RdQPJlIFOlxUmRPoUQwAoPPhFDg-cVLMwdgKLfb9X8Nb_046X16Sa9gi0taSr1KmDw790Tx1nIzZee7_OY5nv8Cg9O_Ftxw3TT9O01OOA2rykWFQV_RktWG0tvNwaZ623X_N6GHA_PZjgwEciZAntiWPhCZfGFTwUwlqttxMDXzrKYIZ4Ff55D9eaMyyso0jKh9FXB1R_H8eLF6nEJXtlZhxByLCZ2P_7-oFYlXAGLKaEbvrGHCjQZsLmtDi9A" 
      autoPlay={true}  loop controls progress />
      {/* <video className="video" autoPlay progress muted controls src={movie.video} /> */}
    </div>
  );
}