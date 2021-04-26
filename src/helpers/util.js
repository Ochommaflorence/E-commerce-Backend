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
