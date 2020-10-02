export async function getAccessToken() {
  const formData = [];
  formData.push(`grant_type=${encodeURIComponent('password')}`);
  const username = process.env.MEETNET_USERNAME;
  const password = process.env.MEETNET_PASSWORD;
  if (typeof username !== 'string' || typeof password !== 'string') {
    throw Error('Could not get MEETNET_USERNAME or MEETNET_PASSWORD from environment variables!');
  }
  formData.push(`username=${encodeURIComponent(username)}`);
  formData.push(`password=${encodeURIComponent(password)}`);
  const response = await fetch('https://api.meetnetvlaamsebanken.be/Token', {
    method: 'POST',
    body: formData.join("&"),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  });
  const data = await response.json();
  return data.access_token;
}
