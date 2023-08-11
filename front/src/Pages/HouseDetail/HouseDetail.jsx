import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HouseContext } from "../../Context/Context";
import "./HouseDetail.css";
import { BiBed } from "react-icons/bi";
import { FaShower, FaRegSquare } from "react-icons/fa";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export function HouseDetail() {
  const { id } = useParams();
  const { data } = useContext(HouseContext);

  // Filtrar el producto correspondiente según su id
  const house = data.find((house) => house.id === parseInt(id));
  console.log(data);

  return (
    <div>
      {house && (
        <main>
          <Header />
          <section className="detail_container">
            <div className="detail">
              <div>
                <h4 className="detail_title">{house.name}</h4>
              </div>
              <div className="detail_text">
                <p>{house.address}</p>
              </div>
              <img
                className="detailImg"
                src={house.image}
                alt="imagen-card"
              ></img>

              <div className="detail_content">
                <div className>
                  <BiBed />
                  {house.bedrooms}
                </div>
                <div className>
                  <FaShower />
                  {house.bathrooms}
                </div>
                <div>
                  <AspectRatioIcon />
                  {house.surface}
                </div>
              </div>
              <div className="detail_description">
                <p className="description">{house.description}</p>
              </div>
              <div className="detail__price">€ {house.price} /month</div>
            </div>
            <div className="form_box">
              <div className="form_agent">
                <img
                  className="form_img_agent"
                  src="../assets/agents/agent1.png"
                  alt="imagen-agent"
                ></img>
                <span className="form_Name_Agent">{house.agent.name}</span>
              </div>
              <form className="form_container">
                <input
                  className="form_input"
                  type="text"
                  placeholder="Name*"
                  required
                ></input>
                <input
                  className="form_input"
                  type="email"
                  placeholder="Email*"
                  required
                ></input>
                <input
                  className="form_input"
                  placeholder="Phone*"
                  required
                ></input>
                <textarea className="forn_message"></textarea>
                <button className="buttond">Send message</button>
              </form>
            </div>
          </section>

          <Footer />
        </main>
      )}
    </div>
  );
}
