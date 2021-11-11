import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import TextContent from '../models/aboutTextModel.js';

const aboutTextRouter = express.Router();

aboutTextRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const textContents = await TextContent.find({});
      res.send(textContents);
    })
  );
  
  aboutTextRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      //await TextContent.remove({});
      const createdTextContents = await TextContent.insertMany(data.textContents);
      res.send({ createdTextContents });
    })
  );

export default aboutTextRouter;