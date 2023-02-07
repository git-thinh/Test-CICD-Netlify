
# https://docs.netlify.com/cli/get-started/
# https://open-api.netlify.com/#tag/deploy/operation/getDeploy
# https://docs.netlify.com/api/get-started/#sites
# https://www.netlify.com/blog/2020/09/24/how-to-deploy-a-simple-site-using-postman-and-the-netlify-api/


# -> Must be STOP BUILD: 
- To stop builds for a site, go to Site settings > Build & deploy > Continuous deployment > Build settings, 
- select Edit settings, and then toggle Builds to Stop builds.
# https://docs.netlify.com/configure-builds/stop-or-activate-builds/


# yarn global add Name

- netlify login
- netlify init
- netlify sites:create

- netlify link
- netlify unlink

- set DEBUG=* & netlify deploy --prod --dir=dist
- netlify deploy --prod --dir=dist
- netlify deploy --prod --path dist/

-------------------------------------------------------------

- Postman make Guid = {{$guid}}
- state = prepared, uploading, uploaded, ready, required ,required_functions
- {account_id} by querying GET /api/v1/accounts/{account_slug}.
  The slug is available in the Netlify UI at 
  Team settings > General > Team details > Team information