import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import morgan from 'morgan';
import schema from './schemas/index';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// graphql
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))

// routes

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server run on port ${port}`)
});