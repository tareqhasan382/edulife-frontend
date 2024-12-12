/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";

export interface TutorialResponse {
  _id?: string;
  title: string;
  url: string;
  description: string;
}
export interface Tutorial {
  data: TutorialResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}
export const tutorialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    create: build.mutation({
      query: (data) => ({
        url: "/tutorial/create",
        method: "POST",
        body: data,
      }),
    }),
    tutorial: build.query<Tutorial, void>({
      query: () => ({
        url: "/tutorial",
        method: "GET",
      }),
      providesTags: ["tutorial"],
    }),
  }),
});

export const { useCreateMutation, useTutorialQuery } = tutorialApi;
