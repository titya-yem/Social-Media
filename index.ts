import concurrently from 'concurrently';

// use concurrently to run multiple commands in parallel
concurrently([
  {
    name: 'server',
    command: 'bun run dev',
    cwd: 'packages/server',
    prefixColor: 'green',
  },
  {
    name: 'client',
    command: 'bun run dev',
    cwd: 'packages/client',
    prefixColor: 'cyan',
  },
]);
