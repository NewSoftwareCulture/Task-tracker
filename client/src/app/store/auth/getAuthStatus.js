export const getAuthStatus = () => () => (state) => !!state.auth.userId;

export default getAuthStatus;
