export type ApiResponse<T = any> = {
  status: number;
  statusText: string;
  json: T;
  text: string;
};
