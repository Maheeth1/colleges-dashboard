import sequelize from './config/db';
import College from './models/College';
import Review from './models/Review';
import Favorite from './models/Favorite';

const seedData = [
  { name: "ABC Engineering College", location: "Hyderabad", course: "CSE", fee: 120000 },
  { name: "XYZ Institute of Technology", location: "Bangalore", course: "ECE", fee: 100000 },
  { name: "Sunrise Business School", location: "Chennai", course: "MBA", fee: 150000 },
  { name: "Greenfield Medical College", location: "Hyderabad", course: "MBBS", fee: 250000 },
  { name: "Modern Arts University", location: "Bangalore", course: "CSE", fee: 135000 },
  { name: "Apex Science Institute", location: "Chennai", course: "ECE", fee: 115000 },
  { name: "Elite Management Academy", location: "Hyderabad", course: "MBA", fee: 200000 }
];

const seedDB = async () => {
  try {
    console.log('Connecting to database for seeding...');
    await sequelize.authenticate();
    
    // Using { force: true } will drop all tables if they already exist
    console.log('Syncing models and dropping existing tables...');
    await sequelize.sync({ force: true });
    
    console.log('Seeding College data...');
    await College.bulkCreate(seedData);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    console.log('Closing database connection.');
    await sequelize.close();
  }
};

seedDB();