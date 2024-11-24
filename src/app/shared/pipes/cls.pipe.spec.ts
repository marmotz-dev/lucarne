import { ClsPipe } from './cls.pipe';

fdescribe('ClsPipe', () => {
  it('keep single string', () => {
    const pipe = new ClsPipe();
    expect(pipe.transform('flex')).toBe('flex');
  });

  it('transform array to string', () => {
    const pipe = new ClsPipe();
    expect(pipe.transform(['flex', 'flex-col'])).toBe('flex flex-col');
  });

  it('evaluate object to string', () => {
    const pipe = new ClsPipe();
    expect(pipe.transform({ flex: true, 'flex-col': false, 'gap-2': true })).toBe('flex gap-2');
  });

  it('evaluate nested array to string', () => {
    const pipe = new ClsPipe();
    expect(pipe.transform(['flex', { 'flex-col': true }, 'gap-2'])).toBe('flex flex-col gap-2');
  });

  it('removes duplicate class', () => {
    const pipe = new ClsPipe();
    expect(pipe.transform(['flex-col', 'flex-row'])).toBe('flex-row');
  });
});
