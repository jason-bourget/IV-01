const OAuthClient = require('intuit-oauth');

var oauthClient = new OAuthClient({
  clientId: 'AB0Yn2ymbi0y8Z86zvhdIgP5Vy1sxJtgvYQFiZbP5K5PK5qkzM',
  clientSecret: 'RKly1djjzU2UVJwq5WUl4gr5k0BlVo4Ud6H5rppc',
  environment: 'sandbox',
  redirectUri: 'http://localhost:3000/'
});

var authUri = oauthClient.authorizeUri({scope:[OAuthClient.scopes.Accounting], state:'testState'});

res.redirect(authUri);