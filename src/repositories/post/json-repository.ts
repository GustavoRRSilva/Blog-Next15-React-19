import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const SIMULATE_AWAIT_SECONDS = 0;
console.log(JSON_POSTS_FILE_PATH);

//Implemento o PostRepository, para implementar as opções com as tipagens passadas anteriormente
export class JsonRepository implements PostRepository {
  private async simulaAwait() {
    if (SIMULATE_AWAIT_SECONDS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_AWAIT_SECONDS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);

    const { posts } = parsedJson;
    return posts;
  }
  async findAll(): Promise<PostModel[]> {
    await this.simulaAwait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulaAwait();
    const allPosts = await this.findAll();
    const post = allPosts.find(post => post.id === id);
    if (!post) throw new Error('Post não encontrado');
    return post;
  }
}

export const postRepository: PostRepository = new JsonRepository();
