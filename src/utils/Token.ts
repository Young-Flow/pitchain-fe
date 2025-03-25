type AuthTokenAttr = { accessToken: string; refreshToken: string };

export class AuthToken {
  private static authToken: AuthTokenAttr = JSON.parse(
    localStorage.getItem('authToken') ?? '{ "accessToken": "", "refreshToken": "" }',
  );

  static getToken(): AuthTokenAttr;
  static getToken(selector: 'accessToken' | 'refreshToken'): string;
  static getToken(selector?: 'accessToken' | 'refreshToken') {
    return selector === undefined ? AuthToken.authToken : AuthToken.authToken[selector];
  }

  static setToken(obj: Partial<AuthTokenAttr>) {
    const newToken = { ...AuthToken.authToken, ...obj };
    AuthToken.authToken = newToken;
    localStorage.setItem('authToken', JSON.stringify(newToken));
  }
}
