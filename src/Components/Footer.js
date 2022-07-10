import React from "react";
import classNames from "classnames";

import data from "../Data/Footer";
import Rudolf from "../Assets/Images/rudolf-aw-yeah.png";

const Footer = () => {
  const { items, blipBlop } = data;

  return (
    <footer className="Footer">
      {items.map((item, i) => (
        <LogoBlock key={i} {...item} />
      ))}
      <BlipBlop {...blipBlop} />
    </footer>
  );
};

const LogoBlock = ({ title, logos }) => {
  return (
    <>
      <h3 className="Footer__Heading">{title}</h3>
      <div className="Footer__Logos">
        {logos.map((logo, i) => (
          <Logo key={i} {...logo} />
        ))}
      </div>
    </>
  );
};

const Logo = ({ href, image, alt, isLarge }) => {
  const classes = classNames("Logo", { ["Logo--Large"]: isLarge });

  return (
    <div className={classes}>
      <a href={href} rel="noreferrer">
        <img className="Logo__Image" src={image} alt={alt} />
      </a>
    </div>
  );
};

const BlipBlop = ({ text, github, linkedin }) => {
  return (
    <>
      <p className="Footer__BlipBlop">
        {text + " "}
        <a className="Footer__Link" href={github.href} rel="noreferrer">
          <span>{github.linkText}</span>
        </a>
      </p>
      <a href={linkedin.href} rel="noreferrer">
        <img className="Rudolf" src={Rudolf} aria-hidden />
        <span className="sr-only">{linkedin.linkText}</span>
      </a>
    </>
  );
};

export default Footer;
