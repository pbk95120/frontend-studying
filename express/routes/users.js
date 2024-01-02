const express = require("express");
const router = express.Router();
const conn = require("../mariadb");
const { body, param, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken"); // jwt 모듈
const dotenv = require("dotenv");
dotenv.config(); // dotenv 컨피그 사용

router.use(express.json());

router.get("/", (req, res) => {
  let { email } = req.body;
  console.log(email);
  conn.query(
    `SELECT * FROM users WHERE email = ?`,
    email,
    function (err, results, fields) {
      res.status(200).json({
        results,
      });
    }
  );
});

router.post("/join", [
  // body("email").notEmpty().isEmail(),
  // withMessage("이메일 형식이 아닙니다."),
  // body("name")
  //   .notEmpty()
  //   .isLength({ min: 2, max: 10 })
  //   .withMessage("이름은 2~10자리입니다."),
  // body("password")
  //   .notEmpty()
  //   .isLength({ min: 8, max: 20 })
  //   .withMessage("비밀번호는 8~20자리입니다."),
  // body("contact")
  //   .notEmpty()
  //   .isString()
  //   .isLength({ min: 11, max: 11 })
  //   .withMessage("연락처는 11자리입니다."),
]);

const token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY); // 토큰 생성 (payload, private key)
console.log(token);

const decoded = jwt.verify(token, process.env.PRIVATE_KEY); // 토큰 검증
console.log(decoded);

module.exports = router;
