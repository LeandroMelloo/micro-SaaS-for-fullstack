import sequelize, {Optional, Model} from 'sequelize';
import { Link } from './link';
import database from '../db/database';

interface ILinkCreationAttributes extends Optional<Link, "id">{}

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link {}

const LinkModel = database.define<ILinkModel>('link', {
    id: {
        type: sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    url: {
        type: sequelize.STRING(255),
        allowNull: false
    },
    code: {
        type: sequelize.STRING(20),
        unique: true,
        allowNull: false
    },
    hits: {
        type: sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
})

export default LinkModel;