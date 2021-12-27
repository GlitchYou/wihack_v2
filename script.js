const data = {
  string: 'VIVO-(1234) a1:b2:c3:d4:e5:f6',
  regex: '\\w+:\\w+:(\\w+):(\\w+):\\w+:\\w+',
  replace: '$2$3$1',
  upper: '.+',
}

const re = (str) => new RegExp(str, 'g');

function ruler(str, data) {
  let value;

  const run = (pattern, func) => {
    const reg = re(pattern);
    return str.replace(reg, func);
  };

  const _upper = (s) => s.toUpperCase();
  const _lower = (s) => s.toLowerCase();

  if (data.upper) {
    value = run(data.upper, _upper);
  }

  if (data.lower) {
    value = run(data.lower, _lower);
  }

  return value;
}

const gen = (data) => {
  let { string, regex, replace } = data;

  const reg = re(regex);
  const sub = replace;

  if (reg.test(string)) {
    const str = string.replace(reg, sub);
    return ruler(str, data);
  }
}

// Return: C3D41234
gen(data)