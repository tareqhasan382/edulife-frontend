/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";
// type QueryParams = {
//   limit: number;
//   page: number;
//   category?: string;
//   sortField?: string;
//   sortOrder?: string;
// };
export interface VocabularyResponse {
  _id: string;
  word: string;
  pronunciation: string;
  meaning: string;
  whenToSay: string;
  lessonNo: number;
  lesson: string;
  adminEmail: string;
}
export interface Vocabulary {
  data: VocabularyResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}
export const lessonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    vocabulary: build.query<Vocabulary, any>({
      query: (lessonNo) => ({
        url: `/vocabulary/${lessonNo}`,
        method: "GET",
      }),
      providesTags: ["vocabulary"],
    }),
  }),
});

export const { useVocabularyQuery } = lessonApi;
