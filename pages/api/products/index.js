import nc from 'next-connect';
import Product from '../../../models/product';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const Products = await Product.find({});
  await db.disconnect();
  res.send(Products);
});

export default handler;
