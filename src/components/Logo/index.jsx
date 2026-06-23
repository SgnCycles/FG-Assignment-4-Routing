import { useLocation } from "react-router-dom";
import styles from "./logo.module.css";
import siteLogo from "../../assets/logos/logo.png";

const Logo = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div
      className={isHomepage ? styles.logoContainerHome : styles.logoContainer}
    >
      <img src={siteLogo} alt="Site Logo" height={50} width="auto" />
    </div>
  );
};

export default Logo;
