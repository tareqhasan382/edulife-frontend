import { baseApi } from "../api/baseApi";
type QueryParams = {
  limit: number;
  page: number;
  category?: string;
  sortField?: string;
  sortOrder?: string;
};
export interface LessonResponse {
  _id: string;
  name: string;
  number: number;
  vocabularyCount: number;
}
export interface Lessons {
  data: LessonResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}
export const lessonApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    lessons: build.query<Lessons, QueryParams>({
      query: (arg: QueryParams) => ({
        url: "/lesson",
        method: "GET",
        params: arg,
      }),
      providesTags: ["lesson"],
    }),
  }),
});

export const { useLessonsQuery } = lessonApi;
