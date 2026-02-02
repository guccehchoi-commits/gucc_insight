export default async function handler(req, res) {
  const { code } = req.query;
  const { GITHUB_ID, GITHUB_SECRET } = process.env;

  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      client_id: GITHUB_ID,
      client_secret: GITHUB_SECRET,
      code,
    }),
  });

  const data = await response.json();
  const content = `
    <html>
      <body>
        <script>
          const postData = {
            token: "${data.access_token}",
            provider: "github"
          };
          window.opener.postMessage("authorizing:github", "*");
          window.opener.postMessage('authorization:github:success:' + JSON.stringify(postData), '*');
          window.close();
        </script>
      </body>
    </html>
  `;
  res.send(content);
}
