export const mockPlaySoundFile = jest.fn();
jest.mock('../src/js/sound-player', () => {
  return jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  });
});

export default mock;
