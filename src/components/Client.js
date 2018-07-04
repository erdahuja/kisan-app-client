import constants from '../constants'

const makeRequest = (url, type = 'get', _body) => {
  return fetch(url, {
    method: type,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(_body)
  }).then(checkStatus)
    .then(parseJson)
}

export const getContacts = async () => {
  const url = (
    'https://jsonplaceholder.typicode.com/users'
  );
  return await makeRequest(url).then(setLocalStorage('contacts'));
}

export const getMessages = async () => {
  const url = (
    constants.SERVER_URL + '/messages'
  );
  return await makeRequest(url).then(setLocalStorage('messages'));
}

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
}

export const getLocalStorage = (key) => localStorage.getItem(key);

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error);
    throw error;
  }
}

const parseJson = (response) => {
  return response.json();
}

export const sendSMS = async (from, to, text, name) => {
  try {
    checkStatus(await makeRequest(constants.SERVER_URL+ '/send-sms', 'post', {
      from, to, text, name
    }));
  } catch (error) {
    throw error;
  }
}

