import React from 'react';
import {
  renderHook,
  act
} from 'react-hooks-testing-library';
import {} from 'react-test-renderer';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import useMailchimp from '../src/index';

const URL =
  'https://swingpulse.us12.list-manage.com/subscribe/post?u=e33e22565be91a69007bea9a0&amp;id=bdbdf49eb6';

const EMAIL = 'rogov.asdasdas@gmail.com';

test('useMailchimp', async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useMailchimp({ url: URL })
  );

  expect(result.current[0].status).toBe('YO');
  act(() =>
    result.current[1]({
      EMAIL: EMAIL,
      NAME: ''
    })
  );
  expect(result.current[0].status).toBe('LOADING');

  await act(async () => {
    await waitForNextUpdate();
  });
  expect(result.current[0].status).toBe('ERROR');
  act(() => {
    result.current[2]();
  });
  expect(result.current[0].status).toBe('YO');
});
