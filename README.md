### react-use-mailchimp

A react hook to use to create a custom sign up form for your website.

### API

```javascript
import { useMailchimp } from 'react-use-mailchimp';

const url = '...';

const Component = () => {
  const [mailchimp, subscribe, reset] = useMailchimp({
    url
  });
  const { loading, error, data } = mailchimp;

  return (
    <>
      {!!loading ? 'Loading' : null}
      {!!error ? error.message : null}
      {!!data && data.result === 'success'
        ? 'Subscribed!'
        : null}
    </>
  );
};
```
