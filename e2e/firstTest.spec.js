describe('All', () => {
  afterAll(async () => {
    await device.resetContentAndSettings().then(() => console.info('Reset iOS settings.'));
  });

  beforeAll(async () => {
    await device.launchApp();
  });

  describe('Go to ChooseLogin', () => {
    //
  });
});
