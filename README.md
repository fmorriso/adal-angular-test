# AdalAngularTest

## References

[ADAL TS Consumer](https://github.com/HNeukermans/adal-ts-consumer)

[ADAL-TS](https://github.com/HNeukermans/adal-ts)

## Changes Needed

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
