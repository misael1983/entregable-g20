
import React from "react";
import BtnQuote from "./BtnQuote";

const QuoteBox = ({ quoteRandom, handleClick,colorRandom }) => {

    const objStyle = {
        color:colorRandom
    }

    return (
        <article className="card" style={objStyle}>
            <p className="card__quote">
                <i className="card__icon bx bxs-quote-alt-left"></i>
                {quoteRandom.quote}
            </p>
            <h1 className="card__author ">{quoteRandom.author}</h1>
        <BtnQuote
        objStyle={objStyle}
        handleClick={handleClick}
        />
        </article>
    );
};
export default QuoteBox;