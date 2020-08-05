import React, { Component } from 'react';

class ArtPrueba extends React.Component {
    render() {
        return (
            <div className="card bg-dark col-3">
                <div className="card-body">
                    <img className="card-img-top" src="https://images.squarespace-cdn.com/content/v1/5a5906400abd0406785519dd/1552662149940-G6MMFW3JC2J61UBPROJ5/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/baelen.jpg?format=1500w"/>
                    <h1>Titulo artículo</h1>
                    <h2>Categoría</h2>
                    <p>Una breve descripción</p>
                    <a href="" className="btn btn-danger">Somewhere</a>
                </div>
            </div>
        );
    }
}

export default ArtPrueba;