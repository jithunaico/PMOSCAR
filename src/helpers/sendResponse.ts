/* eslint-disable indent */
const responseMessage = (statusCode: number) => {
  let message = '';
  switch (statusCode) {
    case 200:
      message = 'Success';
      break;

    case 201:
      message = 'New entry created';
      break;

    case 400:
      message = 'Bad request';
      break;

    case 401:
      message = 'Unauthorized/Token_expired';
      break;

    case 403:
      message = 'Forbidden';
      break;

    case 404:
      message = 'Not found';
      break;

    case 409:
      message = 'Duplicate resource';
      break;

    case 422:
      message = 'Unprocessable Entry';
      break;

    case 500:
      message = 'Something went wrong';
      break;

    default:
      message = '';
      break;
  }

  return message;
};

const sendResponse = (statusCode: number, data = {}, sendMessage = '') => {
  try {
    const message = responseMessage(statusCode);
    return {
      statusCode,
      body: {
        type: message,
        message: sendMessage ? sendMessage : message,
        data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};


module.exports = {
  sendResponse,
};
