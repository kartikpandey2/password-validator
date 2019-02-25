/**
 * Rules
 * Minimum length: 6
 * Maximum length: 12
 * At least 1 letter in [a-z], [0-9], [A-Z] and [*$_#=@] each.
 * It should not contain any letter from [%!)(]
 */

const test = ["12sdA@83", "aF1#", "2w3E*%dg", "2We3345", "1234567"];

const passwordValidator = password => {
  return printResult(password);
};

const printResult = password => {
  const { message, success } = isPasswordEligible(password);
  return { message, success };
};

const isPasswordEligible = password => {
  const passwordLength = password.length;
  if (passwordLength < 6) {
    return {
      success: false,
      message: "Password is too small, it must be atleast 6 character long"
    };
  }

  if (passwordLength > 12) {
    return {
      success: false,
      message: "Password is too big, maximum 12 character long password allowed"
    };
  }

  /**
   * Regular expression for [a-z], [0-9], [A-Z] and [*$_#=@].
   */
  const regEx1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*$_#=@])/;
  if (!regEx1.test(password)) {
    return {
      success: false,
      message:
        "Password must contain at least one letter from [a-zA-Z0-9*$_#=@]"
    };
  }

  /**
   * Regular expression to prevent user to enter [%!)(] characters.
   */

  const regEx2 = /^(?!.*[%!)(])/;
  if (!regEx2.test(password)) {
    return {
      success: false,
      message: "Password cannot contain %!)("
    };
  }

  return {
    success: true,
    message: "Success"
  };
};
