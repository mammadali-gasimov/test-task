import { Link } from "react-router-dom";

import { MainButton } from "@/components";
import { ROUTES } from "@/router/routeNames";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <main className={styles.page__container}>
      <h1>Page was not found!</h1>
      <MainButton>
        <Link className={styles.link} to={ROUTES.home}>
          Go Back
        </Link>
      </MainButton>
    </main>
  );
};

export default NotFound;
