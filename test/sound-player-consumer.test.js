import SoundPlayer from '../src/js/sound-player';
import SoundPlayerConsumer from '../src/js/sound-player-consumer';
// import SoundPlayer,{mockPlaySoundFile} from '../src/js/sound-player';
// jest.mock('./sound-player');
// jest.mock('../src/js/sound-player');
// jest.mock('sound-player');

// 直接書く方法（__mocks__に書かずに）
const mockPlaySoundFile = jest.fn();
jest.mock('../src/js/sound-player', () => {
  return jest.fn().mockImplementation(() => {
    return {playSoundFile: mockPlaySoundFile};
  });
});

beforeEach(() => {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});

it('The consumer should be able to call new() on SoundPlayer', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(soundPlayerConsumer).toBeTruthy();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  expect(SoundPlayer).toHaveBeenCalledTimes(1);
});


// return function(){
//   return {playSoundFile: () => {console.log("動きました")}};
// }
// jest.mock('./__mocks__/sound-player.js');

// beforeEach(()=>{
//     SoundPlayer.mockClear();
//     // mockPlaySoundFile.mockClear();
// });

// it('We can check if the consumer called the class constructor', () => {
//   // const sp = new SoundPlayer();
//   // sp.playSoundFile("mp3");
//
//    // let sp= require('../src/js/sound-player');
//    // sp.playSoundFile();
//    // const sp = new SoundPlayer();
//    // .playSoundFile();
//
//   // const soundPlayer = new SoundPlayer();
//   // soundPlayer.playSoundFile("mp3");
//
//   // const soundPlayerConsumer = new SoundPlayerConsumer();
//   // expect(SoundPlayer).toHaveBeenCalled();
//   // console.log(SoundPlayer.mock);
//   // expect(SoundPlayer).toHaveBeenCalledTimes(1);
// });

it('We can check if the consumer called a method on the class instance', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer();
  // expect(SoundPlayer).toHaveBeenCalledTimes(1);
  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();
  // expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
});
