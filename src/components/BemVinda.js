import React from "react";
import PropTypes from "prop-types";

const BemVinda = ({ nome, idade }) => {
    return <h2>Bem vinda, meu nome é {nome}. Eu tenho {idade} anos.</h2>
};

BemVinda.propTypes = {
    nome: PropTypes.string.isRequired,
    idade: PropTypes.number.isRequired,
};

BemVinda.defaultProps = {
    nome: "Jessica",
    idade: 30,
};

export default BemVinda;