import React, { Component } from "react";
let axios = require("../config/axios");
require("../css/NewAd.css");
let _ = require("lodash");
let FormData = require("form-data");
class NewAd extends Component {
  state = {
    categories: [],
    post: {
      userId: "",
      title: "",
      description: "",
      price: "",
      imagePath: "",
      file: {},
      category: {}
    }
  };

  async componentDidMount() {
    let { post, categories } = this.state;
    let copy = { ...post };
    let catCopy = [...categories];
    copy.userId = await axios.getUser()._id;
    catCopy = await axios.getCategories;
    console.log(catCopy);
    this.setState({
      post: copy,
      categories: catCopy.data
    });
  }
  onSubmit = async () => {
    let { post, categories } = this.state;
    let cat = categories.find(item => item._id == post.category);
    cat = _.pick(cat, ["_id", "name"]);
    post.category = cat;
    console.log(post);
    let formData = new FormData();
    formData.append("file", post.file);
    console.log(post);

    let ad = await axios.createAd(post, formData);
    console.log(ad);
    window.location = "/";
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
    let { categories } = this.state;
    let catList = categories.map(category => {
      return <option value={category._id}>{category.name}</option>;
    });

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
            <span>Category</span>
            <select
              name="category"
              style={{ marginTop: ".5rem" }}
              onChange={e => this.onChange(e)}
            >
              {catList}
            </select>

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
