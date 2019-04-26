import React, { Component } from "react";
require("../css/NewAd.css");
class NewAd extends Component {
  state = {};
  render() {
    return (
      <div className="new-ad">
        <div className="vertical-container">
          <div>
            <h1>Crear nuevo anuncio</h1>
            <input placeholder="titulo" />
            <input placeholder="Precio" />
            <input placeholder="Descripción" style={{}} />
          </div>

          <div>
            <button style={{ marginBottom: "3rem" }}>Publicar</button>
          </div>
        </div>
        <div id="right">
          <h1>Agrega una foto a tu anuncio</h1>
          <input type="file" />
          <div id="preview" />
        </div>
      </div>
    );
  }
}

export default NewAd;
