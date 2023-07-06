import errorRepository from '../app';

test.each([
  [1, 'ошибка 1'],
  [2, 'ошибка 2'],
])(
  ('return error code'),
  (code, result) => {
    errorRepository.errorRepository.set(code, result);
    expect(errorRepository.translate(code)).toBe(result);
  },
);

test('Unknown error', () => {
  expect(errorRepository.translate(3)).toBe('Unknown error');
});
