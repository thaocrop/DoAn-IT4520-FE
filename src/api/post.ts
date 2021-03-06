import { PATH_RATE } from "./../configs/routes";
const queryString = require("query-string");

import { PATH_POST, PATH_POST_ALL, PATH_LIKE, PATH_COMMENT } from "@configs";
import { IPostComment, IPostForm, IPostPage, IPostRate } from "@interfaces";
import axiosClient from "./axiosClient";

export const postApi = {
    createPosts: async (params: IPostForm) => {
        const url = PATH_POST;
        return await axiosClient.post(url, params);
    },
    getPosts: async (params: IPostPage) => {
        const url = PATH_POST;
        const query = queryString.stringify(params);
        return await axiosClient.get(`${url}?${query}`);
    },
    getAll: async () => {
        const url = PATH_POST_ALL;
        return await axiosClient.get(`${url}`);
    },
    getPost: async (id: string) => {
        const url = PATH_POST;
        return await axiosClient.get(`${url}/${id}`);
    },
    updatePost: async (id: string, params: Partial<IPostForm>) => {
        const url = PATH_POST;
        return await axiosClient.put(`${url}/${id}`, params);
    },
    deletePost: async (id: string) => {
        const url = PATH_POST;
        return await axiosClient.delete(`${url}/${id}`);
    },
    likePost: async (id: string) => {
        const url = PATH_POST;
        return await axiosClient.post(`${url}/${id}${PATH_LIKE}`);
    },
    ratePost: async (id: string, params: IPostRate) => {
        const url = PATH_POST;
        return await axiosClient.post(`${url}/${id}${PATH_RATE}`, params);
    },
    commentPost: async (id: string, params: IPostComment) => {
        const url = PATH_POST;
        return await axiosClient.post(`${url}/${id}${PATH_COMMENT}`, params);
    },
};
