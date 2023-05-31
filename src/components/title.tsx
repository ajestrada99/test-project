import React from "react";

interface TPTitlesComponents {
  title: string;
  subtitle: string;
}

const TitleComponent = ({ title, subtitle }: TPTitlesComponents) => {
  return (
    <>
        <h4 className="title-component"> {title}</h4>
        <hr className="divider-component"/>
        <h6 className="subtitle" > {subtitle}</h6>
    </>
  );
};

export default TitleComponent;
