import React from "react";
import { useTranslation } from "react-i18next";
import Header from "shared/components/Header";

const About = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "examples",
  });
  return (
    <div>
      <Header />
      <p>{t("page.home.title")}</p>
    </div>
  );
};

export default About;
