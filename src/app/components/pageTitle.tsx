import React from "react";
import style from "../../styles/pageTitle.module.css";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <div className={style.titleContianer}>
      <span className={style.title}>{title}</span>
    </div>
  );
};

export default PageTitle;
