import { useEffect, useState } from "react";
import machineTypes from "../data/machineTypes.json";
import carImages from "../data/carImages.jsx";
import validateGSTIN from "../utils/validateGSTIN.jsx";

function BookMachine() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("Select your machine type");
  const [subTypes, setSubTypes] = useState(["Select your machine sub-type"]);
  const [subType, setSubType] = useState("Select your machine sub-type");
  const [dropLocation, setDropLocation] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [specificInfo, setSpecificInfo] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [companyName, setCompanyName] = useState("");
  const [companyGST, setCompanyGST] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");


  // gst validation message
  const [gstError, setGstError] = useState(false);
  const [agreeTC, setAgreeTC] = useState(false);

  // taking value of modal inputs
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleCompanyGST = (e) => {
    let gstin = e.target.value;
    if (gstin.length > 15) {
      gstin = gstin.slice(0, 15);
    }
    
    if (gstin.length === 15) {
      if (!validateGSTIN(gstin)) {
        setGstError(true);
        return;
      }
    };
  
    setCompanyGST(gstin);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZipCode = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      carType === "Select your machine type" ||
      subType === "Select your machine sub-type" ||
      dropLocation === "" ||
      quantity === "" ||
      pickTime === "" ||
      dropTime === "" ||
      specificInfo === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCarType = (e) => {
    console.log(e.target.value);
    setCarType(e.target.value);
    setCarImg(e.target.value);
    setSubTypes(machineTypes[e.target.value]);
    setSubType(machineTypes[e.target.value][0]);
  };

  const handleSubType = (e) => {
    console.log(e.target.value);
    setSubType(e.target.value);
  };

  const handleDropLocation = (e) => {
    setDropLocation(e.target.value);
  };

  const handleQuantity = (e) => {
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    setQuantity(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  const handleSpecificInfo = (e) => {
    setSpecificInfo(e.target.value);
  };

  // based on value name show car img
  let imgUrl = carImages[carImg] || "";

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Request a Quote</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email for receipt of quotes.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Machine
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCarType }>
                    {/* <option key="Select Machine Type" value="Select Machine Type">Select Machine Type</option> */}
                    {Object.keys(machineTypes).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Sub-Type <b>*</b>
                  </label>
                  <select value={subType} onChange={handleSubType}>
                  {/* <option key="Select Machine Sub-Type" value="Select Machine Sub-Type">Select Machine Sub-Type</option> */}
                    {subTypes.map((subTypeOption) => (
                      <option key={subTypeOption} value={subTypeOption}>
                        {subTypeOption}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="box-form__input-text">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Where in India{" "}
                    <b>*</b>
                  </label>
                  <input placeholder="Select location" value={dropLocation} onChange={handleDropLocation}></input>
                </div>

                <div className="box-form__input-text">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Quantity{" "}
                    <b>*</b>
                  </label>
                  <input type="number" placeholder="Quantity" value={quantity} onChange={handleQuantity}></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Date of Requirement<b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Last date of use<b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__input-text">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Specific information to share{" "}
                  </label>
                  <input placeholder="Enter specific info" value={specificInfo} onChange={handleSpecificInfo}></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Request a Quote</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this enquiry, you will receive:
          </h4>
          <p>
            A quotation from the supplier for the machine you are requesting verified and managed by our team.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Date of Requirement</h6>
                  <p>
                    {pickTime}
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Last date of use</h6>
                  <p>
                    {dropTime} </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Location : </h6>
                  <p>{dropLocation}</p>
                </div>
              </span>
            </div>

          <div className="booking-modal__car-info__model">
            <h5>
              <span>Machine :</span> {carType}
            </h5>
            <h5>
              <span>Machine Sub-Type :</span> {subType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  Company Name <b>*</b>
                </label>
                <input
                  value={companyName}
                  onChange={handleCompanyName}
                  type="text"
                  placeholder="Enter company name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Company GST No. <b>*</b>
                </label>
                <input
                  value={companyGST}
                  onChange={handleCompanyGST}
                  type="text"
                  placeholder="Enter company GST No."
                ></input>
                <p className="error-modal">This field is required. {gstError?"Invalid GST Number":null}</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZipCode}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox" checked={agreeTC} onChange={(e)=>setAgreeTC(e)}></input>
              <p>Confirm to GoBusiness Terms and Conditions</p><b>*</b>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking} disabled={!agreeTC}>Request a Quote</button>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}

export default BookMachine;
