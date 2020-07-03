/* eslint-disable no-undef */

import testIDs from '../src/constants/testIDs';
import { pressBack } from './lib/utils';

describe('All', () => {
  afterAll(async () => {
    // eslint-disable-next-line no-console
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

  describe('Go to Home', () => {
    let email;
    let password;

    beforeAll(() => {
      const random = new Date().getTime();
      email = `e2e+from_detox_${random}@example.com`;
      password = 'password';
    });

    it('SignUpページが表示される', async () => {
      await expect(element(by.id(testIDs.CHOOSE_LOGIN))).toBeVisible();
      await element(by.id(testIDs.SIGN_UP_BUTTON)).tap();
      await expect(element(by.id(testIDs.SIGN_UP))).toBeVisible();
      await expect(element(by.id(testIDs.SIGN_UP_EMAIL))).toBeVisible();
      await expect(element(by.id(testIDs.SIGN_UP_PASSWORD))).toBeVisible();
    });

    it('SignInページが表示される', async () => {
      await pressBack();
      await element(by.id(testIDs.SIGN_IN_BUTTON)).tap();
      await expect(element(by.id(testIDs.SIGN_IN))).toBeVisible();
      await expect(element(by.id(testIDs.SIGN_IN_EMAIL))).toBeVisible();
      await expect(element(by.id(testIDs.SIGN_IN_PASSWORD))).toBeVisible();
    });

    it('アカウントを登録できる', async () => {
      await pressBack();
      await element(by.id(testIDs.SIGN_UP_BUTTON)).tap();

      // typeText()を使ってTextInputにテキストを入力する
      await element(by.id(testIDs.SIGN_UP_EMAIL)).typeText(email);
      await element(by.id(testIDs.SIGN_UP_PASSWORD)).typeText(password);
      await element(by.id(testIDs.SIGN_UP_REGISTER_BUTTON)).tap();

      await expect(element(by.id(testIDs.HOME))).toBeVisible();
    });
  });
});
