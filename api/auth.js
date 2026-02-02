export default async function handler(req, res) {
  const { GITHUB_ID } = process.env;
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}&scope=repo,user`
  );
}
