module.exports = (req, res) => {
  // Ganti dengan link Gumroad milik Anda
  const gumroadUrl = 'https://rootpros.gumroad.com/l/whispersub';

  res.writeHead(302, {
    Location: gumroadUrl,
  });

  res.end();
};