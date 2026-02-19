export const wrapPromise = (promise) => {
  let status = "pending";
  let response;

  const sespender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (error) => {
      status = "error";
      response = error;
    },
  );
  const read = () => {
    switch (status) {
      case "pending":
        throw sespender;
      case "error":
        throw response;

      default:
        throw response;
    }
  };

  return {
    read,
  };
};
