import { Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
  async index(req: Request,res: Response){
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.name,
        image_url: `http://192.168.1.39:3001/uploads/${item.image}`,
      };
    });
    return res.json(serializedItems);
  }
}
export default ItemsController;
