// unsafeSet :: forall r a. String -> a -> Record r -> Task Unit
exports.unsafeSet = (key) => (value) => (obj) => () => {
  return new Promise((res, rej) => {
    obj[key] = value;
    res();
  });
};

// unsafeLog :: forall a. a -> Task Unit
exports.unsafeLog = (a) => () => {
  return new Promise((res, rej) => {
    console.log(a);
    res();
  });
};
