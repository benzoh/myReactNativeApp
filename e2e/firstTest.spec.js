import testIDs from '../src/constants/testIDs';

describe('All', () => {
  afterAll(async () => {
    await device.resetContentAndSettings().then(() => console.info('Reset iOS settings.'));
  });

  describe('Go to ChooseLogin', () => {
    beforeAll(async () => {
      await device.launchApp();
    });

    it('Initialページが表示される', async () => {
      // toBeVisible()で画面に表示されることを確認する
      await expect(element(by.id(testIDs.INITIAL))).toBeVisible();
      await expect(element(by.id(testIDs.INITIAL_NEXT_BUTTON1))).toBeVisible();
    });

    // eslint-disable-next-line jest/expect-expect
    it('カルーセル２ページめを表示', async () => {
      // ボタンを押す操作をtap()で実行
      await element(by.id(testIDs.INITIAL_NEXT_BUTTON1)).tap();
      await expect(element(by.id(testIDs.INITIAL_NEXT_BUTTON2))).toBeVisible();
    });

    it('カルーセル３ページめを表示', async () => {
      await element(by.id(testIDs.INITIAL_NEXT_BUTTON2)).tap();
      await expect(element(by.id(testIDs.INITIAL_NEXT_BUTTON3))).toBeVisible();
    });

    it('ChooseLoginページが表示される', async () => {
      await element(by.id(testIDs.INITIAL_NEXT_BUTTON3)).tap();
      await expect(element(by.id(testIDs.CHOOSE_LOGIN))).toBeVisible();
    });

    it('カルーセル表示は一度切り', async () => {
      await device.launchApp({ newInstance: true });

      // toBeNotVisible()は画面に表示されないことを確認する
      await expect(element(by.id(testIDs.INITIAL))).toBeNotVisible();
      await expect(element(by.id(testIDs.CHOOSE_LOGIN))).toBeVisible();
    });
  });
});
