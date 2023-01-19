import { it, expect, describe, beforeEach, beforeAll, afterEach, afterAll, vi } from 'vitest';
import axios from 'axios';
import getPosts from 'src/pages/api/posts';

vi.mock('axios');

describe("getPosts()", () => {

  beforeEach(() => {
    axios.get.mockReset()
  })

  describe("when API call is successful", () => {
    it("should return posts", async () => {
      const postsMock = [
        { _id: 1, title: "first", content: "first content" },
        { _id: 2, title: "second", content: "second content" },
      ];

      axios.get.mockResolvedValue({
        data: postsMock,
      })

      const response = await getPosts();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/posts');
      expect(response).toStrictEqual(postsMock);    
    });
  });  

  describe("when API call fails", () => {
    it("should return error", async () => {
      const getError = new Error();
      axios.get.mockResolvedValue({
        data: getError,
      })      
      const response = await getPosts();
      expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/posts');
      expect(response).toStrictEqual(getError);
    });
  });

});