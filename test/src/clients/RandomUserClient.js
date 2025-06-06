import axios from "axios";

const fetchRandomCharacter = async () => {
  const response = await axios.get('https://randomuser.me/api/');
  return response.data;
};

// Facade function
export const fetchRandomCharacterFacade = async () => {
  return await fetchRandomCharacter();
};