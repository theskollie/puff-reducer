const userProfile : number[] | [] = [];

  interface localStorageProps {
    wakeUp: number;
    maxPuffs: number;
    hoursAwake: number;
  }

  const getLocalStorage =  () => {
    userProfile[0] = Number(localStorage.getItem("wakeUpTime"));
    userProfile[1] = Number(localStorage.getItem("maxPuffs"));
    userProfile[2] = Number(localStorage.getItem("hoursAwake"));

    if (userProfile[0] == 0) {
      localStorage.setItem("wakeUpTime", '8');
      userProfile[0] = Number(localStorage.getItem("wakeUpTime"));
    }
    if (userProfile[1] == 0) {
        localStorage.setItem("maxPuffs", '50');
        userProfile[1] = Number(localStorage.getItem("maxPuffs"));
    }
    if (userProfile[2] == 0) {
        localStorage.setItem("hoursAwake", '14');
        userProfile[1] = Number(localStorage.getItem("hoursAwake"));
    }

    return userProfile;
  }

  const setLocalStorage = ({wakeUp, maxPuffs, hoursAwake} : localStorageProps) => {

    localStorage.setItem("wakeUpTime", String(wakeUp));
    localStorage.setItem("maxPuffs", String(maxPuffs));
    localStorage.setItem("hoursAwake", String(hoursAwake));

  }

export { getLocalStorage, setLocalStorage }