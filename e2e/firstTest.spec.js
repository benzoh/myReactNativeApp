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

    it('サインアウトできる', async () => {
      await element(by.id(testIDs.MENU_HEADER_LEFT_BUTTON)).tap();
      await element(by.label('USER_INFO')).tap();
      await expect(element(by.id(testIDs.USER_INFO_SCREEN))).toBeVisible();

      await element(by.id(testIDs.USER_INFO_SIGN_OUT_BUTTON)).tap();
      await expect(element(by.id(testIDs.CHOOSE_LOGIN))).toBeVisible();
    });

    it('サインインできる', async () => {
      await element(by.id(testIDs.SIGN_IN_BUTTON)).tap();
      await expect(element(by.id(testIDs.SIGN_IN))).toBeVisible();

      await element(by.id(testIDs.SIGN_IN_EMAIL)).typeText(email);
      await element(by.id(testIDs.SIGN_IN_PASSWORD)).typeText(password);
      await element(by.id(testIDs.SIGN_IN_EMAIL_BUTTON)).tap();

      await expect(element(by.id(testIDs.HOME))).toBeVisible();
    });

    it('todoを追加できる', async () => {
      await element(by.id(testIDs.TODO_OPEN_INPUT_BUTTON)).tap();

      await element(by.id(testIDs.TODO_INPUT_TITLE)).typeText('買い物');
      await element(by.id(testIDs.TODO_INPUT_DETAIL)).typeText('牛乳を買う\n');
      await element(by.id(testIDs.TODO_INPUT_ADD_BUTTON)).tap();
      await expect(element(by.id(testIDs.HOME))).toBeVisible();

      await expect(element(by.label('買い物'))).toBeVisible();
      await expect(element(by.label('牛乳を買う'))).toBeVisible();
    });

    it('todoを完了できる', async () => {
      await expect(element(by.id(testIDs.TODO_ROW_DONE))).toBeNotVisible();
      await element(by.label('買い物')).swipe('right');
      await expect(element(by.id(testIDs.TODO_ROW_DONE))).toBeVisible();
      await element(by.id(testIDs.TODO_ROW_DONE)).tap();

      await element(by.label('買い物')).swipe('right');
      await expect(element(by.id(testIDs.TODO_ROW_NOT_DONE))).toBeVisible();
    });
  });
});
