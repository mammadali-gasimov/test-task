import { GetUser } from "@/types/apiResponse/users";
import styles from "./UserCard.module.css";

interface Props {
  user: GetUser;
}

const UserCard = ({ user }: Props) => {
  return (
    <div className={styles.card__container}>
      <span className={styles.card__header}>{user?.username}</span>
      <span>email: {user?.email}</span>
      <span>phone: {user?.phone}</span>
    </div>
  );
};

export default UserCard;
