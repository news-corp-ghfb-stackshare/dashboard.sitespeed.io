module.exports = async function(context, commands) {
  commands.meta.setTitle('Test multiple pages emulated mobile');
  commands.meta.setDescription(
    'First hit Main_Page with empty cache, then Barack and last Democratic Party.'
  );
  await commands.measure.start('https://www.thesun.co.uk');
  await commands.js.run(
    'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
  );
  await commands.wait.byTime(300);
  await commands.measure.start('https://nypost.com');
  await commands.js.run(
    'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
  );
  await commands.wait.byTime(300);
  return commands.measure.start(
    'https://www.marketwatch.com/'
  );
};
