import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  let filePath = path.join(process.cwd() + "/data/data.json");
  let data = await fs.readFile(filePath, "utf8");
  res.json(data);
}