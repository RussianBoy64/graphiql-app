export const validatePassword = (password: string) => {
  if (password.length < 8) {
    return false;
  }

  if (!/\d/.test(password)) {
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    return false;
  }

  if (!/[a-z]/.test(password)) {
    return false;
  }

  // Checking for at least one special character (!, @, #, $, %, ^, &, *)
  if (!/[!@#$%^&*]/.test(password)) {
    return false;
  }

  return true;
};
