describe('Hello World Test Suite', () => {
    it('should return true', () => {
      const helloWorld = () => "Hello, World!";
      expect(helloWorld()).toBe("Hello, World!");
    });
});