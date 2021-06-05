#!/usr/bin/env node
import program from 'commander';
// const program = new program();
program
  .description('Compares two configuration files and shows a difference.')  
  .version('0.1')
  
  program.parse();