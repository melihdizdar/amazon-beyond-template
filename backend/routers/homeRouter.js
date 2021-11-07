import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import HomeCard from '../models/homeModel.js';

const homeRouter = express.Router();

homeRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const homeCards = await HomeCard.find({});
    res.send(homeCards);
  })
);

homeRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await HomeCard.remove({});
    const createdHomeCards = await HomeCard.insertMany(data.homeCards);
    res.send({ createdHomeCards });
  })
);

export default homeRouter;