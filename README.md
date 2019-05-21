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

### How to get a `url`

Check out your Mailchimp account. There you should look for a code to embed into a page. There you can find a url which will look something like:

```
https://<DOMAIN>.<DATA_CENTER>.list-manage.com/subscribe/post?u=<U>&amp;id=<ID>
```
