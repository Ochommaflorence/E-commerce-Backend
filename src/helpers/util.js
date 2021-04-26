import crypto from "crypto";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

export const handleResponse = (res, statusCode, message, data, token) => {
  res.status(statusCode).json({
    message,
    data,
    token,
  });
};

export const generateToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_PASSWORD);
};
export const decodeToken = (token) => {
  jwt.decode(token, process.env.TOKEN_PASSWORD);
};

export const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next;
  }

  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};
