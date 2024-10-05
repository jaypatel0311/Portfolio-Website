import React from "react";
import Logo from "../../img/postgresql-logo.svg";
import { useTheme } from "../../context/ThemeContext";

interface MongoDBLogoProps {}

export const MongoDBLogo = ({ ...props }: MongoDBLogoProps) => {
  const { activeTheme } = useTheme();
  return (
    <>
      <div className="logo-container">
        <img
          src={Logo}
          color={activeTheme === "light" ? "#2F2F3A" : "#ffffff"}
        />
        <p style={{ color: activeTheme === "light" ? "#2F2F3A" : "#ffffff" }}>
          Postgresql
        </p>
      </div>
    </>
  );
};

export default MongoDBLogo;
