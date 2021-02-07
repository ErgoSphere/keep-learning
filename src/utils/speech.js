/**
 * Created by ErgoSphere on 2021/2/7
 **/

const synth = window.speechSynthesis;
const voice = synth.getVoices()[0];

export const speaker = (text) => {
  let speaking = synth.speaking;
  if (speaking) {
    synth.cancel()
  }
  let utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voice;
  utterThis.pitch = 1.3;
  utterThis.rate = 3;
  synth.speak(utterThis);
};
