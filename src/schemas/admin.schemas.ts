import { Joi } from "celebrate";
import { joiPasswordExtendCore } from "joi-password";
const JoiPassword = Joi.extend(joiPasswordExtendCore);

export const schemaAdmin = Joi.object({
  Name: Joi.string(),
  Password: JoiPassword.string()
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .min(8)
    .required()
    .messages({
      "string.min": "Password must be 8 chars long",
      "string.minOfSpecialCharacters(1)":
        "Password must contain 1 special caharacter",
      "string.minOfNumric(1)": "Password must contain 1 didgit",
      "string.minLowercase(1)": "Password must contain 1 lower char",
      "string.minUppercase(1)": "Password must contain 1 upper char",
    }),
  Work: Joi.object().pattern(
    Joi.string(),
    Joi.object({
      read: Joi.boolean(),
      write: Joi.boolean(),
    })
  ),
  Email: Joi.string().email().required(),
  ConfirmPassword: Joi.string().valid(Joi.ref("Password")).required(),
  Captcha: Joi.string().valid("abc"),
  RegEx: Joi.string()
    .regex(/^[a-zA-Z0-9]{3}$/)
    .required(),
  Bool: Joi.string().required(),
  Mobileno: Joi.number().when("Bool", {
    is: "true",
    then: Joi.number().required(),
  }),
});
