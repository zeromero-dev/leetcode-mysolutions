/**
 * @param {string} command
 * @return {string}
 */
 const interpret = (command) => command.replaceAll('()', 'o').replaceAll('(al)', 'al') 