import nc from 'next-connect';
import Product from '../../models/product';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  Product.deleteMany();
  Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfuly' });
});

export default handler;
