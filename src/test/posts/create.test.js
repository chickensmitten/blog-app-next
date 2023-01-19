import {
  it,
  expect,
  describe,
  beforeEach,
  beforeAll,
  afterEach,
  afterAll,
  vi,
} from 'vitest';
import axios from 'axios';
import createPost from 'src/pages/api/posts/create';

vi.mock('axios');

describe('getPosts()', () => {
  beforeEach(() => {
    axios.post.mockReset();
  });

  describe('when API call is successful', () => {
    it('should return post', async () => {
      const newPostPayload = {
        title: 'first',
        content: 'first content',
      };
      const newPostMock = {
        id: 1,
        ...newPostPayload,
      };

      axios.post.mockResolvedValue({
        data: newPostMock,
      });

      const response = await createPost(newPostPayload);
      expect(axios.post).toHaveBeenCalledWith(
        'http://localhost:8080/posts/create',
        newPostPayload
      );
      expect(response).toStrictEqual(newPostMock);
    });
  });
});
