import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

import { getUsers } from "@/services/api/users";
import { GetUsersResponse } from "@/types/apiResponse/users";
import { UserCard, TextInput, Loader } from "@/components";
import { useCustomQuery, useDebounce } from "@/hooks";
import { filterList } from "./helpers";
import styles from "./UsersList.module.css";

const UsersList = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText);

  const { isLoading, data, error } = useCustomQuery<GetUsersResponse>(
    "users-list",
    ({ signal }) => getUsers(signal)
  );
  const list = data?.data;

  const filteredList = useMemo(
    () => filterList(debouncedValue, list),
    [list, debouncedValue]
  );

  const listToRender = debouncedValue ? filteredList : list;

  useEffect(() => {
    if (error) {
      toast.error("Something went wrong!");
    }
  }, [error]);

  return isLoading ? (
    <Loader />
  ) : (
    <section className={styles.list__section}>
      <form className={styles.search__form}>
        <TextInput setText={setSearchText} />
      </form>
      <ul className={styles.list__container}>
        {listToRender?.length ? (
          listToRender.map((user) => <UserCard key={user?.id} user={user} />)
        ) : (
          <p>Nothing was found!</p>
        )}
      </ul>
    </section>
  );
};

export default UsersList;
