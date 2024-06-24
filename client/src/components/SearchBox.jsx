import { useEffect, useState } from "react";
import machineTypes from "../data/machineTypes.json";
import carImages from "../data/carImages.jsx";
import validateGSTIN from "../utils/validateGSTIN.jsx";

function SearchBox() {
    const [searchText, setSearchText] = useState("");

    return (
        <>
            {/* <section id="booking-section" className="book-section"> */}
                {/* <div className="container"> */}
                    {/* <div className="book-content"> */}
                        <div className="book-content__box">
                            <div className="box-form__input-text">
                                <div className="hero-content__text__btns">
                                    <div ><input placeholder="Search machines" value={searchText} onChange={(e) => setSearchText(e.target.value)}></input></div>
                                    <button onClick={"/"} type="submit">Search</button></div>
                            </div>
                        </div>
                    {/* </div> */}
                {/* </div> */}
            {/* </section > */}
        </>
    );
}

export default SearchBox;
