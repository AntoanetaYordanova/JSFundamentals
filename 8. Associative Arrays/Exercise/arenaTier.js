function arenaTier(input) {
  let gladiatiors = {};

  for (let gladiator of input) {
    if (gladiator === "Ave Cesar") {
      break;
    }

    if (!isBattle(gladiator)) {
      let [name, technique, skill] = gladiator.split(" -> ");
      skill = Number(skill);

      if (!gladiatiors.hasOwnProperty(name)) {
        gladiatiors[name] = {};
      }

      if (gladiatiors[name].hasOwnProperty(technique)) {
        if (gladiatiors[name][technique] < skill) {
          gladiatiors[name][technique] = skill;
        }
      } else {
        gladiatiors[name][technique] = skill;
      }
    }
  }

  function isBattle(str) {
    let arr = str.split(" ");
    if (arr.includes("vs")) {
      return true;
    } else {
      return false;
    }
  }
}

arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
