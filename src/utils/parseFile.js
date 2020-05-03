import loadFile from './loadFile';
import taxiprice from '../taxiprice';

const hanldTextLine = line => {
  const arr = line.split(',等待');
  const km = parseInt(arr[0], 0);
  const minute = parseInt(arr[1], 0);
  return `收费${taxiprice(km, minute)}元\n`;
};

const handleFileText = text => {
  let str = '';
  text.split('\n').forEach(val => {
    str += hanldTextLine(val);
  });
  return str;
};

export default filename => {
  const text = loadFile(filename);
  return handleFileText(text);
};
