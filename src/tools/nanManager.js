import nans from '../data/nans.json';

function randomNaN(){
  /* const length = nans.length-1;
  const index = [];
  index.push(Math.round(Math.random() * length));
  index.push(Math.round(Math.random() * length));
  index.push(Math.round(Math.random() * length));
  console.log(index);
  return String(nans[index[0]] + nans[index[1]] + nans[index[2]]); */

  //const emojiLength = nans.emojis.length - 1;
  const faceLength = nans.faces.length - 1;
  //const emoji1 = Math.round(Math.random() * emojiLength);
  //const emoji2 = Math.round(Math.random() * emojiLength);
  const face = Math.round(Math.random() * faceLength);
  //return String(nans.emojis[emoji1] + nans.faces[face] + nans.emojis[emoji2]);
  return String(nans.faces[face]);
}
export default randomNaN;