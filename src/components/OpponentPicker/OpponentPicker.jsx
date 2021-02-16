import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./OpponentPicker.module.css";
import { fetchOpponents } from "../../api";

const OpponentPicker = ({ handleOpponentChange }) => {
  const [fetchedOpponents, setFetchedOpponents] = useState([]);

  useEffect(() => {
    const fetchDATA = async () => {
      setFetchedOpponents(await fetchOpponents());
    };

    fetchDATA();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={e => handleOpponentChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedOpponents.map((opponent, i) => (
          <option key={i} value={opponent}>
            {opponent}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;