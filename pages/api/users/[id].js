import { apiHandler, usersRepo } from "helpers/api";
import { logger } from "logger";
import moment from "moment";

export default apiHandler({
  get: getById,
  put: update,
  delete: _delete,
});

async function getById(req, res) {
  const user = await usersRepo.getById(req.query.id);

  if (!user) throw "User Not Found";

  return res.status(200).json(user);
}

async function update(req, res) {
  await usersRepo.update(req.query.id, req.body);
  return res.status(200).json({});
}

async function _delete(req, res) {
  await usersRepo.delete(req.query.id);
  logger.info({
    message: "DELETE USER",
    data: null,
    date: moment(new Date(Date.now())).format("DD-MMM-YYYY hh:mm:ss"),
  });
  return res.status(200).json({});
}
