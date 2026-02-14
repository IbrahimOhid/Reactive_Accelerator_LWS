import { wrapPromise } from "../utils/WrapPromise";

export const fetchPost = async (url) => {
  const response = await fetch(url);
  return wrapPromise(response.json())
};
