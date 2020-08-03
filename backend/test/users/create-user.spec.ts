import { UserService } from '../../src/api/user/user.service';
import generateCode from '../../src/utils/generator/code-pattern';

let userService: UserService;
describe('user service', () => {
  beforeAll(() => {
    userService = new UserService();
  });
  describe('create user', () => {
    test('create completely', async () => {
      const username = generateCode('xxxxxx');
      const password = generateCode('xxxxxx');

      const result = await userService.create({
        username,
        password,
        gender: 'female',
        role: 'user',
      });
      expect(result.message).toEqual('created');
      expect(result.username).toEqual(username);
      expect(result.userId).toBeDefined();
    });

    test('duplicate user', async () => {
      try {
        const username = generateCode('xxxxxx');
        const password = generateCode('xxxxxx');

        await userService.create({
          username,
          password,
          gender: 'female',
          role: 'user',
        });

        await userService.create({
          username,
          password,
          gender: 'female',
          role: 'user',
        });
      } catch (e) {
        const isMatch = e.message.search('duplicate key') !== -1;
        expect(isMatch).toBe(true);
      }
    });
  });

  describe('update user', () => {
    test('update completely', async () => {
      const username = generateCode('xxxxxx');
      const password = generateCode('xxxxxx');

      const createdResult = await userService.create({
        username,
        password,
        gender: 'female',
        role: 'user',
      });
    });
  });
});
