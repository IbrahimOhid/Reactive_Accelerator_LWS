import { useDebugValue, useEffect, useState } from "react";

export const useGithub = (username) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

//   useDebugValue(`fetching Data ${username}`)
useDebugValue(error ? `Error Fetching ${username}`: `No Error ${username}`)

  const fetchGithubData = async()=>{
    setLoading(true)
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUser(data)
        setLoading(false)
    } catch (error) {
        setError(error)
    }
  }
useEffect(()=>{
    fetchGithubData();
},[username]);
return {
    user, loading, error
}
};




