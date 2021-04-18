import { UserService } from '../../src/api/user/user.service';
import { RevisionService } from '../../src/shared/services/revision-data/revision-data.service';
import generateCode from '../../src/utils/generator/code-pattern';

// userId: string;
// filePath: string;
describe('export backend indexed', () => {
  it('export', async () => {
    const username = generateCode('xxxxxx');
    const password = generateCode('xxxxxx');
    const userService = new UserService();
    const userInfo = await userService.create({
      username,
      password,
      gender: 'female',
      role: 'user',
    });

    const userId = userInfo.userId;

    const revisionService = new RevisionService();
    const revisionInfo = await revisionService.create({
      userId,
      filePath: 'MOCK_PATH',
    });

    expect(revisionInfo[0].filePath).toEqual('MOCK_PATH');
  });
});
