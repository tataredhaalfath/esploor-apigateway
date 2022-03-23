const apiAdapter = require("../../apiAdapter");
const { URL_SERVICE_COURSE, HOST_NAME } = process.env;
const api = apiAdapter(URL_SERVICE_COURSE);

module.exports = async (req, res, next) => {
  try {
    const courses = await api.get("/api/courses", {
      params: {
        ...req.query,
        status: "published",
      },
    });

    const coursesData = courses.data;
    const firstPage = coursesData.data.first_page_url.split("?").pop();
    const lastPage = coursesData.data.last_page_url.split("?").pop();

    courses.data.data.first_page_url = `${HOST_NAME}/courses?${firstPage}`;
    courses.data.data.last_page_url = `${HOST_NAME}/courses?${lastPage}`;

    if (courses.data.data.next_page_url) {
      const nextPage = coursesData.data.next_page_url.split("?").pop();
      courses.data.data.next_page_url = `${HOST_NAME}/courses?${nextPage}`;
    }

    if (courses.data.data.prev_page_url) {
      const prevPage = coursesData.data.prev_page_url.split("?").pop();
      courses.data.data.prev_page_url = `${HOST_NAME}/courses?${prevPage}`;
    }

    coursesData.data.path = `${HOST_NAME}/courses`;

    return res.json(coursesData.data);
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res.status(500).json({
        status: "error",
        message: "service unavailable",
      });
    }

    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
