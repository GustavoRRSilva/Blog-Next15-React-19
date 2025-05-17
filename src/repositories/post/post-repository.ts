import { PostModel } from '@/models/post/post-model';

//Aqui o ele cria basicamente o tipo, para futuramente ser utilizado em outro repository(json, sqlLite, postgrees e etc )
export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findById(
    id: string,
  ): Promise<PostModel>;
}
