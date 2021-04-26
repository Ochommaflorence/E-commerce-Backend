import express from "express";
import user from "./User/endpoints";
import otherRoutes from "./helpers/notFound";

const app = express();

app.use("/api/v1/user", user);

app.use("/", otherRoutes);

export default app;
