import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import {
    cellRoutes,
    divisionRoutes,
    operatorRoutes,
    organizationRoutes,
    productRoutes,
    shiftRoutes,
    appRoutes,
    authRoutes
} from '@routes';

export const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(express.static('public'));

app.use(shiftRoutes);
app.use(cellRoutes);
app.use(divisionRoutes);
app.use(operatorRoutes);
app.use(organizationRoutes);
app.use(productRoutes);
app.use(appRoutes);
app.use(authRoutes);

export default app;