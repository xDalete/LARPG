import { AxiosError } from "axios";

export type ResponseType<T> = {
    data: T;
    message: string;
    success: boolean;
};

export type ArrayResponseType<T> = ResponseType<T[]> & {
    page: number;
    pageSize: number;
    rowCount: number;
};

export type AuthResponseType<T> = ResponseType<T> & {
    token: string;
};

export type ErrorResponseType = AxiosError<
    | string
    | {
          code: number;
          message: string;
          success: boolean;
      }
>;
