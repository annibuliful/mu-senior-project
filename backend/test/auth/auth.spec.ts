import { AuthService } from '../../src/api/auth/auth.service';
import { UserService } from '../../src/api/user/user.service';
import generateCode from '../../src/utils/generator/code-pattern';

let authService: AuthService;
let userService: UserService;
describe('login', () => {
  beforeAll(() => {
    authService = new AuthService(new UserService());
    userService = new UserService();
  });

  test('login complete', async () => {
    const loginData = {
      username: generateCode('xxxxxxx'),
      password: generateCode('xxxxxxx'),
    };
    await userService.create({
      ...loginData,
      gender: 'female',
      role: 'user',
    });

    const loginResult = await authService.login(loginData);
    expect(loginResult.accessToken).toBeDefined();
    expect(loginResult.refreshToken).toBeDefined();
  });
});
