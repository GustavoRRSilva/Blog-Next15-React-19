import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

const ROOT_DIR = process.cwd();
console.log(ROOT_DIR);
//Implemento o PostRepository, para implementar as opções com as tipagens passadas anteriormente
export class JsonRepository
  implements PostRepository
{
  private async readFromDisk() {}
  findAll(): Promise<PostModel[]> {}
}

//Cria o tipo para ser exportado futuramente
export const postRepository =
  new JsonRepository();
