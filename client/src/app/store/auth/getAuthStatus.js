export const getAuthStatus = () => () => (state) => !!state.auth.auth;

export default getAuthStatus;
