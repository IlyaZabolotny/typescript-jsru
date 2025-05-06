// Error handling
try {
  throw "";
  throw {};
  throw 123;
  throw null;
  throw new Error("");
} catch (error: unknown) {
  if (error instanceof Error) {
    console.log(error.message);
  }
}
