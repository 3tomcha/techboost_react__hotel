import SoundPlayer from '../src/js/sound-player';
import SoundPlayerConsumer from '../src/js/sound-player-consumer';
jest.mock('../src/js/sound-player');

beforeEach(()=>{
  SoundPlayer.mockClear();
});
it('We can check if the consumer called the class constructor', ()=>{
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', ()=>{
  expect(SoundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
  const coolSoundFileName = "song.mp3";
  soundPlayerConsumer.playSomethingCool();

  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];
  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
  // console.log(mockPlaySoundFile);
  // console.log(SoundPlayer.mock.instances);
  // console.log(SoundPlayer.mock.instances[0].playSoundFile.mock);
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});
