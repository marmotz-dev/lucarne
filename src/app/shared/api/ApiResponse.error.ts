import { ApiResponse } from '@shared/api/ApiResponse.type';

export class ApiResponseError extends Error {
  constructor(public response: ApiResponse) {
    super(response.statusText);
  }
}
