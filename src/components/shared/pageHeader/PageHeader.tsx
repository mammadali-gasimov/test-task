import styles from "./PageHeader.module.css";

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default PageHeader;
