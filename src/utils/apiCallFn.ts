const apiCallFn = async (url, config) => {
  const options = {
    method: 'GET',
    headers: {
      wxy: 'hello',
      ...(config.headers || {}),
    },
  };

  if (config.params) {
    const params = new URLSearchParams({
      ...config.params,
    });
    url = `${url}?${params}`;
    // console.log(url);
  }

  if (config.method) {
    options.method = config.method;
    options.body = config.body;
  }
  // console.log(options);

  try {
    // console.log('Api calling');
    const response = await fetch(url, options);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export { apiCallFn };
