module.exports.hello = (event, context, callback) => {
  const pathParameters = event.pathParameters || { name: 'World' };

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${pathParameters.name}!`,
    }),
  };

  callback(null, response);
};
