export interface ApiResponse<T> {
  errorMessage?: string;
  responseCode?: number;
  data?: T;
}

export const get = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const request = await fetch(endpoint, {
      method: 'GET'
    });

    if (!request.ok) throw Error('Get request failed');

    const response = await request.json();

    return {
      data: response as T,
      responseCode: request.status
    };
  } catch (error) {
    return { errorMessage: (error as Error).message };
  }
};

export const post = async <B, T>(
  endpoint: string,
  body: B
): Promise<ApiResponse<T>> => {
  try {
    const request = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(body)
    });

    if (!request.ok) throw Error('Post request failed');

    const response = await request.json();

    return {
      data: response as T,
      responseCode: request.status
    };
  } catch (error) {
    return { errorMessage: (error as Error).message };
  }
};
