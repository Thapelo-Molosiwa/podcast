import React from "react";
import {
  SlCard,
  SlDetails,
  SlRating,
} from "@shoelace-style/shoelace/dist/react";
import "../favs/favs.css";



export default function FavoriteShow ({ show, handleRemoveFromFavorites }) {
  const getGenres = (genreIds) => {
    const genres = [
      "Personal Growth",
      "True Crime and Investigative Journalism",
      "History",
      "Comedy",
      "Entertainment",
      "Business",
      "Fiction",
      "News",
      "Kids and Family",
    ];

    // Ensure genreIds is always an array
    if (!Array.isArray(genreIds)) {
      genreIds = [genreIds];
    }
    // Map genre IDs to names and join with commas
    return genreIds.map((id) => genres[id - 1]).join(",");
  };

  return (
    <div className="podcast-card">
      <SlCard className="card-overview">
        {show.image && <img src={show.image} alt={show.title} />}
        <strong>{show.title}</strong>
        <br />
        <medium>Genre : {getGenres(show.genres)} </medium>
        <br />
        <br />
        <small>
          Last Updated:{" "}
          {new Date(show.updated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </small>
      </SlCard>
      <div className="card-footer">
        <SlDetails summary="Show Description">{show.description}</SlDetails>
        <br />
        <SlRating
          label="Rating"
          getSymbol={() => '<sl-icon name="heart-fill"></sl-icon>'}
          style={{ "--symbol-color-active": "#ff4136" }}
          onClick={() => handleRemoveFromFavorites(show.id)}
          interactive // Make the rating component clickable
        />
      </div>
    </div>
  );
};


