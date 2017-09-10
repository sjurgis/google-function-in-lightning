# Google Functions from Lightning component

You will need to change three things:
* Edit function code to add your Salesforce domain to CORS.
* Edit component code to add your function URL as API endpoint.
* Add function URL to your org's CSP settings (Setup>Security Controls>CSP Trusted Sites).