import styles from "./MainButton.module.css";

interface Props {
  children: React.ReactElement;
}

const MainButton = ({ children }: Props) => {
  return <button className={styles.button}>{children}</button>;
};

export default MainButton;
