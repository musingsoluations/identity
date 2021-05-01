export interface HttpRequestState {
  isHttpRequestInProgress: boolean;
}

export const initialState: HttpRequestState = {
  isHttpRequestInProgress: false,
};
