class Debug {
  static log(...args) {
    if (  process.env.NODE_ENV === 'development' ) {
      console.log(...args);
    }
    return;
  }

  static time(action) {
    if (  process.env.NODE_ENV === 'development' ) {
      console.time(action);
    }
    return
  }

  static timeEnd(action) {
    if (  process.env.NODE_ENV === 'development' ) {
      console.timeEnd(action);
    }
    return
  }
}

export default Debug;