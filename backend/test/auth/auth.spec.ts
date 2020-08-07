import { AuthService } from '../../src/api/auth/auth.service';
import { UserService } from '../../src/api/user/user.service';
import generateCode from '../../src/utils/generator/code-pattern';

let authService: AuthService;
let userService: UserService;
describe('auth service', () => {
  beforeAll(() => {
    authService = new AuthService(new UserService());
    userService = new UserService();
  });

  describe('login', () => {
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

    test('login with wrong username', async () => {
      const loginData = {
        username: generateCode('xxxxxxx'),
        password: generateCode('xxxxxxx'),
      };
      await userService.create({
        ...loginData,
        gender: 'female',
        role: 'user',
      });
      try {
        const wrongUsername = generateCode('xxxxxxxxxxxxxxxxxxxxxxx');
        await authService.login({
          username: wrongUsername,
          password: loginData.password,
        });
      } catch (e) {
        expect(e.error.message).toEqual('username or password incorrect');
      }
    });

    test('login with wrong password', async () => {
      const loginData = {
        username: generateCode('xxxxxxx'),
        password: generateCode('xxxxxxx'),
      };
      await userService.create({
        ...loginData,
        gender: 'female',
        role: 'user',
      });
      try {
        const wrongUsername = generateCode('xxxxxxxxxxxxxxxxxxxxxxx');
        await authService.login({
          username: wrongUsername,
          password: loginData.password,
        });
      } catch (e) {
        expect(e.error.message).toEqual('username or password incorrect');
      }
    });
  });
});
