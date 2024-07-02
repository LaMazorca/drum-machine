import { AudioClip } from './types';
import Drum from './Drum'
import './App.css'


const audioClip: AudioClip[] = [
  {
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'Heater-1',
  },
  {
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'Heater-2',
  },
  {
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'Heater-3',
  },
  {
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'Heater-4',
  },
  {
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap',
  },
  {
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Open-HH',
  },
  {
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: "Kick-n'-Hat",
  },
  {
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick',
  },
  {
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Closed-HH',
  }
]

function App() {
  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClip.find(clip => clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
        .play()
        .catch(err => console.error(err))

    document.getElementById(`drum-${clip.keyTrigger}`)?.focus();
    document.getElementById('display')!.innerText = clip.description;
  }
  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>Drum Machine</h1>
      <div className="whole-drum">
        {audioClip.map((clip) => (
          <Drum key={clip.keyTrigger} audioClip={clip} />
        ))}
      </div>
      <div id="display"></div>
      <div id='logo'>
          <p>by La Mazorca</p>
          <a href="https://github.com/LaMazorca" target='_blank'><img src="https://i.postimg.cc/WhDJYfXW/Logo-2-mazorca.png" alt="Logo de La Mazorca"/></a>
      </div>
    </div>
  )
}


export default App
