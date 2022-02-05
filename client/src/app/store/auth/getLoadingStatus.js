export const getLoadingStatus = () => () => (state) => state.auth.isLoading;

export default getLoadingStatus;
