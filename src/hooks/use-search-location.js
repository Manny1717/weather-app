import { useState } from "react";
import axios from "axios";

export function useSearchLocation() {
  const [data, setData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // arrow function with async
  // const onLocationSearch = async () => {};
  async function onLocationSearch() {
    setIsLoading(true);
    // set defaults: is your local state already has data, clear it here
    if (data) {
      setData(undefined);
    }
    if (errorMessage && errorMessage.trim().length > 1) {
      setErrorMessage(undefined);
    }
    // try-catch
    try {
      if (!(searchValue.trim().length > 1)) {
        throw new Error("Location not valid");
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=de1c87324d1bebc8486c9f702c6d1b12`;
      const response = await axios.get(url);
      if (!response) {
        throw new Error("Unable to get information at this time");
      }
      setData(response.data);
    } catch (error) {
      // show an alert but with the error message below and not using local state
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function onInputChange(e) {
    searchValue(e.target.value);
  }

  return {
    onLocationSearch,
    isLoading,
    errorMessage,
    onInputChange,
  };
}
