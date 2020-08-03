import { UserService } from '../../src/api/user/user.service';
import generateCode from '../../src/utils/generator/code-pattern';

let userService: UserService;
const baseMockData = {
  fullname: generateCode('xxxxxxxxx'),
  phone: [generateCode('xxxxxx'), generateCode('xxxxxxx')],
};
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
        const isMatch = e.error.message.search('duplicate key') !== -1;
        expect(isMatch).toBe(true);
      }
    });
  });

  describe('update user', () => {
    test('update completely', async () => {
      const username = generateCode('xxxxxx');
      const password = generateCode('xxxxxx');

      const newUsername = generateCode('xxxxxx');
      const newPassword = generateCode('xxxxxx');

      const createdResult = await userService.create({
        username,
        password,
        gender: 'female',
        role: 'user',
      });

      const updatedResult = await userService.update(createdResult.userId, {
        username: newUsername,
        password: newPassword,
        gender: 'female',
        role: 'user',
      });

      expect(updatedResult.message).toEqual('updated');
      expect(updatedResult.username).toEqual(newUsername);
      expect(updatedResult.gender).toEqual('female');
      expect(updatedResult.role).toEqual('user');
    });

    test('update wrong user id ', async () => {
      const username = generateCode('xxxxxx');
      const password = generateCode('xxxxxx');

      const newUsername = generateCode('xxxxxx');
      const newPassword = generateCode('xxxxxx');

      const createdResult = await userService.create({
        username,
        password,
        gender: 'female',
        role: 'user',
      });

      try {
        await userService.update(createdResult.userId + 1, {
          username: newUsername,
          password: newPassword,
          gender: 'female',
          role: 'user',
        });
      } catch (e) {
        expect(e.error.message).toEqual('user id not found');
      }
    });
  });

  describe('get user by id', () => {
    test('get correct user id', async () => {
      const username = generateCode('xxxxxx');
      const password = generateCode('xxxxxx');

      const createdResult = await userService.create({
        username,
        password,
        gender: 'female',
        role: 'user',
        ...baseMockData,
      });

      const result = await userService.getById(createdResult.userId);
      expect(result.username).toEqual(createdResult.username);
      expect(result.gender).toEqual(createdResult.gender);
      expect(result.role).toEqual(createdResult.role);
      expect(result.fullname).toEqual(baseMockData.fullname);
      expect(result.phone.length).toEqual(baseMockData.phone.length);
      result.phone.forEach((value, index) => {
        expect(value).toEqual(baseMockData.phone[index]);
      });
    });

    test('get wrong user id', async () => {
      const username = generateCode('xxxxxx');
      const password = generateCode('xxxxxx');

      const createdResult = await userService.create({
        username,
        password,
        gender: 'female',
        role: 'user',
        ...baseMockData,
      });
      try {
        await userService.getById(createdResult.userId);
      } catch (e) {
        expect(e.error.message).toEqual('user id not found');
      }
    });
  });
});
