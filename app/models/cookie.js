"use strict";

const express = require("express")
const session = require("express-session");
const UserStorage = require("./UserStorage");

const app = express();

// module.exports = cookie;