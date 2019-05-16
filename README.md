### react-use-mailchimp

A react hook to use to create a custom sign up form for your website.

### API

```javascript
import { useMailchimp } from 'react-use-mailchimp';

const url = '...';

const Component = () => {
  const [state, subscribe, reset] = useMailchimp({
    url
  });

  return <>TODO</>;
};
```
