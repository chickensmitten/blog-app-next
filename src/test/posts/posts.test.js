import { it, expect, describe, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import getPosts from 'src/pages/api/posts';

describe("getPosts()", () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  describe("when API call is successful", () => {
    it("should return posts", async () => {
      const posts = [
        { _id: 1, title: "first", content: "first content" },
        { _id: 2, title: "second", content: "second content" },
      ];
      mock.onGet("http://localhost:8080/posts").reply(200, posts);
      const response = await getPosts();
      expect(mock.history.get[0].url).toEqual('http://localhost:8080/posts');
      expect(response).toEqual(posts);            
    });
  });  

  describe("when API call fails", () => {
    it("should return empty posts list", async () => {
      mock.onGet("http://localhost:8080/posts").networkErrorOnce();
      const response = await getPosts();
      expect(mock.history.get[0].url).toEqual('http://localhost:8080/posts');
      expect(response).toEqual([]);   
    });
  });

});