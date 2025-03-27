"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl');

router.get("/", ctrl.output.home); 
router.get("/find_friend", ctrl.output.find_friend);
router.get("/friend_list", ctrl.output.friend_list);
router.get("/chat", ctrl.output.chat);
router.get("/community", ctrl.output.chat);
router.get("/setting", ctrl.output.chat);

router.post("/find_friend", ctrl.process.find_friend);
router.post("/friend_list", ctrl.process.friend_list);
router.post("/chat", ctrl.output.chat);
router.post("/community", ctrl.output.chat);
router.post("/setting", ctrl.output.chat);

module.exports = router;