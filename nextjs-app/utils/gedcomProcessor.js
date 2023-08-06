const gedcom = require('gedcom');

const processGedcomData = (data) => {
  try {
    const parsedData = gedcom.parse(data);
    return parsedData;
  } catch (error) {
    console.error('Error processing GEDCOM data:', error);
  }
};

module.exports = {
  processGedcomData,
};