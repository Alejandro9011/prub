import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaShower, FaRegSquare } from "react-icons/fa";
import { HouseContext } from "../../Context/Context";
import "./House.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Banner } from "../Banner/Banner";
import Filter from "../Filtro/filtro"; // Import the Filter component
import Filtertype from "../Filtro/filtrotipo";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";

export const House = () => {
  const { data } = useContext(HouseContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredHouses = data.filter((house) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const lowerCaseselectedCountry = selectedCountry.toLowerCase();
    const lowerCaseselectedType = selectedType.toLowerCase();

    return (
      (selectedCountry === "" ||
        house.country.toLowerCase() === lowerCaseselectedCountry ||
        house.type.toLowerCase() === lowerCaseselectedCountry) &&
      (selectedType === "" ||
        house.country.toLowerCase() === lowerCaseselectedType ||
        house.type.toLowerCase() === lowerCaseselectedType) &&
      (house.country.toLowerCase().includes(lowerCaseSearchTerm) ||
        house.type.toLowerCase().includes(lowerCaseSearchTerm))
    );
  });

  const handleTypeChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "country") {
      setSelectedCountry("");
    } else if (selectedValue === "type") {
      setSelectedType("");
    } else {
      setSelectedCountry(selectedValue);
      setSelectedType(selectedValue);
    }
  };

  return (
    <>
      <Header />
      <Banner />
      <div className="filtros">
        {/* Call the Filter component just below the Banner */}
        <Filter
          selectedCountry={selectedCountry}
          handleTypeChange={handleTypeChange}
          searchTerm={searchTerm}
        />
        <Filtertype
          selectedType={selectedType}
          handleTypeChange={handleTypeChange}
          searchTerm={searchTerm}
        />
      </div>
      <div className="house_container">
        {filteredHouses.map((house) => (
          <div className="house" key={house._id}>
            <Link className="house__image" to={`/detail/${house.id}`}>
              <img className="house__img" src={house.image} alt="img" />
            </Link>
            <div className="house__main">
              <div className="house__div-country">
                <div className="house__country">{house.type}</div>
                <div className="house__country house__country-modifer">
                  {house.country}
                </div>
              </div>

              <div className="house__text">
                <p> {house.address}</p>
              </div>

              <div className="house__div-content">
                <div className="house__icon">
                  <BiBed />
                  {house.bedrooms}
                </div>
                <div className="house__icon">
                  <FaShower />
                  {house.bathrooms}
                </div>
                <div className="house__icon">
                  <AspectRatioIcon />
                  {house.surface}
                </div>
              </div>
              <div className="house__price">€ {house.price}</div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

