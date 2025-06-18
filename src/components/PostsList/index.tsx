import { postRepository } from '@/repositories/post';
import PostCover from '../PostCover';
import PostHeading from '../PostHeading';

export default async function PostsList() {
  const posts = await postRepository.findAll();
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
      {posts.map((post, index) => {
        return (
          <div key={post.id} className='flex flex-col gap-4 group'>
            {' '}
            <PostCover
              image={{
                src: `${post.coverImageUrl}`,
                alt: `${post.title}`,
                width: 1200,
                height: 720,
                priority: true,
              }}
              link={{ href: `/post/${post.slug}` }}
              src={post.coverImageUrl}
            />
            <div className='flex flex-col gap-4 sm:justify-center'>
              <time
                className='text-slate-600 block text-sm/tight'
                dateTime='2025-04-20'
              >
                {post.updatedAt}
              </time>

              <PostHeading as={index == 0 ? 'h1' : 'h2'} link='#'>
                {post.title}
              </PostHeading>
              <p>{post.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
