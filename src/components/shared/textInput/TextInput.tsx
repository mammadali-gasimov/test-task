import styles from "./TextInput.module.css";

interface Props {
  setText: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

const TextInput = ({ setText, type }: Props) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <input
      className={styles.text__input}
      type={type ?? "text"}
      onChange={handleSearchChange}
      placeholder="Username, email or phone"
    />
  );
};

export default TextInput;
