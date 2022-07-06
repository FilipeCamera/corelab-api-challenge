import express, { Application } from 'express';
class App {
    private readonly app: Application;

    constructor() {
        this.app = express();
    }

    listen(port: number) {
        this.app.listen(port, () =>
            console.log(`API esta rodando na porta ${port}`)
        );
    }
}

export default new App();
