import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import "./Contacto.css"; // Archivo CSS para el estilo
import Typography from "@mui/material/Typography";
import { Button, Grid, TextField } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Footer } from "../../components/Footer/Footer";

export function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario a través de una API o cualquier otro método de tu elección
    // Por simplicidad, aquí solo marcamos el formulario como enviado
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <div className="container_contact">
        <div className="infoSection">
          <Grid className="address" item xs={12} sm={6} md={3}>
            <Typography variant="body2" align="center"></Typography>
          </Grid>
        </div>

        <div className="formSection">
          {isSubmitted ? (
            <div>
              <h2 className="thkyou">Form submitted,</h2>
              <p className="thkyou"> thank you for contacting us!</p>
            </div>
          ) : (
            <div div className="cointer-contact">
              
              <div className="h3Style">
                <h3 className="contactFor">Contact</h3>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <TextField sx={{       "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black", /*cambia el color cuando pinchas en el input*/}}}     
                    className="inputText"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="phone">Phone</label>
                  <TextField sx={{       "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black", /*cambia el color cuando pinchas en el input*/}}}                          
                    className="inputText"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formGroup">
                  <label htmlFor="email">Email:</label>
                  <TextField sx={{       "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "black", /*cambia el color cuando pinchas en el input*/}}}     
                    className="inputText"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="buttond">Send message</button>

                {/* <Button
                  className="btnSubmit"
                  type="submit"
                  style={{
                    background: "#000000fe",
                    width: "14em",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "2.5rem",
                    color: "white",
                    className: "button_r",

                    marginTop: "20px",
                  }}
                >
                  Send
                </Button> */}
              </form>
            </div>
          )}
        
        </div>
       
      </div>
      <Footer />
    
    </>
  );
}
