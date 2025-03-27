"use strict";

const User = require("../../models/User");
const UserStorage = require("../../models/UserStorage");
const logger = require("../../config/logger");
const cookie = require("../../models/cookie");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  }, 
  login: (req, res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("home/login");
  },
  register: (req, res) => {
    logger.info(`GET /register 304 "회원가입 화면으로 이동"`);
    res.render("home/register")
  },
  gallery: (req, res) => {
    logger.info(`GET /gallery 304 "갤러리 화면으로 이동"`);
    res.render("home/gallery")
  }
}

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };

    cookie.login_cookie();
    log(response, url);
    return res.status(url.status).json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();

    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };

    logger.info(response, url);
    return res.status(url.status).json(response);
  },
  gallery: async (req, res) => {
    const url = {
      method: "POST",
      path: "/gallery",
      status: response.err ? 409 : 201,
    };

    logger.info(response, url);
    return res.status(url.status).json(response);
  }
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err)
    logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.err}`);
  else
    logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success}, ${response.msg || ""}`);
}