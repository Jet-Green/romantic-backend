import { MongooseModule } from "@nestjs/mongoose";
import { FlowerSchema } from "../schemas/flower.schema";

let UserModel = MongooseModule.forFeature([{ name: 'Flower', schema: FlowerSchema, collection: 'flowers' }])
export default UserModel