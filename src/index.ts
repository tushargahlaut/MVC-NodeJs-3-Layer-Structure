import express, {Request, Response} from "express";
import * as dotenv from "dotenv";
import userRouter from "../routes/user.route";
import sequelizeConnection from "../connection";
dotenv.config({ path: __dirname+'/../.env' });

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });

app.use("/api",userRouter);

app.listen(port, () => {
    sequelizeConnection
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
    console.log(`Server running at http://localhost:${port}`);
  });

export {};