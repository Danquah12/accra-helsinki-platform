export interface APIResponse<T> {
  data: T | null;
  error: {
    code: string;
    message: string;
  } | null;
  success: boolean;
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  meta: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
}

export interface APIError {
  code: string;
  message: string;
  details?: unknown;
}
