import { PageHeader, UsersList } from "@/components";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <main className={styles.main__container}>
      <PageHeader title="Users" />
      <UsersList />
    </main>
  );
};

export default HomePage;
