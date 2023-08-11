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

// import React, { useContext, useState } from "react";
// import { HouseContext } from "../../Context/Context";
// import "./House.css";
// import { Link } from "react-router-dom";
// import { TextField, Button, Grid, InputAdornment } from "@material-ui/core";

// export const House = () => {
//   const { data } = useContext(HouseContext);
//   const [minPrice, setMinPrice] = useState(""); // Precio mínimo
//   const [maxPrice, setMaxPrice] = useState(""); // Precio máximo
//   const [location, setLocation] = useState(""); // Ubicación
//   const [filteredData, setFilteredData] = useState(null); // Datos filtrados

//   const handleFilter = () => {
//     const filteredData = data.filter((house) => {
//       // Filtrar por rango de precios
//       const price = parseFloat(house.price);
//       if (
//         (minPrice && price < parseFloat(minPrice)) ||
//         (maxPrice && price > parseFloat(maxPrice))
//       ) {
//         return false;
//       }

//       // Filtrar por ubicación
//       if (
//         location &&
//         !house.country.toLowerCase().includes(location.toLowerCase())
//       ) {
//         return false;
//       }

//       return true;
//     });

//     setFilteredData(filteredData.length > 0 ? filteredData : null); // Actualizar los datos filtrados
//   };

//   const handleClearFilter = () => {
//     setMinPrice("");
//     setMaxPrice("");
//     setLocation("");
//     setFilteredData(null);
//   };

//   const displayData = filteredData !== null ? filteredData : data;

//   return (
//     <div className="container">
//       <div>
//         <Grid container spacing={2}>
//           <Grid item xs={2}>
//             <TextField
//               label="Precio mínimo"
//               variant="outlined"
//               fullWidth
//               value={minPrice}
//               onChange={(e) => setMinPrice(e.target.value)}
//               InputProps={{
//                 endAdornment: <InputAdornment position="end">€</InputAdornment>,
//               }}
//               inputProps={{
//                 style: { padding: "8px " }, // Ajusta el padding según tus necesidades
//               }}
//               InputLabelProps={{
//                 style: { fontSize: "12px" }, // Ajusta el tamaño de la letra del label
//               }}
//             />
//           </Grid>
//           <Grid item xs={2}>
//             <TextField
//               label="Precio máximo"
//               variant="outlined"
//               fullWidth
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(e.target.value)}
//               InputProps={{
//                 endAdornment: <InputAdornment position="end">€</InputAdornment>,
//               }}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <TextField
//               label="Ubicación"
//               variant="outlined"
//               fullWidth
//               type="list"
//               value={location}
//               onChange={(e) => setLocation(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={3}>
//             <Button
//               onClick={handleClearFilter}
//               variant="contained"
//               color="primary"
//               sx={{ background: "#4c00ff7" }}
//               disableRipple
//               disableFocusRipple
//               disableTouchRipple
//             >
//               Filtrar
//             </Button>

//             <Button
//               onClick={handleClearFilter}
//               variant="contained"
//               color="primary"
//               sx={{ background: "rgba(139, 0, 139, 1)" }}
//               disableRipple
//               disableFocusRipple
//               disableTouchRipple
//             >
//            Nueva Búsqueda
//             </Button>
//           </Grid>
//         </Grid>
//       </div>

//       <div className="house_container">
//         {displayData.length === 0 ? (
//           <p>No se encontraron resultados</p>
//         ) : (
//           displayData.map((house) => (
//             <div className="house_main" key={house._id}>
//               <h3>{house.name}</h3>
//               <p>{house.country}</p>
//               <p>{house.price}</p>

//               <div className="figure">
//                 <Link to={`/detail/${house.id}`}>
//                   <img className="imagen" src={house.image} alt="img" />
//                 </Link>
//               </div>
//               <p>{house.address}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
