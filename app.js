require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const coursesRouter = require("./routes/courses");
const chaptersRouter = require("./routes/chapters");
const lessonsRouter = require("./routes/lessons");
const mediaRouter = require("./routes/media");
const orderPaymentsRouter = require("./routes/orderPayments");
const refreshTokensRouter = require("./routes/refreshTokens");
const mentorsRouter = require("./routes/mentors");
const imageCoursesRouter = require("./routes/imageCourses");
const myCoursesRouter = require("./routes/myCourses");
const reviewsRouter = require("./routes/reviews");
const webhookRouter = require("./routes/webhook");

const verifyToken = require("./middlewares/verifyToken");
const can = require("./middlewares/permission");

const cors = require('cors')
const app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/api/v1/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v1/chapters", verifyToken, can("admin"), chaptersRouter);
app.use("/api/v1/lessons", verifyToken, can("admin"), lessonsRouter);
app.use("/api/v1/media", verifyToken, can("admin", "student"), mediaRouter);
app.use("/api/v1/orders", verifyToken, can("admin", "student"), orderPaymentsRouter);
app.use("/api/v1/refresh-tokens", refreshTokensRouter);
app.use("/api/v1/mentors", verifyToken,can('admin'), mentorsRouter);
app.use("/api/v1/image-courses", verifyToken, can('admin'), imageCoursesRouter);
app.use("/api/v1/my-courses", verifyToken,can('admin','student'), myCoursesRouter);
app.use("/api/v1/reviews", verifyToken,can('admin','student'), reviewsRouter);
app.use("/api/v1/webhook", webhookRouter);

module.exports = app;
