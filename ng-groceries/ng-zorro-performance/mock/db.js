const faker = require('faker');
const _ = require('lodash');
const GROUPS = require('./faker');
const NUMBER = 100;

const groupMembersWithChoices = GROUPS.map(group => ({
  groupName: group.groupName,
  members: group.memberNames.map(memberName => {
    const choices = [];
    const randomNum = Math.floor(Math.random() * 5) + 3; // 3 ~ 7

    for (let i = 0; i < randomNum; i++) {
      choices.push({
        id: i + 1,
        display: faker.fake(`{{${group.groupName}.${memberName}}}`)
      });
    }

    return {
      memberName,
      choices
    };
  })
}));

// const generateMember = n => ({
//   id: n,
//   name: faker.fake('{{name.lastName}}, {{name.firstName}} {{name.suffix}}'), // faker.name.findName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar()
// });

// const heroes = _.times(NUMBER_OF_HERO, generateMember);
// const villains = _.times(NUMBER_OF_VILLAIN, generateMember);

module.exports = (req, res, next) => ({
  selects: groupMembersWithChoices
});
