import { Request, Response } from 'express';
import { Op, Order } from 'sequelize';
import College from '../models/College';

export const getColleges = async (req: Request, res: Response) => {
  try {
    const { search, location, course, feeMax, sortBy } = req.query;

    const whereClause: any = {};

    if (search) {
      whereClause.name = { [Op.like]: `%${search}%` };
    }
    if (location) {
      whereClause.location = location as string;
    }
    if (course) {
      whereClause.course = course as string;
    }
    if (feeMax) {
      whereClause.fee = { [Op.lte]: Number(feeMax) };
    }

    let orderClause: Order = [];
    if (sortBy === 'fee_asc') {
      orderClause = [['fee', 'ASC']];
    } else if (sortBy === 'fee_desc') {
      orderClause = [['fee', 'DESC']];
    }

    const colleges = await College.findAll({
      where: whereClause,
      order: orderClause,
    });

    // We must manually convert the numeric 'id' to a string '_id' to match
    // the original API contract the frontend expects (from the MongoDB version).
    const collegesWithIdAsString = colleges.map(c => ({...c.get(), _id: c.id.toString()}));

    res.status(200).json(collegesWithIdAsString);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching colleges', error });
  }
};