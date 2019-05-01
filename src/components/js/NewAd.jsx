import React, { Component } from "react";
// let axios = require("../config/axios");
require("../css/NewAd.css");
let FormData = require("form-data");
class NewAd extends Component {
  state = {
    post: {
      userId: "",
      title: "",
      description: "",
      price: "",
      imagePath: "",
      file: {}
    }
  };

  // async componentDidMount() {
  //   let { post } = this.state;
  //   let copy = { ...post };
  //   copy.userId = await axios.getUser()._id;
  //   this.setState({
  //     post: copy
  //   });
  // }
  onSubmit = async () => {
    // let { post } = this.state;
    // let formData = new FormData();
    // formData.append("file", post.file);
    // let ad = await axios.createAd(post, formData);
    // console.log(ad);
    // window.location = "/";
    // for (let key in post) {
    //   formData.append(key, post[`${key}`]);
    // }
    // for (let key of formData.entries()) {
    //   console.log(key[0] + key[1]);
    // }
  };

  onChange(field) {
    let { post } = this.state;
    let copy = { ...post };
    copy[field.target.name] = field.target.value;
    this.setState({
      post: copy
    });
  }
  loadImage(event) {
    let { post } = this.state;
    post.imagePath = URL.createObjectURL(event.target.files[0]);
    post.file = event.target.files[0];
    this.setState({
      post: post
    });
  }
  render() {
    return (
      <div className="new-ad">
        <div className="vertical-container">
          <div className="left-info">
            <h1>Crear nuevo anuncio</h1>
            <input
              name="title"
              placeholder="titulo"
              onChange={e => this.onChange(e)}
            />
            <input
              name="price"
              placeholder="Precio"
              onChange={e => this.onChange(e)}
            />
            <input
              name="description"
              placeholder="Descripción"
              onChange={e => this.onChange(e)}
              style={{ paddingBottom: "5rem" }}
            />
            <button onClick={() => this.onSubmit()}>Publicar</button>
          </div>
        </div>
        <div id="right">
          <h1>Agrega una foto a tu anuncio</h1>
          <input
            name="imagePath"
            type="file"
            onChange={e => this.loadImage(e)}
          />
          <div id="preview">
            <img
              src={this.state.post.imagePath}
              className="image-preview"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewAd;
