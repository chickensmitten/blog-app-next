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
import deletePost from 'src/pages/api/posts/delete';

vi.mock('axios');

describe('deletePosts()', () => {
  beforeEach(() => {
    axios.post.mockReset();
  });

  describe('when API call is successful', () => {
    it('should delete post', async () => {
      const postMock = 1;

      axios.post.mockResolvedValue({
        data: postMock,
      });

      const response = await deletePost(postMock);
      expect(axios.delete).toHaveBeenCalledWith(
        `http://localhost:8080/posts/${postMock}/delete`
      );
      expect(response).toStrictEqual("Post Deleted");
    });
  });
});
