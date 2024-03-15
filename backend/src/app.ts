import express from 'express';
import router from './routes';
import sequelize from './database/model';

class App {
  public app: express.Express;
  public db: typeof sequelize;

  constructor() {
    this.app = express();

    this.db = sequelize;

    this.config();

    this.route();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private route(): void {
    this.app.use(router);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    this.db.sync().then(() => console.log('db is ready'));
  }
}

export { App };

export const { app } = new App();
