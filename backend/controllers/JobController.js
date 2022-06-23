const axios = require("axios");

class JobController {
  static async getJobs(req, res) {
    try {
      let response = await axios({
        method: "GET",
        url: "http://dev3.dansmultipro.co.id/api/recruitment/positions.json",
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ message: "something is wrong" });
    }
  }

  static async getOneJob(req, res) {
    try {
      const id = req.params.id;
      let response = await axios({
        method: "GET",
        url: `http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`,
      });
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "something is wrong" });
    }
  }
}

module.exports = JobController;
