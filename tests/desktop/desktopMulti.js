module.exports = async function(context, commands) {
  commands.meta.setTitle('Test visiting multiple pages');
  commands.meta.setDescription(
    'First hit the Main_Page with an empty browser cache and then visit Barack, followed buy the Democratic Party'
  );
  await commands.measure.start('https://www.thesun.co.uk');
  // Fake some read time
  await commands.wait.byTime(21000);
  await commands.js.run(
    'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
  );
  await commands.measure.start('https://nypost.com');
  // Fake some read time
  await commands.wait.byTime(21000);
  await commands.js.run(
    'document.body.innerHTML = ""; document.body.style.backgroundColor = "white";'
  );
  return commands.measure.start(
    'https://www.marketwatch.com/'
  );
};