var numberMasksummerTemperature = new IMask(
  document.getElementById('summerTemperature'),
  {
    mask: Number,
    min: -100,
    max: 100000,
    radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
  });

var numberMaskwinterTemperature = new IMask(
  document.getElementById('winterTemperature'),
  {
    mask: Number,
    min: -100,
    max: 10000,
    radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
  });

var numberMasksummerWetness = new IMask(
  document.getElementById('summerWetness'),
  {
    mask: Number,
    min: -100,
    max: 10000,
    radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
  });

var numberMaskswinterWetness = new IMask(
  document.getElementById('winterWetness'),
  {
    mask: Number,
    min: -100,
    max: 10000,
    radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
  });

var numberMaskmaxPressure = new IMask(
  document.getElementById('maxPressure'),
  {
    mask: Number,
    min: -100,
    max: 10000,
    radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
  });

var paramsTemperatureMask = new IMask(
      document.getElementById('paramsTemperature'),
      {
        mask: Number,
        min: 0,
        max: 100000,
        radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
      });

    var paramsWetnessMask = new IMask(
      document.getElementById('paramsWetness'),
      {
        mask: Number,
        min: 0,
        max: 100000,
        radix: ',',  // fractional delimiter
    mapToRadix: ['.']  // symbols to process as radix
      });