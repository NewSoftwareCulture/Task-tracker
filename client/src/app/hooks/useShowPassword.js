import { useState } from 'react';

export const useShowPassword = (initState) => {
  const [showPassword, setShowPassword] = useState(initState);

  const passwordType = showPassword ? 'text' : 'password';

  return [passwordType, setShowPassword];
};

export default useShowPassword;
