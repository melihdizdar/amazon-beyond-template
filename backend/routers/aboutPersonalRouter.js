import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import PersonalContent from '../models/aboutPersonalModel.js';

const aboutPersonalRouter = express.Router();

aboutPersonalRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const personalContents = await PersonalContent.find({});
    res.send(personalContents);
  })
);

aboutPersonalRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await TextContent.remove({});
    const createdPersonalContents = await PersonalContent.insertMany(data.personalContents);
    res.send({ createdPersonalContents });
  })
);

export default aboutPersonalRouter;