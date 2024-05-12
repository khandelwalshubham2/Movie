import { MovieDataType } from "../modals";

export const getData = async (url: string) => {
  const options = { method: "GET" };
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

export const putData = async (url: string, data: MovieDataType) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};
