import { JsonRepository } from './json-repository';
import { PostRepository } from './post-repository';

//Cria o tipo para ser exportado futuramente e coloca o tipo PostRepository para somente mostras as coisas da interface NÃO da implementação
export const postRepository: PostRepository = new JsonRepository();
