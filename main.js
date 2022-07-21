"use strict";

const contentTypes = require("./contentTypes");
const utils = require("./utils");

const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./router");

router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("vitrine/index.html", res);
});

router.get("/carte.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("vitrine/carte.html", res);
});

router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("vitrine/contact.html", res);
});


router.get("/error.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("vitrine/error.html", res);
});


router.get("/food.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/food.jpg", res);
});

router.get("/basilics.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/basilics.jpg", res);
});

router.get("/ok.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/ok.jpg", res);
});

router.get("/poivrons.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/poivrons.jpg", res);
});

router.get("/bg-item1-min.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/bg-item1-min.jpg", res);
});

router.get("/pizza.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/pizza.jpg", res);
});

router.get("/p.jpeg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpeg);
    utils.getFile("/public/images/p.jpeg", res);
});

router.get("/paul.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/images/paul.png", res);
});

router.get("/Black.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("/public/images/Black.png", res);
});

router.get("/ronde.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/ronde.jpg", res);
});

router.get("/legumes.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/legumes.jpg", res);
});

router.get("/bulbul.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("/public/images/bulbul.jpg", res);
});

router.get("/contact-img.svg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.svg);
    utils.getFile("/public/images/contact-img.svg", res);
});

router.get("/style.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/style.css", res);
});

http.createServer(router.handle).listen(port);
console.log(`The server is listening at http://127.0.0.1:${port}`);



