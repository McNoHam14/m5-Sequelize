import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// {
//     "id": 1,
//     "name": TEXT,
//     "category": TEXT,
//     "description": TEXT,
//     "imageUrl":TEXT,
//     "price":NUMBER,
//     "createdAt": "DATE",
//     "updatedAt": "DATE",
// }

const ProductsModel = sequelize.define("product", {
  userId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING(80),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ProductsModel;
