import decode from 'jwt-decode';

const ID_TOKEN_KEY = 'id_token';

export function login() {

}

export function logout() {
  clearIdToken();
}

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function clearIdToken() {
  localStorage.removeItem(ID_TOKEN_KEY);
}

export function setIdToken(token) {
  localStorage.setItem(ID_TOKEN_KEY, token);
}

export function isLoggedIn() {
  const idToken = getIdToken();
  return !!idToken && !isTokenExpired(idToken);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.expirationDate) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(token.expirationDate);

  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function getUserInfo() {
  const idToken = getIdToken();
  const decodedIdToken = decode(idToken);

  return decodedIdToken;
}

export function getUserID() {
  const user = getUserInfo();
  return user.userId;
}

export function getAuthHeader() {
  return {
    Authorization: `Bearer ${getIdToken()}`,
  };
}

export function getPermissionLevel() {
  const user = getUserInfo();
  return user.permissionId;
}

export function hasUserEnoughPermissionLevel(neededPermission) {
  return getPermissionLevel() >= neededPermission;
}
