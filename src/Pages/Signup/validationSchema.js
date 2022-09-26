import Joi from "joi";

const emailValidateSchema = Joi.string()
    .email({
        minDomainSegments: 2,
        tlds: { allow: false },
    })
    .lowercase()
    .required();

const userNameValidateSchema = Joi.string()
    .alphanum()
    .min(1)
    .max(30)
    .required();

const passwordValidateSchema = Joi.string()
    .pattern(
        new RegExp(
            "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
    )
    .required();

export { emailValidateSchema, userNameValidateSchema, passwordValidateSchema };
