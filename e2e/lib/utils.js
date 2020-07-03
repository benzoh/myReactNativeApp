module.exports = {
  pressBack: () => {
    if (device.getPlatform() === 'android') {
      return device.pressBack();
    } else {
      // react-navigationの戻るボタン
      return element(by.id("header-back")).tap();
    }
  },
};
