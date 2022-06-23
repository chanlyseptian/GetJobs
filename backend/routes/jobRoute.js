const jobRoute = require("express").Router();
const JobController = require("../controllers/JobController");

jobRoute.get("/", JobController.getJobs);
jobRoute.get("/:id", JobController.getOneJob);

module.exports = jobRoute;
