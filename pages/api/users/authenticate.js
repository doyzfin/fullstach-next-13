import { apiHandler, usersRepo } from "helpers/api";
import { logger } from "logger";
import moment from "moment";

export default apiHandler({
  post: authenticate,
});

async function authenticate(req, res) {
  const user = await usersRepo.authenticate(req.body);
  logger.info({
    message: "LOGIN",
    data: user,
    date: moment(new Date(Date.now())).format("DD-MMM-YYYY hh:mm:ss"),
  });
  return res.status(200).json(user);
}
