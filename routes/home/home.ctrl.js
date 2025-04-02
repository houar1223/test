"use strict";

const logger = require("../../config/logger");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  }, 
  find_friend: (req, res) => {
    logger.info(`GET /find_friend 304 "친구 찾기 화면으로 이동"`);
    res.render("home/find_friend");
  },
  find: (req, res) => {
    logger.info(`GET /find 304 "친구 추천 화면으로 이동"`);
    res.render("home/find");
  },
  friend_list: (req, res) => {
    logger.info(`GET /friend_list 304 "친구 목록 화면으로 이동"`);
    res.render("home/friend_list")
  },
  chat: (req, res) => {
    logger.info(`GET /chat 304 "채팅 화면으로 이동"`);
    res.render("home/chat")
  },
  community: (req, res) => {
    logger.info(`GET /community 304 "동호회 화면으로 이동"`);
    res.render("home/community")
  },
  setting: (req, res) => {
    logger.info(`GET /setting 304 "설정 화면으로 이동"`);
    res.render("home/setting")
  }
}

const process = {
  find_friend: async (req, res) => {
    const user = new User(req.body);
    const response = await user.find_friend();

    const url = {
      method: "POST",
      path: "/find_friend",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
  find: async (req, res) => {
    const user = new User(req.body);
    const response = await user.find();

    const url = {
      method: "POST",
      path: "/find",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
  friend_list: async (req, res) => {
    const user = new User(req.body);
    const response = await user.friend_list();

    const url = {
      method: "POST",
      path: "/friend_list",
      status: response.err ? 409 : 201,
    };

    logger.info(response, url);
    return res.status(url.status).json(response);
  },
  chat: async (req, res) => {
    const url = {
      method: "POST",
      path: "/chat",
      status: response.err ? 409 : 201,
    };

    logger.info(response, url);
    return res.status(url.status).json(response);
  },
  community: async (req, res) => {
    const url = {
      method: "POST",
      path: "/community",
      status: response.err ? 409 : 201,
    };

    logger.info(response, url);
    return res.status(url.status).json(response);
  },
  setting: async (req, res) => {
    const url = {
      method: "POST",
      path: "/setting",
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