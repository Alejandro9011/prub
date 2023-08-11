import "./Banner.css";

export function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner__text">
          <h1 className="banner__h1">
            <span className="banner_modifier">Rent</span> without<br></br>{" "}
            <span className="banner_modifier2">prejudice.</span>
          </h1>
          <p className="banner_text-modifier">
            At our house rental platform, we are committed to creating a
            welcoming environment where individuals from all walks of life can
            come together and find their ideal living spaces. We believe in
            fostering a sense of belonging and inclusivity, ensuring that
            everyone feels valued and respected. With a diverse range of
            properties available for rent, we cater to various preferences and
            needs. Whether you're seeking a cozy apartment in the heart of the
            city or a serene countryside retreat, our platform offers a wide
            selection to choose from. 
          </p>
        </div>
        <div className="banner__div-img">
          <img
            className="banner__img"
            src="../assets/img/ImageBanner.png"
            alt="House for rent"
          />
        </div>
      </div>
    </section>
  );
}
