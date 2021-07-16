function arenaTier(input) {
  let gladiatiors = {};

  for (let currentInput of input) {
    if (currentInput === "Ave Cesar") {
      break;
    }

    if (!isBattle(currentInput)) {
      let [name, technique, skill] = currentInput.split(" -> ");
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
    } else {
        let [nameOne, vs, nameTwo] = currentInput.split(' ');
        if(gladiatiors.hasOwnProperty(nameOne) && gladiatiors.hasOwnProperty(nameTwo)) {
          let nameOneTechniques = Object.keys(gladiatiors[nameOne]);
          let nameTwoTechniques = Object.keys(gladiatiors[nameTwo]);
          
          for(let techniqueOne of nameOneTechniques) {
            for(let techniqueTwo of nameTwoTechniques) {

              if(techniqueOne === techniqueTwo) {

                if (gladiatiors[nameOne][techniqueOne] > gladiatiors[nameTwo][techniqueTwo]) {
                  delete gladiatiors[nameTwo];
                } else if (gladiatiors[nameOne][techniqueOne] < gladiatiors[nameTwo][techniqueTwo]) {
                  delete gladiatiors[nameOne];
                }
              }
            }
          }
        }
    }
  }

  let gladiatorsNames = Object.keys(gladiatiors);
  let gladiatorsTotalSkills = {};

  for(let name of gladiatorsNames) {
    let totalSkill = 0;
    let allCurrentSkills = Object.values(gladiatiors[name]);
  
    for(let skill of allCurrentSkills) {
      totalSkill += skill;
    }

    gladiatorsTotalSkills[name] = totalSkill;
  }

  let gladiatorsSorted = Object.entries(gladiatorsTotalSkills) .sort((a, b) => compare(a, b));

  for(let gladiator of gladiatorsSorted) {
    let [name, totalSKillPoints] = gladiator;
    console.log(`${name}: ${totalSKillPoints} skill`);
    let skillsSorted = Object.entries(gladiatiors[name]) .sort((a, b) => compare(a, b));
    
    for(let skill of skillsSorted) {
      let [skillName, skillPoints] = skill;
      console.log(`- ${skillName} <!> ${skillPoints}`);
    }
  }

  function compare(a , b) {
    let nameOne = a[0];
    let skillOne = a[1];
    let nameTwo = b[0];
    let skillTwo = b[1];

    if(skillOne !== skillTwo) {
      return skillTwo - skillOne;
    } else {
      return nameOne.localeCompare(nameTwo);
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

// arenaTier([
//   "Peter -> BattleCry -> 400",
//   "Alex -> PowerPunch -> 300",
//   "Stefan -> Duck -> 200",
//   "Stefan -> Tiger -> 250",
//   "Ave Cesar",
// ]);

arenaTier([
  'Peter -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Peter vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Maximilian',
  'Ave Cesar'
  ]
  )