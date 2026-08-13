#!/usr/bin/env node
'use strict';
const fs = require('fs');
const file = process.argv[2];
if (!file) {
  console.error('Usage: url-host <file>');
  process.exit(1);
}
const set = new Set();
for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
  const t = line.trim();
  if (!t || t.startsWith('#')) continue;
  try {
    const u = new URL(t.includes('://') ? t : 'https://' + t);
    set.add(u.hostname);
  } catch {}
}
[...set].sort().forEach((h) => console.log(h));
