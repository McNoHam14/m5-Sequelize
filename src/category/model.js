import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const CategoryModel = sequelize.define("category", {
  categoryId: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  categoryName: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

export default CategoryModel;
