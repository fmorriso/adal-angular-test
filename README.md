# ADAL Angular Test
A test of ADAL-TS using Angular 4.1.2 and Angular-CLI 1.0.3

The best way to run this application is via [JetBrains WebStorm](www.jetbrains.com/webstorm)
which as wonderful, built-in support for Angular, Angular-CLI and npm.

## References

This example is based on an older example that was way over engineered and ultimately did not work, probably because the sample credentials no longer work.

[ADAL TS Consumer](https://github.com/HNeukermans/adal-ts-consumer)

[ADAL-TS](https://github.com/HNeukermans/adal-ts)

## Changes Needed To Run

Go to `app.component.ts` and modify the ADAL configuration

The sample the original author created (that no longer works) was:
```typescript
    const config: AdalConfig = {
      tenant: 'hneu70532.onmicrosoft.com',
      clientId: '61bdbb45-a004-48e3-98d9-e4f1740661c8',
      postLogoutRedirectUrl: window.location.origin + '/',
      redirectUri: window.location.origin + '/',
      responseType: '',
      extraQueryParameter: '',
      resource: ''
    };
```

## Demo Credentials

### The originals that no longer work
```
login with:
user: guestone@hneu70532.onmicrosoft.com 
pwd: Test1234
```

## Changes Needed For Angular 4.1.2
