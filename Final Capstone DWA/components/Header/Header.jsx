import React from "react";
import "../Header/header.css"
import { SlIcon, SlButton, } from '@shoelace-style/shoelace/dist/react';




export default function Header(){

  const App = () => <SlAvatar label="User avatar" />;
  return(

    <div className="Header">
      <div className="LogoPic">
       <SlIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '3rem' }}></SlIcon>
      </div>
      <div className="Headddd">
        <h1>
      kick  Budd Podcast
        </h1>

      </div>

      <div>
      <div className="favs">
          {/* Favorites button */}
          <SlButton
            variant="neutral"
            onClick={() => {
              toggleOverlay;
              handleShowFavorites();
            }}
          >
            Favorites
          </SlButton>
        </div>
        <div className="card-footer">
        <SlDetails summary="Show Description">{show.description}</SlDetails>
        <br />
        <button
          label="Rating"
          getSymbol={() => '<sl-icon name="heart-fill"></sl-icon>'}
          style={{ "--symbol-color-active": "#ff4136" }}
          onClick={() => {
            if (isFavorite(show.id)) {
              handleRemoveFromFavorites(show.id);
            } else {
              handleAddToFavorites(show.id);
            }
          }}
          interactive // Make the rating component clickable
        >
          Add to favorites
        </button>
      </div>
      </div>
    </div>
  )
}