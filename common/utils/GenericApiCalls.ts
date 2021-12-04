interface ApiResponse<T> {
  errorMessage?: string;
  responseCode?: string;
  data?: T;
}

export const get = async <T>(endpoint: string): Promise<ApiResponse<T>[]> => {
  const request = await fetch(endpoint, {
    method: 'GET'
  });

  const response = await request.json();
  return response;
};

export const post = async <B, T>(
  endpoint: string,
  body: B
): Promise<ApiResponse<T>> => {
  const request = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(body)
  });

  const response = await request.json();
  return response;
};
