import { apiHandler, usersRepo } from "helpers/api";
import { logger } from "logger";
import moment from "moment/moment";

export default apiHandler({
  get: getAll,
});

async function getAll(req, res) {
  const users = await usersRepo.getAll();
  logger.info({
    message: "USER DATA",
    data: users,
    date: moment(new Date(Date.now())).format("DD-MMM-YYYY hh:mm:ss"),
  });
  return res.status(200).json(users);
}
