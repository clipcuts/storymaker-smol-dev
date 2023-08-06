```javascript
import fs from 'fs';
import parse from 'parse-gedcom';

export let gedcomData = null;

export function uploadGedcom(file) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    gedcomData = parse(data);
  });
}

export function getMainCharacter(name) {
  if (!gedcomData) {
    console.error('No GEDCOM data available');
    return null;
  }

  const mainCharacter = gedcomData.find(
    (entry) => entry.tag === 'INDI' && entry.data.includes(name)
  );

  if (!mainCharacter) {
    console.error('Main character not found in GEDCOM data');
    return null;
  }

  return mainCharacter;
}

export function getAncestors(mainCharacter) {
  if (!gedcomData || !mainCharacter) {
    console.error('No GEDCOM data or main character available');
    return null;
  }

  const family = gedcomData.find(
    (entry) => entry.tag === 'FAM' && entry.tree.some((node) => node.data === mainCharacter.pointer)
  );

  if (!family) {
    console.error('Family not found in GEDCOM data');
    return null;
  }

  const parents = family.tree
    .filter((node) => node.tag === 'HUSB' || node.tag === 'WIFE')
    .map((node) => gedcomData.find((entry) => entry.pointer === node.data));

  return parents;
}

export function getMedia(character) {
  if (!gedcomData || !character) {
    console.error('No GEDCOM data or character available');
    return null;
  }

  const media = character.tree
    .filter((node) => node.tag === 'OBJE')
    .map((node) => gedcomData.find((entry) => entry.pointer === node.data));

  return media;
}
```