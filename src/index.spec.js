import React from 'react';
import {
  renderHook,
  act
} from 'react-hooks-testing-library';
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

  expect(result.current[0].loading).toBe(false);
  expect(result.current[0].error).toBe(null);
  expect(result.current[0].data).toBe(null);
  act(() =>
    result.current[1]({
      EMAIL: EMAIL,
      NAME: ''
    })
  );
  expect(result.current[0].loading).toBe(true);
  await act(async () => {
    await waitForNextUpdate();
  });
  expect(result.current[0].error).toBeDefined();
  act(() => {
    result.current[2]();
  });
  expect(result.current[0].loading).toBe(false);
});
