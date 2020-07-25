const defaults = {
  chromeLaunchConfig: {
    args: ['--no-sandbox'],
  },
  concurrency: 16,
  debug: true,
  'include-notices': true,
  'include-warnings': true,
  standard: 'WCAG2AA',
  timeout: 60000,
  wait: 10000,
  waitUntil: 'networkIdle0',
};

const initialUrl = 'http://localhost:8888/';

const urls = [];
for (let i = 0; i < 30; i++) {
  urls.push(`${initialUrl}?${i}`);
}

module.exports = {
  defaults,
  urls,
};

