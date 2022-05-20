const now = new Date();

function getTime() {
    const current = now.getHours() + ":" + now.getMinutes();
    return current;
  }

export {getTime}