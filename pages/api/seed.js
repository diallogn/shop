import nc from 'next-connect';
import Product from '../../models/product';
import db from '../../utils/db';
import data from '../../utils/data';
import User from '../../models/user';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  User.deleteMany();
  User.insertMany(data.users);
  Product.deleteMany();
  Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfuly' });
});

export default handler;
