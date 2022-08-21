const apiURL = "https://jsonplaceholder.typicode.com";

interface secondArgument{
  data?: any
  token? : string
  customHeaders? :object
}

async function client(
  endpoint : string,
  { data, token, customHeaders, ...customConfig }:secondArgument = {}
) {
  const config = {
    method: data ? "POST" : "GET",
    body: data ? JSON.stringify(data) : undefined,
    headers: data ? new Headers({ 'Content-type': 'application/json' ,
    ...customHeaders,
  }) : undefined ,
    ...customConfig,
  };

  return window.fetch(`${apiURL}/${endpoint}`, config).then(async (response) => {
    if (response.status === 401) {
      // refresh the page for them
      window.location.assign(window.location.toString());
      return Promise.reject({ message: "Please re-authenticate." });
    }
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}

export { client };
